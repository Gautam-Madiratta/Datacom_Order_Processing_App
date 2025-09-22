import { Order } from '../models/Order';

let orders: Order[] = [];
let nextId = 1;

export const OrderStore = {
  addOrder(order: Omit<Order, 'id' | 'status'>): Order {
    const newOrder: Order = {
      id: nextId++,
      status: 'Pending',
      ...order,
    };
    orders.push(newOrder);
    return newOrder;
  },

  getOrders(): Order[] {
    return orders;
  },

  updateStatus(id: number, status: Order['status']) {
    const order = orders.find(o => o.id === id);
    if (order) order.status = status;
  }
};