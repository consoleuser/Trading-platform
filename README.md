# Lumora - Crypto Trading Webiste

Trading Platform is a React + Vite frontend with a Spring Boot backend for crypto trading, wallet management, watchlists, and payments.

## Repository Layout

- `back-end/` - Spring Boot API (Java 21, Spring Security, JPA, MySQL)
- `front-end/Crypto-Trading-React/` - Vite React app (Redux, Tailwind, Radix UI)
- `README.md` - This document

## Quick Start

### Backend (Spring Boot + MySQL)

1. Create a MySQL database named `crypto_trading` and update credentials in `back-end/src/main/resources/application.properties`.
2. Start the server:
   ```bash
   cd back-end
   mvnw spring-boot:run
   ```
   Windows:
   ```bash
   cd back-end
   mvnw.cmd spring-boot:run
   ```

### Frontend (Vite)

1. Start the client:
   ```bash
   cd front-end/Crypto-Trading-React
   npm install
   npm run dev
   ```
2. The frontend calls the backend at `http://localhost:5455` (see `front-end/Crypto-Trading-React/src/config/api.js`).

## Tech Stack

### Frontend (`front-end/Crypto-Trading-React/`)
- React 19 + Vite
- React Router
- Redux + redux-thunk
- Tailwind CSS + shadcn/ui (Radix UI)
- Axios
- ApexCharts

### Backend (`back-end/`)
- Spring Boot 3.4
- Spring Security + JWT (jjwt)
- Spring Data JPA
- MySQL
- Stripe Java SDK
- Spring Mail

### Frontend
- No `.env` file is used right now.
- API base URL is set in `front-end/Crypto-Trading-React/src/config/api.js`.

## Backend Details

### Entry point (`back-end/src/main/java/com/trading/trading_platform/TradingPlatformApplication.java`)
- Spring Boot application bootstrap.
- Configuration lives in `back-end/src/main/resources/application.properties`.

### Security and Auth
- JWT utilities in `back-end/src/main/java/com/trading/trading_platform/config`.
- Auth endpoints in `back-end/src/main/java/com/trading/trading_platform/controller/AuthController.java`.
- User profile and verification flows in `back-end/src/main/java/com/trading/trading_platform/controller/UserController.java`.

### Data Layer
- JPA entities in `back-end/src/main/java/com/trading/trading_platform/model`.
- Repositories in `back-end/src/main/java/com/trading/trading_platform/repository`.
- Services in `back-end/src/main/java/com/trading/trading_platform/service`.

## API Reference

Base URL (local):
- `http://localhost:5455`

Most `/api/**` endpoints expect `Authorization: Bearer <jwt>`.

### Auth (`/auth`)
- `POST /auth/signup`
- `POST /auth/signin`
- `POST /auth/two-factor/otp/{otp}?id=<sessionId>`

### Users
- `GET /api/users/profile`
- `GET /api/users/{userId}`
- `PATCH /api/users/enable-two-factor/verify-otp/{otp}`
- `POST /api/users/verification/{verificationType}/send-otp`
- `POST /auth/users/reset-password/send-otp`
- `PATCH /auth/users/reset-password/verify-otp?id=<sessionId>`

### Coins (`/coins`)
- `GET /coins?page=<page>`
- `GET /coins/{coinId}/chart?days=<days>`
- `GET /coins/search?q=<keyword>`
- `GET /coins/top50`
- `GET /coins/trending`
- `GET /coins/details/{coinId}`

### Assets (`/api/assets`)
- `GET /api/assets`
- `GET /api/assets/{assetId}`
- `GET /api/assets/coin/{coinId}/user`

### Orders (`/api/orders`)
- `POST /api/orders/pay`
- `GET /api/orders/{orderId}`
- `GET /api/orders?order_type=<BUY|SELL>&asset_symbol=<symbol>`

### Wallet
- `GET /api/wallet`
- `GET /api/wallet/transactions`
- `PUT /api/wallet/order/{orderId}/pay`
- `PUT /api/wallet/deposit?order_id=<id>&payment_id=<id>`
- `PUT /api/wallet/{walletId}/transfer`
- `GET /api/wallet/payment-success?order_id=<id>&payment_id=<id>`

### Payments
- `POST /api/payment/{paymentMethod}/amount/{amount}`

### Payment Details
- `POST /api/payment-details`
- `GET /api/payment-details`

### Watchlist (`/api/watchlist`)
- `GET /api/watchlist/user`
- `GET /api/watchlist/{watchlistId}`
- `PATCH /api/watchlist/add/coin/{coinId}`

### Withdrawals
- `POST /api/withdrawal/{amount}`
- `GET /api/withdrawal`
- `GET /api/admin/withdrawal`
- `PATCH /api/admin/withdrawal/{id}/proceed/{accept}`

### Health
- `GET /`
- `GET /api`

## Frontend Details

### App Entry and Providers
- `front-end/Crypto-Trading-React/src/main.jsx` bootstraps React, React Router, and Redux store.
- `front-end/Crypto-Trading-React/src/App.jsx` handles auth gating and routes.

### Routing
- Auth flow: `front-end/Crypto-Trading-React/src/pages/Auth/Auth.jsx`
- Main routes:
  - `Home`, `Portfolio`, `Activity`, `Wallet`, `Withdrawal`, `Payment Details`, `Stock Details`, `WatchList`, `Profile`, `Search`

### State Management
- Redux store in `front-end/Crypto-Trading-React/src/State/Store.js`.
- Auth actions in `front-end/Crypto-Trading-React/src/State/Auth/Action.js` store JWT in `localStorage`.

### API Configuration
- `front-end/Crypto-Trading-React/src/config/api.js` sets the base API URL and JSON headers.
