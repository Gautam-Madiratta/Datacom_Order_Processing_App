
---
# Frontend – Order Processing UI

This is a React + TypeScript frontend for submitting and tracking customer orders in real time.

## 🚀 Features
- Submit new orders via form
- Select product from dropdown
- Polls backend every 2s to update order status
- Displays live status transitions

## 🛠️ Tech Stack
- React
- TypeScript
- Vite
- Axios

## 📦 Setup

```bash
cd frontend
npm install
npm run dev
```

## 🔗 Backend Integration
- Ensure backend is running at http://localhost:4000
- API base URL is configured in orderService.ts

## 🧪 Testing
- Submit an order → should appear instantly
- Status updates: Pending → Processing → Completed

## 📌 Notes
- Product list is hardcoded for simplicity
- Easily extendable with styling, error handling, or DB integration
