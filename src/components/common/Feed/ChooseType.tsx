"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ChooseType = () => {
  return (
    <section>
      <div className="row">
        <div className="flex sm:mt-40">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link href="/alinhadores">
              <div className="flex flex-col text-center">
                <h1>Alinhadores</h1>
                <Image
                  src={"/img/alinhadores.png"}
                  width={800}
                  height={600}
                  alt="Alinhadores"
                  className="px-16 py-4 sm:px-8 sm:pt-4"
                />
                <img src="" className="rounded-sm shadow-lg" />
              </div>
            </Link>
            <Link href="/balanceadores">
              <div className="flex flex-col text-center">
                <h1>Balanceadores</h1>
                <img
                  src="https://via.placeholder.com/800x600"
                  className="rounded-sm shadow-lg px-16 py-4 sm:px-8 sm:pt-4"
                />
              </div>
            </Link>
            <Link href="/alinhadores">
              <div className="flex flex-col text-center">
                <h1>Outros</h1>
                <img
                  src="https://via.placeholder.com/800x600"
                  className="rounded-sm shadow-lg px-16 py-4 sm:px-8 sm:pt-4"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseType;
