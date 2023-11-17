import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const HeroCommon = ({ desc = "Alinhadores", title = "Carlev" }) => {
  return (
    <section className="bg-brand-300 py-8">
      <div className="row">
        <div className="container">
          <div className="flex flex-row items-center gap-2">
            <Link href="/">
              <span className="text-white text-2xl">
                <IoChevronBackCircleOutline />
              </span>
            </Link>
            <h1 className="text-white text-2xl font-bold">{desc}</h1>
            {/* <span className="font-bold text-md text-white">{title}</span> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCommon;
