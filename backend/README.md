# Backend (NestJS) - FluentWork

This folder contains the backend service for FluentWork, built with NestJS. It includes:

- `AuthModule`: placeholder auth endpoints for login/register.
- `UsersModule`: PostgreSQL user storage using TypeORM.
- `CoursesModule`: PostgreSQL course management API.
- `ChatModule`: MongoDB chat history storage using Mongoose.
- `HealthController`: simple health-check endpoint.

## Architecture

- Postgres SQL bindings are configured with `@nestjs/typeorm` in `src/app.module.ts`.
- MongoDB bindings are configured with `@nestjs/mongoose` in `src/app.module.ts`.
- Modules are organized under `src/modules/*` for domain separation.
- API routes are mounted using controller prefixes:
  - `POST /api/auth/login`
  - `POST /api/auth/register`
  - `GET /api/users`
  - `POST /api/users`
  - `GET /api/courses`
  - `GET /api/courses/:id`
  - `POST /api/courses`
  - `GET /api/chat/:roomId`
  - `POST /api/chat`

## Quick start

```bash
cd backend
npm install
cp .env.example .env
# edit .env with your Postgres and MongoDB connection details
npm run start:dev
```

The API will be available at `http://localhost:3000/api`.
