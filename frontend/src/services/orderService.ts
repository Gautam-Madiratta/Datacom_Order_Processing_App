import axios from 'axios';
import type { Order } from '../types/order';

const BASE_URL = 'http://localhost:4000/api';

export const submitOrder = (customerName: string, productId: number) =>
  axios.post<Order>(`${BASE_URL}/orders`, { customerName, productId });

export const fetchOrders = () =>
  axios.get<Order[]>(`${BASE_URL}/orders`);