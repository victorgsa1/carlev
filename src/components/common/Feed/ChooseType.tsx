"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChooseType = () => {
  return (
    <section>
      <div className="row">
        <div className="flex sm:mt-6 2xl:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-1">
            <Link href="/alinhadores">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/alinhador.png"}
                  width={800}
                  height={600}
                  alt="Alinhadores"
                  className="md:max-h-52"
                />
                <h1 className="text-2xl font">Alinhadores</h1>
              </div>
            </Link>
            <Link href="/balanceadores">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/balanceadora.jpg"}
                  width={800}
                  height={600}
                  alt="Balanceadores"
                  className="md:max-h-52"
                />
                <h1 className="text-2xl font">Balanceadores</h1>
              </div>
            </Link>
            <Link href="/desmontadora">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/desmontadora.jpg"}
                  width={800}
                  height={600}
                  alt="Desmontadora"
                  className="md:max-h-52"
                />
                <h1 className="text-2xl font">Desmontadores</h1>
              </div>
            </Link>
            <Link href="/elevadores">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/elevador.png"}
                  width={800}
                  height={600}
                  alt="Evelador"
                  className="md:max-h-52"
                />
                <h1 className="text-2xl font">Elevadores</h1>
              </div>
            </Link>
            <Link href="/rampa">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/rampa.png"}
                  width={800}
                  height={600}
                  alt="Rampa"
                  className="md:max-h-52"
                />
                <h1 className="text-2xl font">Rampas</h1>
              </div>
            </Link>
            <Link href="/recicladores">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/recicladora.png"}
                  width={800}
                  height={600}
                  alt="Reciclador"
                  className="md:max-h-52"
                />
                <h1 className="text-2xl font">Recicladores</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseType;
