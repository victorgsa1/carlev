import FeedModelList from "@/components/common/Feed/FeedModelList";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const rootFontStyle = {
  fontSize: "30px",
};

const modelos = [
  "europa50",
  "swb-50",
  "swb-100",
  "swb-200",
  "swb-400",
  "swb-600",
  "swb-800",
  "swb-2000",
  "systemiv",
  "systemii",
];
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
              <h1 className="text-white text-2xl font-bold">Balanceadores</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="row">
        <div className="container">
          <div className="grid grid-cols-1 gap-4 my-16">
            {modelos.map((modelo) => (
              <Link
                key={modelo}
                href={`/balanceadores/[modelo]`}
                as={`/balanceadores/${modelo}`}
              >
                <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                  <div style={rootFontStyle} className="ml-5 mt-5 mb-5">
                    {" "}
                    <h2>{modelo.toUpperCase()}</h2>{" "}
                  </div>

                  {/* <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-medium uppercase">{modelo}</h1>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
