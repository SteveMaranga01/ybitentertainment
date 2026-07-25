# Backend

Server-side modules for Ybit Entertainment live here.

- `db/` database clients and Prisma helpers
- `services/` business logic for events, orders, tickets, inquiries, and admin flows
- `mpesa/` Daraja authentication, STK Push, callbacks, and payment queries
- `email/` transactional email clients and templates
- `validators/` request validation schemas

Next.js route handlers in `app/api/**/route.ts` should stay thin and call these modules.
