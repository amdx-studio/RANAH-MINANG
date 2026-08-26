# Ranah Minang — Tourism Platform Prototype

Explore Minang, Experience the Culture, Empower the Community.

A frontend-only prototype built with Vue 3 + Vite + TypeScript + Tailwind CSS + Vue Router + Pinia.
No backend, no database, no real authentication — all data lives in `src/data/*.ts` and state is
managed with Pinia, persisted to `localStorage`.

## Getting Started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To type-check and build for production:

```bash
npm run build
npm run preview
```

## Main User Flow

Home → Explore → Destination Detail → Experience Detail → Booking → Payment → Booking Confirmed → My Journey

## Project Structure

See `src/` — pages in `src/pages`, reusable UI in `src/components`, prototype data in `src/data`,
Pinia stores in `src/stores`, routes in `src/router/index.ts`.

## Notes

- All statistics (impact numbers, profile impact, etc.) are clearly labeled "Prototype Demo Data".
- Images are loaded from Unsplash for demo purposes; `AppImage.vue` provides a graceful fallback if
  an image fails to load.
- Booking, favorites, and active journey state persist across reloads via `localStorage`.
