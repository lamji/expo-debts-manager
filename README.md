# Dets Manager

![App Icon](assets/icon.png)

A React Native Expo application for managing and tracking debts, loans, and transactions.

## Requirements

- Node.js version 18.18.0
- Expo CLI

## Project Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npx expo start
```

## Features

- **Loan Management**: Track and manage loan details
- **Debt Tracking**: Monitor debts and payment status
- **Transaction History**: View and manage transaction records
- **Calendar Integration**: Schedule and track payment dates
- **Filtering System**: Filter and sort loans/debts by various criteria
- **Theme Support**: Customizable theme settings

## Project Structure

```
src/
├── components/      # Reusable UI components
├── screens/         # Application screens
├── hooks/          # Custom React hooks
└── utils/          # Utility functions
```

## Components

- **FilterMenu**: Filter loans and debts by custom criteria
- **CalendarPicker**: Date selection for payments and schedules
- **Modal**: Reusable modal component for forms and alerts
- **FlatList**: Custom list components for loans and debts

## Screens

- **Home**: Dashboard with overview
- **LoanDetails**: Detailed view of individual loans
- **Debts**: Debt management interface
- **Transactions**: Transaction history and management
- **Settings**: App configuration and preferences
