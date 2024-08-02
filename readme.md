# Groceries App

## Overview

This project is a React Native application using Expo. It provides a template for getting started with React Native development using Expo.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)

- [Yarn](https://classic.yarnpkg.com/en/docs/install/) (optional but recommended)

- [Expo CLI](https://docs.expo.dev/get-started/installation/) (install with `npm install -g expo-cli`)

## Installation

1\. **Clone the repository:**
git clone https://github.com/TheSayed/Online-grocery-app

cd Online-grocery-app

1. **Install the dependencies:**

Make sure you're in the project directory, then install the required node modules by running:

bash

Copy code

yarn install

If you prefer using npm, you can use:

bash

Copy code

npm install

1\.  **Start the development server:**

To start the Expo development server, run:

bash

Copy code

npx expo start

1\.  **Run the app:**

- **For iOS:** Open the Expo Go app on your physical iOS device, then scan the QR code displayed in your terminal or in the Expo DevTools in your browser. If you don't have Expo Go installed, you can download it from the App Store.

- **For Android:** Open the Expo Go app on your physical Android device and scan the QR code displayed in your terminal or in the Expo DevTools in your browser. If you don't have Expo Go installed, you can download it from the Google Play Store.

Make sure your device and development server are on the same network:

For Expo Go to connect successfully, your development server (the machine running the Expo CLI) and your physical device should be on the same Wi-Fi network.

**Troubleshooting**

- If the app does not load, ensure that your device and development server are on the same network.

- Check the terminal for any error messages that might provide more information on issues you encounter.

**Project Details**

- **Project Name:** Online Grocery App

- **Type:** React Native with Expo

- **Features:**

- Trains 5 times per week for 2 hours each session.

- Uses Redux for state management.

- Uses TypeScript for type safety.

- Implements dynamic routes based on category names.

- Filters products based on categoryId.

- Uses useGetProductsQuery hook for fetching and displaying products.

- Implements search functionality with a SearchScreen component.

- Custom splash screen component managed by loading state and font loading.

**Additional Information**

- **Custom Splash Screen Component:** Managed by loading state and font loading, does not rely on Expo's splash screen configuration.

- **Package Manager:** Yarn (preferred), npm also supported.

- **Error Handling:** Issues with loading images but other product details like price, unit, and name are displayed normally.

- **Code Repository:** [GitHub Repository](https://github.com/TheSayed/Online-grocery-app)
