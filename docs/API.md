# Contact API

The portfolio form sends messages to a small Express API (`server/index.js`).

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/api/health` | Health check |
| `POST` | `/api/contact` | Receive a contact form message |

### `POST /api/contact`

**Request body (JSON):**

```json
{
  "name": "Layla Example",
  "email": "layla@example.com",
  "subject": "Portfolio inquiry",
  "message": "Hello!"
}
```

**Success (`201`):**

```json
{ "success": true, "id": "uuid" }
```

Messages are appended to `server/data/messages.json` on the server.

## Run locally

```bash
npm install
cp .env.example .env
npm run dev
```

1. Start the API (`npm run dev`).
2. Serve the static site (e.g. Live Server on port 5500).
3. Ensure `config.js` points to `http://localhost:3001/api/contact`.
4. Add your static origin to `CORS_ORIGINS` in `.env` if needed.

## Deploy

GitHub Pages only hosts static files. Deploy the API separately (Render, Railway, Fly.io, etc.), then set `window.CONTACT_API_URL` in `config.js` to your production URL, e.g. `https://your-api.onrender.com/api/contact`, and add your GitHub Pages URL to `CORS_ORIGINS` on the host.
