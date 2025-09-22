import type { Order } from '../../types/order';

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '1rem',
      marginBottom: '1rem',
      borderRadius: '6px'
    }}>
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Name:</strong> {order.customerName}</p>
      <p><strong>Product ID:</strong> {order.productId}</p>
      <p><strong>Status:</strong> {order.status}</p>
    </div>
  );
}