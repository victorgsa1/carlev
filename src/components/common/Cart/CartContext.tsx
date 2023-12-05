import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface CartItem {
  productName: string;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Carrega o carrinho do localStorage na montagem do componente
  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCart: CartItem[] = JSON.parse(storedCartString);

      // Adiciona cada item individualmente ao carrinho apenas se o carrinho estiver vazio
      if (cart.length === 0) {
        storedCart.forEach((item: CartItem) => {
          addToCart(item);
        });
      }
    }
  }, []); // [] significa que isso só é executado uma vez na montagem do componente

  // Atualiza o localStorage sempre que houver uma alteração no carrinho
  /*   useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]); */

  const addToCart = (itemToAdd: CartItem) => {
    setCart((prevCart) => {
      console.log(prevCart);
      // Verifica se o item já existe no carrinho
      const existingItemIndex = prevCart.findIndex(
        (item) => item.productName === itemToAdd.productName
      );
      if (existingItemIndex > -1) {
        // Se o item já existe, aumenta a quantidade
        const updatedCart = [...prevCart];
        console.log(updatedCart[existingItemIndex].quantity);
        updatedCart[existingItemIndex].quantity += 0.5;
        return updatedCart;
      } else {
        // Se o item não existe, adiciona ao carrinho
        return [...prevCart, itemToAdd];
      }
    });
    // Adiciona um return para sair da função
    return;
  };

  const removeFromCart = (index: number) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
