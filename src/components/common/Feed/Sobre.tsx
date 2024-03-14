"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChooseType = () => {
  return (
    <section>
      <div className="col-span-4 md:col-span-2 grid md:grid-cols-2 gap-5">
              <div className="text-black text-center">
                <h2 className="font-bold mb-3 text-xl  ">Nossa misão</h2>
                <p>
                Atender as necessidades de seus clientes com serviços e produtos, priorizando sempre a qualidade e segurança.
                </p>
              </div>
              <div className="text-gray text-center">
          
                <h2 className="font-bold mb-3 text-xl  ">Quem somos</h2>
                <p>
                Somos uma assistência técnica autorizada em equipamentos automotivos marca SUN.

                A sólida experiência de nossos profissionais, tornam a Carlev  referência em manutenção, reparação, montagem e comercialização de peças para equipamentos automotivos. Atendemos revendedoras, auto centers, oficinas e concessionárias de todas as marcas. Estamos localizados em Americana – SP, região metropolitana de Campinas.
                </p>
              </div>
              
            </div>
    </section>
  );
};




export default ChooseType;
