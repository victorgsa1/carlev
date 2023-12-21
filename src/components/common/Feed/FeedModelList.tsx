import Link from "next/link";
import React from "react";

const FeedModelList = () => {
  const modelos = ["pro-42", "pro-32"]; // Adicione outros modelos conforme necessário

  return (
    <div className="row">
      <div className="container">
        <div className="grid grid-cols-1 gap-4">
          {modelos.map((modelo) => (
            <Link
              key={modelo}
              href={`/alinhadores/[modelo]`}
              as={`/alinhadores/${modelo}`}
            >
              <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                <div className="flex">
                  <img
                    src={`https://via.placeholder.com/300x300?text=${modelo}`}
                    className=""
                    alt={`Imagem do Alinhador ${modelo}`}
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl font-medium">{modelo}</h1>
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
