![image](https://github.com/Philippe16/DatabaseExam/assets/78900612/631273e5-412b-4a14-8072-4d2cb49b8a39)

# DatabaseExam

This repository contains the source code and resources for the Database Exam project. Below is an explanation of each folder and its contents.

## Folder Structure

### `database_resources`
This folder contains all the necessary resources for setting up and managing the database. It includes SQL scripts, database schemas, and any other files required for initializing and maintaining the database.

### `public`
The `public` folder includes static assets that are publicly accessible. This may consist of images, CSS files, and JavaScript files that are directly served to the client without any processing.

### `src`
The `src` folder holds the source code for the project. This is where the main application logic resides, including both frontend and backend code. The structure within this folder typically follows a standard web application architecture.

#### `app`
Contains the main application components and pages. This includes the Next.js application entry points, such as the main `pages` directory for routing.

#### `components`
Holds reusable React components used throughout the application. Each component is typically self-contained with its own styles and logic.

#### `context`
Manages the React context providers, which are used for state management and sharing data across the application components.

#### `lib`
Includes utility functions and libraries that support the main application logic. This can include API clients, helper functions, and other general-purpose code.

#### `types`
Defines TypeScript type definitions for the project. This helps in maintaining type safety and consistency across the codebase.

#### `utils`
Contains various utility functions that perform common tasks and operations used in different parts of the application.

### `.eslintrc.json`
This is the configuration file for ESLint, a tool for identifying and fixing problems in JavaScript code. It defines the coding standards and rules enforced in the project.

### `docker-compose.yml`
The `docker-compose.yml` file defines the Docker services, networks, and volumes for the project. It simplifies the process of setting up and managing multi-container Docker applications.

### `next.config.mjs`
This configuration file is used by Next.js, a React framework, to define custom settings for the Next.js application.

### `package-lock.json` & `package.json`
These files manage the project's dependencies. `package.json` specifies the packages required for the project, while `package-lock.json` locks the dependencies to specific versions for consistency across different environments.

### `postcss.config.mjs`
This is the configuration file for PostCSS, a tool for transforming CSS with JavaScript plugins.

### `tailwind.config.ts`
This file configures Tailwind CSS, a utility-first CSS framework. It includes custom settings for theme, variants, and plugins.

### `tsconfig.json`
This configuration file specifies the compiler options for TypeScript, ensuring consistent transpilation of TypeScript code to JavaScript.

## Contributors
- **Philippe16 (Jean André Philippe A. Suenson)**
- **bentsen (Mikkel Bentsen)**
