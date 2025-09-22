import React from 'react';
import { useState } from 'react';
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
    <form onSubmit={handleSubmit}>
      <input
        id='text'
        type="text"
        placeholder="Customer Name"
        value={customerName}
        onChange={e => setCustomerName(e.target.value)}
        required
        style={{marginRight: '20px'}}
      />
      <select
        id='select'
        value={productId}
        onChange={e => setProductId(Number(e.target.value))}
        style={{marginRight: '20px'}}
      >
        {PRODUCTS.map(p => (
          <option key={p.id} value={p.id}>
            {p.name} (${p.price})
          </option>
        ))}
      </select>
      <button type="submit">Submit Order</button>
    </form>
  );
}