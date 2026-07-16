# Ahtesham Ahmad — Portfolio (React + Node.js)

Full-stack version of the portfolio site: a React (Vite) frontend and an Express backend
that actually receives contact-form submissions (and emails them via Nodemailer, once configured).

## Structure

```
portfolio-app/
  client/   → React app (Vite)
  server/   → Express API (contact form endpoint)
```

## Running it locally

### 1. Start the backend

```bash
cd server
npm install
cp .env.example .env   # then fill in your email credentials (see below)
npm start
```

Server runs on `http://localhost:5000`.

### 2. Start the frontend

In a new terminal:

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173` and proxies `/api` requests to the backend.

## Setting up the contact form email

The `/api/contact` route uses Gmail via Nodemailer. To make it actually send email:

1. Enable 2-Step Verification on the Gmail account you want to send from.
2. Create an **App Password**: Google Account → Security → App passwords.
3. In `server/.env`, set:
   ```
   EMAIL_USER=youraddress@gmail.com
   EMAIL_PASS=your_16_char_app_password
   TO_EMAIL=ahmad.ahtesham.12.12@gmail.com
   ```

If you skip this step, the form still works — submissions are just logged to the server
console instead of emailed, so you can develop without setting up email right away.

## Editing content

All profile content (bio, skills, experience, tools, projects) lives in one place:
`client/src/data/portfolioData.js`. Edit that file and every section updates automatically —
no need to touch component code for content changes.

## Deploying

- **Frontend**: `npm run build` in `client/` produces a static `dist/` folder — deploy to
  Vercel, Netlify, or GitHub Pages.
- **Backend**: deploy to Render, Railway, or any Node host. Remember to set the same
  environment variables there, and update the frontend's API base URL if it's not on
  the same domain (see `client/src/api.js`).
