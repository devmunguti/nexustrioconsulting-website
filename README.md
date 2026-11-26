# Nexustrio Consulting Frontend

React and Vite frontend for the Nexustrio Consulting website.

## Development

```powershell
npm install
npm run dev
```

Copy `.env.example` to `.env` for local development. The local API defaults to
`http://localhost:3001`; set `VITE_WHATSAPP_NUMBER` to the business number in
international format without `+` or spaces to enable the floating WhatsApp link.

For Vercel deployment, add `VITE_API_URL` as a Vercel environment variable and
set it to the deployed Render API origin (for example,
`https://your-service.onrender.com`). Set `VITE_WHATSAPP_NUMBER` there as well
if the business number is ready. These `VITE_` values are public and are
embedded in the frontend build, so do not put secrets in them.

On Render, set the backend's `FRONTEND_ORIGIN` to the deployed Vercel origin.
The API uses credentialed CORS, so the origin must match the frontend's
production domain.

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
