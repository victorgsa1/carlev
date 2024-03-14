"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChooseType = () => {
  return (
    <section>
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">
            <Link href="/alinhadores">
              <div className="d-flex justify-content-center text-center">
                <Image
                  src={"/img/alinhador.png"}
                  width={200}
                  height={200}
                  alt="Alinhadores"
                  className="md:max-h-52 mx-auto d-block  shadow-lg "
                />
                <h1 className="text-2xl mt-5 mb-4 font">Alinhadores</h1>
              </div>
            </Link>
            <Link href="/balanceadores">
              <div className="flex flex-col text-center align-items-center">
                <Image
                  src={"/img/balanceadora.jpg"}
                  width={200}
                  height={200}
                  alt="Balanceadores"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Balanceadores</h1>
              </div>
            </Link>
            <Link href="/desmontadora">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/desmontadora.jpg"}
                  width={200}
                  height={200}
                  alt="Desmontadora"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Desmontadores</h1>
              </div>
            </Link>
            <Link href="/elevadores">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/elevador.png"}
                  width={200}
                  height={200}
                  alt="Evelador"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Elevadores</h1>
              </div>
            </Link>
            <Link href="/rampa">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/rampa.png"}
                  width={200}
                  height={200}
                  alt="Rampa"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Rampas</h1>
              </div>
            </Link>
            <Link href="/recicladores">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/recicladora.png"}
                  width={200}
                  height={200}
                  alt="Reciclador"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Recicladores</h1>
              </div>
            </Link>
            <Link href="/atf">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/semimagens.jpg"}
                  width={200}
                  height={200}
                  alt="ATF" 
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">ATF Cambio autatico</h1>
              </div>
            </Link>
            <Link href="/alinhadorfarol">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/alinhadorFarol.png"}
                  width={200}
                  height={200}
                  alt="Alinhador de Farol"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Alinhador de Farol</h1>
              </div>
            </Link>
            <Link href="/chave">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/chaveImpacto.jpg"}
                  width={200}
                  height={200}
                  alt="Reciclador"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">Chave de impacto</h1>
              </div>
            </Link>
            <Link href="/midtronics">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/midtronics.jpg"}
                  width={200}
                  height={200}
                  alt="Reciclador"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">MidTronics</h1>
              </div>
            </Link>
            <Link href="/pdl">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/semimagens.jpg"}
                  width={200}
                  height={200}
                  alt="Reciclador"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">PDL</h1>
              </div>
            </Link>
            <Link href="/procut">
              <div className="flex flex-col text-center">
                <Image
                  src={"/img/procut.jpg"}
                  width={200}
                  height={200}
                  alt="Reciclador"
                  className="md:max-h-52 mx-auto d-block shadow-lg"
                />
                <h1 className="text-2xl mt-5 mb-4 font">ProCut</h1>
              </div>
            </Link>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseType;
