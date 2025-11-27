# KAO E‑Commerce — Frontend

A modern, high-performance e‑commerce frontend for KAO Stores. Built with TypeScript, Tailwind CSS, and a robust state/data layer for reliability and speed.

## Features
- Product browsing, search, and filtered results
- Detailed product pages with media, ratings, and SEO meta tags
- Cart management (guest and authenticated) with quantity controls
- Currency display and price conversion with graceful fallbacks
- Bookmarks/wishlist and user account flows
- Responsive UI and accessible components

## Tech Stack
- React 18 + TypeScript
- Vite 5 for fast dev/build
- Tailwind CSS 3
- Redux Toolkit + redux-persist
- TanStack Query (React Query)
- React Router v6
- react-helmet-async for SEO

## Prerequisites
- Node.js 18+ (LTS recommended)
- npm 9+

## Getting Started
1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment:
   Create a `.env` file in the project root with the following variables:
   ```env
   VITE_API_URL="https://kaostores-3o74.onrender.com/api/v1"
   REACT_APP_FLUTTERWAVE_PUBLIC_KEY="<your_flutterwave_public_key>"
   ```
   Notes:
   - Keep keys private and never commit secrets.
   - Ensure the API URL is reachable from your environment.

3. Run the development server:
   ```bash
   npm run dev
   ```
   The server will start locally (default port 5173 or the next available port).

4. Build for production:
   ```bash
   npm run build
   ```
   Preview a production build locally:
   ```bash
   npm run preview
   ```

5. Lint the codebase:
   ```bash
   npm run lint
   ```

## Project Structure (high level)
```
Kao_Main_Ecomerce/
├── index.html            # Base HTML and SEO meta
├── public/               # Static assets (favicon, redirects)
├── src/
│   ├── assets/           # Images, icons, SVGs
│   ├── components/       # UI blocks and reusable components
│   ├── pages/            # Route pages (Product, Cart, Dashboard, etc.)
│   ├── services/         # API slice, store setup
│   ├── utils/            # Helpers, conversions, formatters
│   └── main.tsx          # App entry
└── vite.config.ts
```

## Deployment
- Build with `npm run build` and deploy the `dist` folder to your hosting provider.
- Common targets: Vercel, Netlify, AWS Amplify, or your preferred static host.
- Configure environment variables on the hosting platform and never hardcode secrets.

## Notes
- Ensure SEO meta tags in `index.html` reflect brand messaging and use your domain.
- Update favicon in `public/` as needed (SVG recommended).
