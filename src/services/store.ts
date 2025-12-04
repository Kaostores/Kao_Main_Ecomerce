import { configureStore, type Middleware } from "@reduxjs/toolkit";
import AllReducer from "@/services/reducers";
import { useDispatch, useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { api } from "./apiSlice";
import { logoutUser } from "./reducers";

const persistConfig = {
  key: "Kao_persist",
  version: 1,
  storage,
  blacklist: ["currentUser"], // avoid persisting auth state
};

const persistedReducer = persistReducer(persistConfig, AllReducer);

// Security middleware: purge persisted storage on logout to avoid stale state
const securityMiddleware: Middleware = (storeAPI) => (next) => (action) => {
  const result = next(action);
  if (logoutUser.match(action)) {
    try {
      // redux-persist uses `persist:<key>` in localStorage
      storage.removeItem("persist:Kao_persist");
    } catch {}
    // Clear RTK Query cache to drop any cached protected data
    storeAPI.dispatch(api.util.resetApiState());
  }
  return result;
};

export const store = configureStore({
  reducer: {
    persistedReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware, securityMiddleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export const UseAppDispach: () => typeof store.dispatch = useDispatch;
