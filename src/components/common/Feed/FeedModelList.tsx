import Image from "next/image";
import Link from "next/link";
import React from "react";
const rootFontStyle = {
  fontSize: '30px'
};

const FeedModelList = () => {
  const modelos = [
    "lite",
    "prism",
    "sw-2300",
    "swa-500",
    "swa-2100",
    "swa-2200",
    "swa-3300",
    "swa-3400",
    "visualiner",
    "visualinerII",
    "visualinerIII"
  ];

  return (
    <div className="row">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 my-16">
          {modelos.map((modelo) => (
            <Link
              key={modelo}
              href={`/alinhadores/[modelo]`}
              as={`/alinhadores/${modelo}`}
            >
              <div  className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                <div className="flex bg-zinc-60">
                  
                 <div style={rootFontStyle} className="ml-5 mt-5 mb-5"> <h2 >{modelo.toUpperCase()}</h2> </div>
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
