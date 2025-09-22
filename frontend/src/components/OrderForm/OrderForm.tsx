// src/components/OrderForm/OrderForm.tsx
import { useState } from 'react';
import { Box, TextField, Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';
import { submitOrder } from '../../services/orderService';

const PRODUCTS = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 },
  { id: 4, name: 'Tablet', price: 499 },
];

export default function OrderForm() {
  const [customerName, setCustomerName] = useState('');
  const [productId, setProductId] = useState<number>(PRODUCTS[0].id);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName) return;
    await submitOrder(customerName, productId);
    setCustomerName('');
    setProductId(PRODUCTS[0].id);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <TextField
        label="Customer Name"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
        fullWidth
        required
        sx={{ mb: 2 }}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Product</InputLabel>
        <Select
          value={productId}
          label="Product"
          onChange={e => setProductId(Number(e.target.value))}
        >
          {PRODUCTS.map(p => (
            <MenuItem key={p.id} value={p.id}>
              {p.name} (${p.price})
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth>
        Submit Order
      </Button>
    </Box>
  );
}