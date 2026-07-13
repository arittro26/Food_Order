# Foody Zone

A simple full-stack food listing app built with React, Vite, styled-components, Express, and TypeScript. The app fetches food data from a local server and lets users search and filter dishes by meal type.

## Features

- Browse a responsive food catalog
- Search food items by name
- Filter items by breakfast, lunch, or dinner
- Fetch data from a local Express API

## Project Structure

- app/ - Vite + React frontend
- server/ - Express + TypeScript backend

## Tech Stack

### Frontend
- React
- Vite
- styled-components

### Backend
- Express
- TypeScript
- CORS
- Nodemon

## Getting Started

### 1. Install dependencies

In the project root, install dependencies for both the client and server:

```bash
cd app
npm install

cd ../server
npm install
```

### 2. Start the backend server

From the server folder:

```bash
npm run server
```

This starts the Express server on port 9000.

### 3. Start the frontend app

In a new terminal, from the app folder:

```bash
npm run dev
```

The Vite app will open locally, typically at http://localhost:5173.

## Available Scripts

### Frontend (app)
- npm run dev - start the Vite development server
- npm run build - build the app for production
- npm run preview - preview the production build

### Backend (server)
- npm run server - run the backend with watch mode
- npm run start - start the compiled server
- npm run watch - watch for TypeScript changes

## Notes

- The frontend expects the backend API at http://localhost:9000
- The server serves food images from the server/public/images folder
