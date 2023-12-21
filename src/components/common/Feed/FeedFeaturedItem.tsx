"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useCart } from "../Cart/CartContext";

const FeedFeaturedItem = () => {
  const { cart, addToCart } = useCart();

  const [inputValue, setInputValue] = useState<string>("");
  const [modelValue, setModelValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    setModelValue(event.target.dataset.model || "");
  };

  const handleAddToCart = () => {
    console.log("handleAddToCart chamado");

    if (!inputValue || !modelValue) {
      return;
    }

    const cartItem = {
      productName: `Alinhador PRO42 - Item ${inputValue} - ${modelValue}`,
      quantity: 1,
    };

    addToCart(cartItem);

    setInputValue("");
  };

  return (
    <section>
      <div className="row">
        <div className="flex flex-col">
          <Image
            src="/img/alinhadores/pro-42/barradacamera.png"
            width={1200}
            height={700}
            alt="Featured"
            className="relative xl:object-cover xl:w-full pointer-events-none draggable-none"
            onContextMenu={(e) => e.preventDefault()}
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
              onChange={handleInputChange}
              value={inputValue}
              data-model="Barra da Câmera"
              placeholder="Digite o código do item"
            />
            <button
              onClick={handleAddToCart}
              className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/alinhadores/pro-42/fixadorconvencional.png"
            width={730}
            height={500}
            alt="Featured"
            className="relative xl:object-cover xl:w-full "
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
              onChange={handleInputChange}
              value={inputValue}
              data-model="Fixador Convencional"
              placeholder="Digite o código do item"
            />
            <button
              onClick={handleAddToCart}
              className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/alinhadores/pro-42/alvos.png"
            width={730}
            height={500}
            alt="Featured"
            className="relative xl:object-cover xl:w-full "
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
              onChange={handleInputChange}
              value={inputValue}
              data-model="Alvos"
              placeholder="Digite o código do item"
            />
            <button
              onClick={handleAddToCart}
              className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/alinhadores/pro-42/fixadorrapido.png"
            width={730}
            height={500}
            alt="Featured"
            className="relative xl:object-cover xl:w-full "
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
              onChange={handleInputChange}
              value={inputValue}
              data-model="Fixador Rápido"
              placeholder="Digite o código do item"
            />
            <button
              onClick={handleAddToCart}
              className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/alinhadores/pro-42/fixadorrapido2.png"
            width={730}
            height={500}
            alt="Featured"
            className="relative xl:object-cover xl:w-full "
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
              onChange={handleInputChange}
              value={inputValue}
              data-model="Fixador Rápido 2"
              placeholder="Digite o código do item"
            />
            <button
              onClick={handleAddToCart}
              className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
        <div className="flex flex-col">
          <Image
            src="/img/alinhadores/pro-42/torredacameramovel.png"
            width={730}
            height={500}
            alt="Featured"
            className="relative xl:object-cover xl:w-full "
          />
          <div className="flex flex-row">
            <input
              type="text"
              className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
              onChange={handleInputChange}
              value={inputValue}
              data-model="Torre da Câmera Móvel"
              placeholder="Digite o código do item"
            />
            <button
              onClick={handleAddToCart}
              className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedFeaturedItem;
