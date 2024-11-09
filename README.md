# StocksApp

StocksApp is a React Native application for browsing and searching stocks. This app utilizes various libraries and tools to provide a seamless and efficient experience.


# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Clone the repository
  ```sh
   git clone https://github.com/menna-magdy-182/stocks-app.git
   cd StocksApp

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


# Project Structure

/
|-- __tests__   # Holds test files for components and screens
|-- src/
|   |-- assets/   # contains images and icons needed for the app
|   |-- components/  # Contains reusable React components for use across multiple parts of the application
|   |-- constants/ # Stores constants or configuration files, like theme colors
|   |-- models/ # Defines data models or interfaces used throughout the application.
|   |-- navigation/ # Handles navigation-related code, including configuration and route definitions
|   |-- screens/ # Houses individual screens of the application
|   |-- services/ # API-related code such as network requests and response handling
|   |-- types/ # Contains modules definitions
|-- index.js # The entry point of the React Native application



# Unit Testing 

- Jest & react native testing library are used to create tests
- you can run it using 'yarn test'


# Typescript errors checking

- you can run it using 'yarn tsc'

# Linting errors checking

- you can run it using 'yarn lint'



# Dependencies

This project uses the following dependencies:

## Core Libraries

- **`@react-navigation/native`**: Routing and navigation library for React Native apps.
- **`@react-navigation/native-stack`**: Provides stack navigation for the app.
- **`@tanstack/react-query`**: Data fetching and caching tool.
- **`axios`**: Promise-based HTTP client for making API requests.
- **`react`**: The React library for building the UI.
- **`react-native`**: The core React Native framework for building mobile apps.
- **`react-native-error-boundary`**: Error boundary component for handling JavaScript errors in React Native components.
- **`react-native-fast-image`**: Optimized image component for React Native.
- **`react-native-safe-area-context`**: Provides information about the safe area of the screen.
- **`react-native-screens`**: Native screen management library for optimized navigation.

## Development Tools

- **`@babel/core`**: Babel compiler for transpiling JavaScript.
- **`@babel/preset-env`**: Babel preset for compiling JavaScript based on the target environment.
- **`@react-native-community/cli`**: React Native CLI tools for Android and iOS development.
- **`eslint`**: Linter for enforcing coding standards and best practices.
- **`eslint-plugin-simple-import-sort`**: ESLint plugin to sort import statements.
- **`jest`**: JavaScript testing framework for unit and integration tests.
- **`metro-react-native-babel-preset`**: Babel preset for React Native.
- **`prettier`**: Code formatter for maintaining consistent code style.
- **`react-native-dotenv`**: Load environment variables from a `.env` file.
- **`typescript`**: TypeScript language for static typing.

## Testing Libraries

- **`@testing-library/jest-native`**: Native testing extensions for Jest.
- **`@testing-library/react-native`**: Testing library for React Native components.
- **`react-test-renderer`**: Used for rendering React components to test their output.




# Environment Variables

This project uses a `.env` file to manage sensitive data and configuration settings, such as API keys. You can configure your environment variables by creating a `.env` file at the root of the project.

## Example `.env` File

Create a `.env` file with the following content:

```env
API_KEY=your_api_key_here