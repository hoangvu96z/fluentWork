# Mobile (React Native / Expo)

This app contains the FluentWork mobile client built with Expo and React Navigation.

## Structure

- `App.js` - root application bootstrap
- `navigation/AppNavigator.js` - route stack and screen navigation
- `screens/` - screen-level flows and user journeys
- `components/` - reusable UI blocks
- `config.js` - base API URL configuration

## Quick start

```bash
cd mobile
cp .env.example .env
npm install
npx expo start
```

Use `EXPO_PUBLIC_API_URL` to point the app at the backend API.
