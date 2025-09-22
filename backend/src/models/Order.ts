export type OrderStatus = 'Pending' | 'Processing' | 'Completed';

export interface Order {
  id: number;
  customerName: string;
  productId: number;
  status: OrderStatus;
}
