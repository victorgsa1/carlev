import React, { useEffect } from "react";
import { useCart } from "./CartContext";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  useEffect(() => {
    // Atualiza o carrinho com os dados do localStorage na montagem do componente
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCart = JSON.parse(storedCartString);
      addToCart(storedCart);
    }
  }, []); // Deixe o array de dependências vazio para executar apenas uma vez durante a montagem

  const removeItem = (index: number) => {
    removeFromCart(index);
    // O estado do carrinho já foi atualizado pelo removeFromCart, então não é necessário atualizar o localStorage aqui
  };

  const handleClearCart = () => {
    clearCart();
    onClose();
  };

 const WppSend = () => {
   const phoneNumber = "5519991460273";
   const message = encodeURIComponent(buildMessage());
   const whatsappLink = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}`;

   // Abre uma nova guia com o link do WhatsApp
   window.open(whatsappLink, "_blank");
 };

 const buildMessage = (): string => {
   // Verifica se há mais de um item no carrinho
   const pluralSuffix = cart.length > 1 ? "s" : "";

   // Construa a mensagem incluindo informações de todos os produtos no carrinho
   const productMessages = cart.map((product) => {
     return `${product.quantity}x ${product.productName}`;
   });

   return `Olá, estou interessado no${pluralSuffix} seguinte${pluralSuffix} produto${pluralSuffix}: ${productMessages.join(
     ", "
   )}`;
 };

  return (
    <div
      className={`cart ${
        isOpen ? "block" : "hidden"
      } bg-brand-100 text-white shadow-lg p-4 mt-20 absolute top-0 right-0 rounded-lg`}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl">Carrinho</h2>
        <button onClick={onClose} className="text-red-500">
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
        {/* <button
          onClick={onClose}
          className="bg-brand-200 text-white py-2 px-4 rounded mt-4"
        >
          Fechar Carrinho
        </button> */}
        <button
          onClick={WppSend}
          className="bg-white text-brand-200 w-full text-white py-2 px-4 rounded mt-4"
        >
          <span className="text-brand-200">Solicitar Orçamento</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
