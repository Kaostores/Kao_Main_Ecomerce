Frontend Security Measures – Kao_Main_Ecomerce

Scope
- This document describes client-side security controls implemented in the Kao_Main_Ecomerce frontend, focusing on RTK Query, Redux (including persistence), Axios, and cookie-based authentication.

Summary of Implemented Controls

1) Auth token handling and forced logout on unauthorized
- RTK Query base query is wrapped to intercept 401 Unauthorized responses and enforce a full client-side logout.
  - On 401: remove the auth cookie (Kao_cookie_user) and dispatch logoutUser.
  - Prevents bypass via stale Redux state or cached data when token is invalid/expired.
  - File: src/services/apiSlice.ts

2) Redux store hardening
- currentUser is excluded from Redux persistence to avoid rehydrating stale authentication state after refresh.
- A security middleware purges persisted storage and clears the RTK Query cache when logoutUser is dispatched.
  - Purges: localStorage.removeItem('persist:Kao_persist').
  - Resets RTK Query cache: dispatch(api.util.resetApiState()).
  - Files: src/services/store.ts

3) Sensitive data sanitization
- updateUserDetails strips any password field from the payload before storing to Redux.
- Removed a noisy console.log from addToCart to avoid leaking user actions into logs.
  - File: src/services/reducers.ts

4) Axios interceptor resilience
- The request interceptor now merges the Authorization header into existing headers without clobbering Content-Type, and sets a default Accept header.
  - Ensures JSON bodies for login/register are transmitted correctly.
  - Prevents header replacement bugs that caused “Email is required” / “Password is required” server errors.
  - File: src/utils/AxiosConfig.ts

Threats Mitigated
- Stale persisted auth after logout or token expiry (persistence bypass).
- Sensitive data leakage (password) into Redux and localStorage.
- Stale cached API data available post-logout (RTK Query cache bypass).
- Malformed request bodies due to header clobbering in interceptors.

Operational Behavior Changes
- After page refresh, currentUser is not rehydrated from storage. The app should derive auth state from the cookie or re-fetch user details.
- On logout, persisted storage and RTK Query cache are cleared; protected pages must re-authenticate.
- Any 401 response from protected endpoints triggers client-side logout and cookie removal.

Developer Guidance
- Do not persist secrets: if persisting user-related data, use a whitelist of safe fields (e.g., name, avatar) and avoid tokens or passwords.
- When adding new Axios interceptors, always merge into existing headers instead of replacing the headers object.
- Protected queries/mutations should rely on the base query’s Authorization handling; optionally skip queries if unauthenticated at the UI level.
- If you add new auth-related actions, ensure they integrate with the logout flow so caches and storage are cleared appropriately.

Testing Checklist
- Login/Register: JSON payloads include email and password; Content-Type remains application/json; server accepts the request.
- Unauthorized handling: simulate 401 from a protected endpoint; verify cookie removal, logout dispatch, and RTK Query cache reset.
- Refresh behavior: after login, refresh the page; currentUser is not auto-restored from persistence, and app handles it gracefully (e.g., fetches user details).
- Logout behavior: verify persisted storage is purged; protected content becomes inaccessible; RTK Query cache is empty.
- Non-auth slices: cart and addresses remain persisted and functional.

Rollback (not recommended)
- store.ts: remove the currentUser blacklist and the security middleware that purges storage and resets RTK Query cache.
- reducers.ts: revert password stripping in updateUserDetails (discouraged).
- apiSlice.ts: remove the 401-handling wrapper and use plain fetchBaseQuery (reduces security).
- AxiosConfig.ts: undo header merge changes (may reintroduce request body issues).

File Map
- src/services/apiSlice.ts – 401 intercept and forced logout logic.
- src/services/store.ts – persist configuration hardening and security middleware.
- src/services/reducers.ts – sanitized updateUserDetails and logging reduction.
- src/utils/AxiosConfig.ts – resilient header merging and defaults.

Maintenance
- Periodically validate that only non-sensitive slices are persisted.
- Keep cookie-based auth aligned across the app (consistent cookie name Kao_cookie_user).
- Review new features for protected endpoints and ensure queries respect authenticated state and the 401 flow.