// src/pages/api/cart.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { addToCart, getCart, removeFromCart } from '../components/cartService';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const cart = await getCart();
      res.status(200).json(cart);
      break;
    case 'POST':
      const itemToAdd = req.body;
      await addToCart(itemToAdd);
      res.status(200).json({ message: 'Item added to cart' });
      break;
    case 'DELETE':
      const itemId = req.query.itemId as string;
      await removeFromCart(itemId);
      res.status(200).json({ message: 'Item removed from cart' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
