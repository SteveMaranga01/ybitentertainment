<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project

Single-package Next.js 16 (App Router) project. React 19, TypeScript 5, Tailwind CSS v4.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` — production build (also runs type checking)
- `npm run lint` — ESLint (flat config, v9)
- No test framework is configured yet. No CI workflows exist.

## Key quirks

- **Tailwind v4, not v3.** Uses `@import "tailwindcss"` and `@theme inline` in CSS — NOT `@tailwind base/components/utilities` or `tailwind.config.*`.
- **ESLint 9 flat config** (`eslint.config.mjs`), not `.eslintrc`.
- Path alias `@/*` maps to the project root.
- App entrypoint is `app/` (App Router). Root layout: `app/layout.tsx`.
- Next.js bundled docs live in `node_modules/next/dist/docs/` — consult before using any Next.js API you're unsure about.
