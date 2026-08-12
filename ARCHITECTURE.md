# FluentWork Architecture

This repository contains two main app layers:

## Backend

Location: `backend/`

- `src/app.module.ts` - application root module.
  - `ConfigModule` loads environment variables globally.
  - `TypeOrmModule` connects to Postgres for relational entities.
  - `MongooseModule` connects to MongoDB for chat history.
- `src/main.ts` - bootstraps NestJS and exposes the API under `/api`.
- `src/health.controller.ts` - basic health check endpoint.
- `src/modules/` - domain modules separated by responsibility.
  - `auth/` - user auth endpoints.
  - `users/` - users CRUD backed by TypeORM.
  - `courses/` - courses CRUD backed by TypeORM.
  - `chat/` - chat message storage backed by MongoDB.

### Backend routes

- `POST /api/auth/login`
- `POST /api/auth/register`
- `GET /api/users`
- `POST /api/users`
- `GET /api/courses`
- `GET /api/courses/:id`
- `POST /api/courses`
- `GET /api/chat/:roomId`
- `POST /api/chat`

### Backend environment

- `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASS` for Postgres.
- `MONGO_URI` and `NOSQL_URL` for MongoDB.
- `PORT` for the app server.

## Mobile

Location: `mobile/`

- `App.js` - application entry point.
- `navigation/AppNavigator.js` - route-based navigation with screens.
- `screens/` - separate screen components for each route.
- `components/` - shared UI primitives used across screens.

### Mobile architecture goals

- Keep screen logic separated from presentational components.
- Use React Navigation for route-based flows.
- Avoid large single-file UI implementations.

## Development notes

- Use different modules for backend domains so logic is isolated and easier to extend.
- Keep API surface stable and versioned by route prefixes.
- Use environment-specific configuration for database connections.
- Keep mobile screens self-contained and reuse common UI components.
