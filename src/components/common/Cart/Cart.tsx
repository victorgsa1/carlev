import React, { useEffect } from "react";

interface CartItem {
  productName: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[]; // Adiciona a propriedade cart
  updateCart: (newCart: CartItem[]) => void; // Função para atualizar o carrinho
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, cart, updateCart }) => {
  useEffect(() => {
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCart = JSON.parse(storedCartString);
      updateCart(storedCart);
    }
  }, []); // Deixe o array de dependências vazio para executar apenas uma vez durante a montagem

  const removeItem = (index: number) => {
    const updatedCartItems = [...cart];
    updatedCartItems.splice(index, 1);
    updateCart(updatedCartItems);
    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
  };

  const clearCart = () => {
    updateCart([]);
    localStorage.removeItem("cart");
    onClose();
  };

  const WppSend = () => {
    console.log("oi");
  };

  return (
    <div
      className={`cart ${
        isOpen ? "block" : "hidden"
      } bg-brand-100 text-white shadow-lg p-4 mt-20 absolute right-0 rounded-lg`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Carrinho</h2>
        <button onClick={clearCart} className="text-red-500">
          X
        </button>
      </div>
      <ul>
        {cart?.map((item, index) => (
          <li key={index} className="mb-2 flex items-center justify-between">
            <div>
              {item.productName} - Quantidade: {item.quantity}
            </div>
            <button onClick={() => removeItem(index)} className="text-red-500">
              X
            </button>
          </li>
        ))}
      </ul>
      <div className="flex flex-row gap-4">
        <button
          onClick={onClose}
          className="bg-brand-200 text-white py-2 px-4 rounded mt-4"
        >
          Fechar Carrinho
        </button>
        <button
          onClick={WppSend}
          className="bg-brand-200 text-white py-2 px-4 rounded mt-4"
        >
          Concluir Pedido
        </button>
      </div>
    </div>
  );
};

export default Cart;
