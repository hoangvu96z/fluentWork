# FluentWork

FluentWork is a full-stack app with a NestJS backend and a React Native / Expo mobile client.

## Project structure

- Backend: [backend/](backend/)
- Mobile app: [mobile/](mobile/)
- Architecture notes: [ARCHITECTURE.md](ARCHITECTURE.md)
- CI/CD workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## Standard workflow

```bash
# Install dependencies for both apps
npm install --prefix backend
npm install --prefix mobile

# Run backend
npm run start:dev --prefix backend

# Run mobile
npm start --prefix mobile
```

## Environment configuration

Copy the example files before running the apps:

```bash
cp backend/.env.example backend/.env
cp mobile/.env.example mobile/.env
```

## Main responsibilities

- Backend handles auth, users, courses, and chat APIs.
- Mobile app contains screens, navigation, and reusable UI components.
- Shared conventions keep the repo predictable and easier to scale.
