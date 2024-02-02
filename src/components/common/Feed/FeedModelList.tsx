import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeedModelList = () => {
  const modelos = ["pro-42", "pro-32", "linux"];

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
              <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                <div className="flex border bg-zinc-50 shadow-md">
                  <img
                    src={`https://via.placeholder.com/300x300?text=${modelo.toUpperCase()}`}
                    width={300}
                    height={300}
                    alt="Alinhadores"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl font-medium uppercase">{modelo}</h1>
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
