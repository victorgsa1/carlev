"use client";

import React, { useState } from "react";
import { useCart } from "@/components/common/Cart/CartContext";
import Image from "next/image";

type procutDatabase = {
  procut: {
    modelos: {
      [key: string]: {
        modelName: string;
        items: {
          itemName: string;
          archiveName: string;
        }[];
      };
    };
  };
};

const db: procutDatabase = require("@/db.json");

export default function Page({ params }: { params: { modelo: string } }) {
  const { modelo } = params;
  const { cart, addToCart } = useCart();
  const [inputValue, setInputValue] = useState<string>("");
  const [modelValue, setModelValue] = useState<string>("");

  if (!db.procut.modelos.hasOwnProperty(modelo)) {
    return <div className="mt-24">Modelo não encontrado</div>;
  }

  const modeloData = db.procut.modelos[modelo];

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
      productName: `Procut ${modeloData.modelName} - Item ${inputValue} - ${modelValue}`,
      quantity: 1,
    };

    addToCart(cartItem);

    setInputValue("");
  };

  return (
    <section>
      <div className="row">
        <div className="mt-24">
          <ul>
            {modeloData.items?.length > 0 &&
              modeloData.items.map((item: any) => (
                <li key={item.archiveName}>
                  <Image
                    src={`/img/procut/${modelo}/${item?.archiveName}`}
                    width={1200}
                    height={700}
                    alt={item.itemName}
                    className="relative xl:object-cover xl:w-full pointer-events-none draggable-none"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div className="flex flex-row">
                    <input
                      type="text"
                      className="block w-full px-2 py-2 text-base text-gray-900 border rounded-sm bg-gray-50 focus:ring-brand-200"
                      onChange={handleInputChange}
                      value={inputValue}
                      data-model={item.itemName}
                      placeholder="Digite o código do item"
                    />
                    <button
                      onClick={handleAddToCart}
                      className=" px-4 py-3 bg-brand-300 text-white rounded-sm text-xs sm:text-md"
                    >
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
