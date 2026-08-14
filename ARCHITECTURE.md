# FluentWork Architecture

This repository follows a simple monorepo structure with two main app layers.

## Backend

Location: `backend/`

- `src/app.module.ts` - root NestJS application module.
  - `ConfigModule` loads environment variables globally.
  - `TypeOrmModule` connects to PostgreSQL for relational models.
  - `MongooseModule` connects to MongoDB for chat storage.
- `src/config/env.config.ts` - central env validation for required variables.
- `src/main.ts` - bootstraps the backend and sets `/api` as the global prefix.
- `src/modules/` - domain-oriented modules.
  - `auth/` - login, registration, JWT handling.
  - `users/` - user CRUD and entity logic.
  - `courses/` - course CRUD and metadata.
  - `chat/` - Mongo-based chat message persistence.

### API conventions

- Base path: `/api`
- Auth: `POST /api/auth/login`, `POST /api/auth/register`
- Users: `GET /api/users`, `POST /api/users`
- Courses: `GET /api/courses`, `GET /api/courses/:id`, `POST /api/courses`
- Chat: `GET /api/chat/:roomId`, `POST /api/chat`

### Backend environment

Required variables are defined in `backend/.env.example`:

- `PORT`
- `JWT_SECRET`
- `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASS`, `DB_NAME`
- `MONGO_URI`

## Mobile

Location: `mobile/`

- `App.js` - app entry point.
- `navigation/AppNavigator.js` - route configuration and stack navigation.
- `screens/` - feature screens such as login, home, meeting, progress, etc.
- `components/` - reusable UI and application primitives.
- `config.js` - central API URL helper for environment-based configuration.

### Mobile configuration

- Use `.env` values with `EXPO_PUBLIC_API_URL`.
- Keep UI screens focused on screen-level logic.
- Prefer small reusable components over large monolithic screens.

## Standards for this repo

- One clear responsibility per module.
- Environment variables should be validated and documented.
- Shared root scripts should be used for repetitive commands.
- CI should run the same install/build steps as local development.
