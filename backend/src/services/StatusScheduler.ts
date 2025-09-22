import { OrderStore } from '../store/OrderStore';

export function scheduleStatusUpdates(orderId: number) {
  setTimeout(() => {
    OrderStore.updateStatus(orderId, 'Processing');
  }, 2000);

  setTimeout(() => {
    OrderStore.updateStatus(orderId, 'Completed');
  }, 10000);
}
