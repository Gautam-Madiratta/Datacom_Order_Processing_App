import { useEffect, useState } from 'react';
import { fetchOrders } from '../services/orderService';
import type { Order } from '../types/order';

export function useOrdersPolling(interval = 2000) {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const poll = () => fetchOrders().then(res => setOrders(res.data));
    poll(); // initial fetch
    const id = setInterval(poll, interval);
    return () => clearInterval(id);
  }, [interval]);

  return orders;
}