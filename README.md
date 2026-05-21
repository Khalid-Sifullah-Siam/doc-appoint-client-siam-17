# docAppoint — Smart Healthcare Booking Platform

Book doctor appointments with confidence—fast browsing, easy scheduling, and secure authentication.

---


## Description
**docAppoint** is a Next.js healthcare booking platform that helps users browse doctors and manage appointments with built-in authentication.

Authentication is handled using **better-auth**, with user accounts stored in **MongoDB**. The system supports:
- Email/password sign-in
- Google social login

---

## Features
- Secure authentication (email & password)
- Google OAuth login
- MongoDB-backed session/account persistence
- Protected routing for authenticated users
- Appointment-related UI flows (doctors listing, doctor details, booking, profile)

---

## Tech Stack
- **Next.js** (App Router)
- **React**
- **better-auth** (authentication)
- **MongoDB** (database)
- **Axios** (API requests)
- **Tailwind CSS** (UI styling)
- **react-hot-toast** (notifications)

---

## Live link: 
https://doc-appoint-client-siam-17.vercel.app


## Installation

```bash
git clone <repo-link>
cd doc-appoint
npm install
```

---

## Environment Variables
Create a `.env` file in the project root.

```bash
PORT=3000
MONGO_URI=your_mongodb_url

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# Used by better-auth client on the frontend
BETTER_AUTH_URL=http://localhost:3000/api/auth
```

> Notes:
> - `BETTER_AUTH_URL` should match where your Next.js app exposes `better-auth` routes.
> - If you deploy to Vercel, update it to the deployed domain.

---

## Run Locally

```bash
npm run dev
```

Open: `http://localhost:3000`

---

## Scripts
- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run production build
- `npm run lint` — lint the codebase

---

## Project Structure

- `src/app/api/auth/[...all]/route.js` — better-auth route handlers
- `src/lib/auth.js` — auth configuration (MongoDB adapter, providers)
- `src/lib/auth-client.js` — better-auth client setup (frontend)
- `src/app/(auth)/` — authentication pages/components
- `src/app/(dashboard)/` — dashboard pages/components
- `src/app/(userView)/` — user-facing pages (appointments, doctors, booking)
- `src/app/components/` — UI components (shared + home components)
- `src/data/doctors.js` — doctors seed data

---

## Deployment
This project is Vercel-friendly.

1. Build: `npm run build`
2. Start: `npm run start`
3. Add the same environment variables in the Vercel dashboard.

---

## Contributing
Pull requests are welcome.

- For major changes, open an issue first.
- Keep code style consistent and update docs when behavior changes.

---

## License
MIT License

---

## FAQ
**Q: Why do I need `MONGO_URI`?**
A: better-auth uses MongoDB to store accounts/sessions.

**Q: What if Google login doesn’t work?**
A: Ensure `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` are correct and that your Google OAuth consent screen + redirect URIs match your app URL.

