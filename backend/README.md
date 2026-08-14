# Backend (NestJS) - FluentWork

This folder contains the backend service for FluentWork, built with NestJS.

## Modules

- `AuthModule`: login and registration flow with JWT issuance.
- `UsersModule`: PostgreSQL user storage using TypeORM.
- `CoursesModule`: course management API.
- `ChatModule`: chat persistence using MongoDB and Mongoose.
- `HealthController`: app health-check endpoint.

## Architecture

- Database connections are configured in `src/app.module.ts`.
- Environment validation is centralized in `src/config/env.config.ts`.
- API routes are structured under the `/api` prefix.

## Quick start

```bash
cd backend
npm install
cp .env.example .env
npm run start:dev
```

The API will be available at `http://localhost:3000/api`.

## Scripts

```bash
npm run start:dev
npm run build
npm run lint
npm test
```
