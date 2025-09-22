# Backend – Order Processing API

This is a lightweight Node.js + TypeScript backend for managing customer orders. It supports order creation and automatic status transitions.

## 🚀 Features
- `POST /api/orders`: Create a new order
- `GET /api/orders`: Fetch all orders
- Status transitions: Pending → Processing (2s) → Completed (10s)
- In-memory store (no DB required)
- CORS enabled for frontend integration

## 🛠️ Tech Stack
- Node.js
- Express
- TypeScript

## 📦 Setup

```bash
cd backend
npm install
npm run dev
```
Server runs at http://localhost:4000

## 🧪 Testing
Use Thunder Client or Postman:
- POST /api/orders with { customerName, productId }
- GET /api/orders to view status updates

