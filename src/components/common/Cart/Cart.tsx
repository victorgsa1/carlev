import React, { useEffect } from "react";
import { useCart, CartItem } from "./CartContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  const removeItem = (index: number) => {
    removeFromCart(index);
  };

  const handleClearCart = () => {
    clearCart();
    onClose();
  };

  const WppSend = () => {
    const phoneNumber = "5519997093646";
    const message = encodeURIComponent(buildMessage());
    const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;

    window.open(whatsappLink, "_blank");
  };

  const buildMessage = (): string => {
    const pluralSuffix = cart.reduce(
      (total, product) => total + product.quantity,
      0
    );

    const productMessages = cart.map((product) => {
      return `${product.quantity}x ${product.productName}`;
    });

    return `Olá, estou interessado no${pluralSuffix > 1 ? "s" : ""} seguinte${
      pluralSuffix > 1 ? "s" : ""
    } produto${pluralSuffix > 1 ? "s" : ""}: ${productMessages.join(", ")}`;
  };

  return (
    <div
      className={`cart ${
        isOpen ? "block" : "hidden"
      } bg-white  border border-2 border-black-500 shadow-lg p-4 mt-20 absolute top-0 right-0 rounded-lg`}
    >
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-2xl text-brand-200 mr-5">Carrinho</h2>
        <button onClick={onClose} className="bg-white-200 border border-red-500 shadow-lg py-1 px-2 rounded ">
          <span className="text-red-500">Fechar</span>
        </button>
        
      </div>

      <ul>
        {cart?.map((item, index) => (
          <li key={index} className="mt-5 flex items-center justify-between">
            <div className="text-gray-500">
             {item.productName}-  Quantidade: {item.quantity}
            </div>
            <button onClick={() => removeItem(index)} className=" text-red-500 ml-5">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
</svg>
            </button>
            
          </li>
          
        ))}
      </ul>
      <div className="flex flex-row-reverse">
        {/* <button
          onClick={onClose}
          className="bg-brand-200 text-white py-2 px-4 rounded mt-4"
        >
          Fechar Carrinho
        </button> */}
      
          <button
            onClick={WppSend}
            className={`cart ${
              cart.length==0? "hidden" : "block"
            } text-green-200 bg-green-600 w-50  py-2 px-4 shadow-lg rounded mt-4`}
          >
         
          <span className="text-white ">Solicitar Orçamento</span>
          
        </button>
        
      </div>
    </div>
  );
};

export default Cart;
