import OrderCard from '../OrderCard/OrderCard';
import { useOrdersPolling } from '../../hooks/useOrdersPolling';

export default function OrdersList() {
  const orders = useOrdersPolling(); // Poll every 2 seconds

  if (orders.length === 0) return <p>No orders yet.</p>;

  return (
    <div>
      <h2>🧾 Submitted Orders</h2>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}