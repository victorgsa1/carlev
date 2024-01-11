import FeedModelList from "@/components/common/Feed/FeedModelList";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const modelos = ["hidraulica", "macacoaj", "pneumatica"];
export default function Page() {
  return (
    <main className="mt-20">
      <section className="bg-brand-300 py-8">
        <div className="row">
          <div className="container">
            <div className="flex flex-row items-center gap-2">
              <Link href="/">
                <span className="text-white text-2xl">
                  <IoChevronBackCircleOutline />
                </span>
              </Link>
              <h1 className="text-white text-2xl font-bold">Rampas</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="container">
          <div className="grid grid-cols-1 gap-4">
            {modelos.map((modelo) => (
              <Link
                key={modelo}
                href={`/rampa/[modelo]`}
                as={`/rampa/${modelo}`}
              >
                <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                  <div className="flex">
                    <img
                      src={`https://via.placeholder.com/300x300?text=${modelo}`}
                      className=""
                      alt={`Imagem da Rampa ${modelo}`}
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
    </main>
  );
}
