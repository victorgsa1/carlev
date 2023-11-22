"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

interface cartItem {
  productName: string;
  quantity: number;
}

const FeedFeaturedItem = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [cart, setCart] = useState<cartItem[]>([]);

  useEffect(() => {
    // Atualizar o estado do carrinho com o valor do localStorage na montagem do componente
    const storedCartString = localStorage.getItem("cart");
    if (storedCartString) {
      const storedCart = JSON.parse(storedCartString);
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    // Atualizar o localStorage sempre que o carrinho for alterado
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedOption) {
      // Adicione lógica para lidar com nenhum item selecionado, se necessário
      return;
    }

    const cartItem = {
      productName: selectedOption,
      quantity: 1,
    };

    setCart((prevCart) => [...prevCart, cartItem]); // Atualize o estado do carrinho

    const updatedCart = [...cart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Limpe a seleção após adicionar ao carrinho
    setSelectedOption("");
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
        <select
          id="large"
          className="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleSelectChange}
          value={selectedOption}
        >
          {/* Opções do select */}
          <option value="null">Selecione um item</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
          <option value="F">F</option>
          <option value="G">G</option>
          <option value="H">H</option>
          {/* Adicione mais opções conforme necessário */}
        </select>
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
