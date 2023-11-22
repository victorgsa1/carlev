"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../Cart/CartContext";

const FeedFeaturedItem = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const { cart, addToCart } = useCart();

  useEffect(() => {
    // Atualizar o localStorage sempre que o carrinho for alterado
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddToCart = () => {
    if (!inputValue) {
      // Adicione lógica para lidar com nenhum valor inserido, se necessário
      return;
    }

    const cartItem = {
      productName: inputValue,
      quantity: 1,
    };

    addToCart(cartItem); // Adicione ao carrinho usando addToCart do contexto

    // Limpe o input após adicionar ao carrinho
    setInputValue("");
  };

  return (
    <section>
      <div className="row">
        <Image
          src="/img/swa-2200/barradacamera.png"
          width={1200}
          height={700}
          alt="Featured"
          className="relative xl:object-cover xl:w-full "
        />
        <input
          type="text"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleInputChange}
          value={inputValue}
          placeholder="Digite o nome do item"
        />
        <button
          onClick={handleAddToCart}
          className="ml-4 px-4 py-3 bg-blue-500 text-white rounded-lg"
        >
          Adicionar ao Carrinho
        </button>
        <Image
          src="/img/swa-2200/fixadorconvencional.png"
          width={730}
          height={500}
          alt="Featured"
          className="relative xl:object-cover xl:w-full "
        />
        <Image
          src="/img/swa-2200/alvos.png"
          width={730}
          height={500}
          alt="Featured"
          className="relative xl:object-cover xl:w-full "
        />
        <Image
          src="/img/swa-2200/fixadorrapido.png"
          width={730}
          height={500}
          alt="Featured"
          className="relative xl:object-cover xl:w-full "
        />
        <Image
          src="/img/swa-2200/fixadorrapido2.png"
          width={730}
          height={500}
          alt="Featured"
          className="relative xl:object-cover xl:w-full "
        />
        <Image
          src="/img/swa-2200/torredacameramovel.png"
          width={730}
          height={500}
          alt="Featured"
          className="relative xl:object-cover xl:w-full "
        />
      </div>
    </section>
  );
};

export default FeedFeaturedItem;
