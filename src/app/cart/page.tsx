// src/components/Cart.tsx

import { useCart } from "../swr/useCart";

export default function Cart() {
  const { cart, addItem, removeItem } = useCart();

  if (!cart) return <div>Loading...</div>;

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
