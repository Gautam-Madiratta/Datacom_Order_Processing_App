import { Router } from 'express';
import { OrderStore } from '../store/OrderStore';
import { scheduleStatusUpdates } from '../services/StatusScheduler';

const router = Router();

router.post('/orders', (req, res) => {
  const { customerName, productId } = req.body;
  if (!customerName || !productId) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const newOrder = OrderStore.addOrder({ customerName, productId });
  scheduleStatusUpdates(newOrder.id);
  res.json(newOrder);
});

router.get('/orders', (req, res) => {
  res.json(OrderStore.getOrders());
});

export default router;