// src/hooks/useCart.ts
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useCart() {
  const { data, error, mutate } = useSWR('/api/cart', fetcher);

  const addItem = async (item) => {
    await fetch('/api/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    });
    mutate(); // Re-fetch the cart data
  };

  const removeItem = async (itemId) => {
    await fetch(`/api/cart?itemId=${itemId}`, {
      method: 'DELETE',
    });
    mutate(); // Re-fetch the cart data
  };

  return {
    cart: data,
    error,
    addItem,
    removeItem,
  };
}
