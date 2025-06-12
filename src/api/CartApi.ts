// Types for cart items
export interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
  image: string;
}

// Dummy cart data
const dummyCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Winter Pajama 2025 - set',
    color: 'Purple',
    size: 'L',
    quantity: 1,
    price: 1200,
    image: '/pajames.png'
  },
  {
    id: '2',
    name: 'Winter Pajama 2025 - set',
    color: 'Pink',
    size: 'L',
    quantity: 1,
    price: 800,
    image: '/pajames(2).png'
  }
];

// API functions
export const getCartItems = async (): Promise<CartItem[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return dummyCartItems;
};

export const getCartTotal = (): number => {
  return dummyCartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
};