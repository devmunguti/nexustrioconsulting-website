# Nexustrio Consulting Frontend

React and Vite frontend for the Nexustrio Consulting website.

## Development

```powershell
npm install
npm run dev
```

Copy `.env.example` to `.env` for local development. The local API defaults to
`http://localhost:3001`. The public WhatsApp number is configured in
`src/data/enquiryConfig.js`.

The home hero slide order and copy live in `src/data/heroSlides.js`; its
auto-advance interval is `AUTO_ADVANCE_INTERVAL` in
`src/components/sections/HeroCarousel.jsx`. Optional hero images belong in
`public/images/hero/` (see that folder's `README.txt` for expected filenames).
The enquiry recipient stays server-side in the backend's `INQUIRY_TO_EMAIL`
configuration.

For Vercel deployment, add `VITE_API_URL` as a Vercel environment variable and
set it to the deployed Render API origin (for example,
`https://your-service.onrender.com`). `VITE_API_URL` is public and embedded in
the frontend build, so do not put secrets in it. Set the value for every
Vercel environment you use and redeploy after changing it. Production
builds do not fall back to `localhost:3001`; that default is only for local
development.

On Render, set the backend's `FRONTEND_ORIGIN` to the deployed Vercel origin.
The value must exactly match the website origin, including `https://` and any
custom domain, with no path. The API uses credentialed CORS, so a mismatch
prevents the browser from reading the response.

To diagnose a booking failure, open the backend's `/healthz` URL (for example,
`https://your-service.onrender.com/healthz`) and confirm it returns
`{"status":"ok"}`. Then verify `VITE_API_URL` is the backend origin and
`FRONTEND_ORIGIN` is the frontend origin, and redeploy both services after
changing their environment variables. A `503` or `502` response means the
browser reached the API, but email delivery needs backend Resend configuration;
“Could not reach the booking service” points to an unreachable API URL or a
browser CORS/network issue.

## Validation

```powershell
npm run lint
npm run build
```

## Source structure

- `src/components/layout`: shared navigation and footer
- `src/components/ui`: reusable UI primitives
- `src/data/services.js`: service definitions and bullet lists
- `src/pages`: top-level route views
- `src/assets`: images and visual assets
