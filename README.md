# React Native Authentication Boilerplate

This repository provides a boilerplate implementation for building an end-to-end authentication flow in React Native. The project leverages tools like **React Query**, **Axios**, **Async Storage**, and **Create Expo Stack** to offer a seamless development experience.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Knowledge Transfer: Axios in the React Ecosystem](#knowledge-transfer-axios-in-the-react-ecosystem)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This boilerplate is designed to streamline the process of setting up authentication in a React Native application. It handles everything from user registration and login to token management, ensuring that you have a solid foundation for secure and efficient authentication in your app.

## Features

- **End-to-End Authentication**: Includes user registration, login, token management, and protected routes.
- **React Query for State Management**: Efficiently manages server-state with built-in caching, background updates, and error handling.
- **Axios for HTTP Requests**: Simplifies API interactions with a flexible and powerful HTTP client.
- **Async Storage for Persistent Storage**: Stores tokens securely on the device for persistent user sessions.
- **Expo Managed Workflow**: Leverages Expo’s managed workflow for easy project setup and development.

## Project Structure

```plaintext
.
├── app/
│   ├── auth/
│   │   ├── _layout.tsx
│   │   ├── login.tsx
│   ├── drawer/
│   │   ├── tabs/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   ├── api/
│   │   ├── ApiProvider.tsx
│   │   ├── use-get-events.ts
│   │   ├── use-get-token.ts
│   ├── context/
│   │   ├── AuthContext.tsx
│   ├── _layout.tsx
│   ├── +html.tsx
│   ├── +not-found.tsx
│   ├── index.tsx
│   ├── modal.tsx
├── assets/
├── components/
├── constants/
├── types/
├── .expo/
├── .vscode/
├── android/
├── ios/
├── node_modules/
├── .gitignore
├── app.json
├── babel.config.js
├── eas.json
├── expo-env.d.ts
├── global.css
```

- **app/auth**: Contains the authentication-related screens and layout components.
- **app/drawer**: Manages the drawer navigation and related tabs.
- **app/api**: Contains the API provider and custom hooks for fetching data and managing tokens using Axios.
- **app/context**: Houses the `AuthContext` component for managing authentication state across the app.
- **components**: Contains reusable UI components.
- **constants**: Stores constant values and configurations used throughout the app.
- **types**: Type definitions for TypeScript.

## Getting Started

To get started with this boilerplate:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Run the app:**
    ```bash
    expo start
    ```

## How It Works

This boilerplate handles the entire authentication flow using React Query for state management and Axios for API requests.

1. **Registration/Login**: The user can register or log in through the provided screens. Axios handles the API requests, sending user credentials to the server.

2. **Token Management**: Upon successful authentication, a token is returned by the API, which is then stored using Async Storage for persistent access.

3. **Protected Routes**: The app checks for the presence of a valid token before allowing access to protected routes. If no token is found, the user is redirected to the login screen.

4. **State Synchronization**: React Query ensures that the app's state is always in sync with the server, handling background updates and cache invalidation.

## Knowledge Transfer: Axios in the React Ecosystem

Understanding Axios is a valuable skill that can be easily transferred to other parts of the React ecosystem. Axios provides a flexible and powerful HTTP client that can be used in both React and React Native projects. Whether you're building a web app or a mobile app, Axios helps simplify API interactions with features like interceptors, request cancellation, and automatic JSON data transformation.

In this project, Axios is used to manage all API requests, making it easy to handle authentication flows. By learning how Axios works in this React Native setup, you'll gain knowledge that can be applied to other React projects, whether they are mobile, web, or server-side rendered applications.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open a pull request or raise an issue.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
