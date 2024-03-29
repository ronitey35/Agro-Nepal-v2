'use client';

type shoppingCartProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart?: (id: string) => void;
  getItemQuantity: (id: string) => number;
  increaseCartQuantity: (item: CartItem) => void;
  decreaseCartQuantity: (id: string) => void;
  removefromCart: (id: string) => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: shoppingCartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: string) {
    return cartItems.find((item) => item.id == id)?.quantity || 0;
  }

  function increaseCartQuantity(newItem: CartItem) {
    // check if item exists
    const itemExists = cartItems.find((item) => item.id === newItem.id);
    if (itemExists) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === newItem.id)
          return {
            ...item,
            quantity: item.quantity + 1
          };
        return item;
      });
      setCartItems(updatedCartItems);
      return;
    }

    // add if item does not exist
    setCartItems([...cartItems, newItem]);
  }

  function decreaseCartQuantity(id: string) {
    setCartItems((CurrItems) => {
      if (CurrItems.find((item) => item.id === id)?.quantity == 1) {
        return CurrItems.filter((item) => item.id != id);
      } else {
        return CurrItems.map((item) => {
          if (item.id == id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removefromCart(id: string) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id != id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removefromCart,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
        isOpen
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
