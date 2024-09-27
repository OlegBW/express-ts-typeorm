# express-ts-typeorm

A boilerplate for building a TypeScript application with Express and TypeORM, using SQLite as the database. This project is set up to use TypeScript for development and includes scripts for building, formatting, and running the app in both development and production modes.

## Features

- **Express** - Web framework for Node.js.
- **TypeScript** - Typed superset of JavaScript that compiles to plain JavaScript.
- **TypeORM** - ORM for managing your database.
- **SQLite** - Lightweight and self-contained database engine.
- **Prettier** - Code formatting tool.
- **Nodemon** - Automatically restarts the app when files change during development.
- **PM2** - Process manager for running production-ready Node.js applications.

## Prerequisites

- **Node.js** version 16 or higher.
- **npm** or **yarn** for managing dependencies.
- **PM2** for managing background processes.

You can install **PM2** globally using the following command:

```bash
npm install pm2 -g
```

## Scripts
- `npm run build`: Compiles the TypeScript files.
- `npm run start`: Starts the bot using Node.js (production mode).
- `npm run dev`: Starts the bot in development mode with nodemon for automatic restarts.
- `npm run format`: Formats the code using Prettier.
- `npm run prepare`: Prepares the project by building it before deployment.
- `npm run bg:start`: Builds the project and starts the bot in the background using PM2.
- `npm run bg:restart`: Restarts the background bot process.
- `npm run bg:logs`: Displays the bot logs from PM2.
