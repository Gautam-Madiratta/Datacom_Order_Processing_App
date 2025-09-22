// src/components/OrderCard/OrderCard.tsx
import { Card, CardContent, Typography, Chip, Stack } from '@mui/material';
import { type Order } from '../../types/order';

interface Props {
  order: Order;
}

const statusColorMap = {
  Pending: 'warning',
  Processing: 'info',
  Completed: 'success',
} as const;

export default function OrderCard({ order }: Props) {
  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Order #{order.id}</Typography>
          <Chip label={order.status} color={statusColorMap[order.status]} />
        </Stack>
        <Typography><strong>Customer:</strong> {order.customerName}</Typography>
        <Typography><strong>Product ID:</strong> {order.productId}</Typography>
      </CardContent>
    </Card>
  );
}