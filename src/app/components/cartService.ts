// src/lib/cartService.ts (Mock Implementation)
export interface CartItem {
  id: string;
  name: string;
  quantity: number;
}

let mockCart: CartItem[] = []; // In-memory mock cart

export async function getCart() {
  return mockCart;
}

export async function addToCart(item: CartItem) {
  mockCart.push(item);
}

export async function removeFromCart(itemId: string) {
  mockCart = mockCart.filter(item => item.id !== itemId);
}
