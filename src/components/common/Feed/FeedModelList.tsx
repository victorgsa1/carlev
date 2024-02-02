import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeedModelList = () => {
  const modelos = [
    "prism",
    "swa500visualinerlite",
    "swa2100",
    "swa2200sw2300visualinerII",
    "swa3300",
    "swa3400visualinerIII",
  ];

  return (
    <div className="row">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 my-16">
          {modelos.map((modelo) => (
            <Link key={modelo} href={`/rampa/[modelo]`} as={`/rampa/${modelo}`}>
              <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                <div className="flex bg-zinc-50">
                  <img
                    src={`https://placehold.co/800x800/F4F4F5/000?text=${modelo.toUpperCase()}&font=poppinstext=`}
                    width={300}
                    height={300}
                    alt="Rampas"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  {/* <h1 className="text-sm font-medium uppercase">
                 {modelos.join(", ")}
               </h1> */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedModelList;
