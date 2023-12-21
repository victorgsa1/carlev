import FeedFeaturedItem from "@/components/common/Feed/FeedFeaturedItem";
import AlinhadorModelo from "@/components/common/Teste";
import Link from "next/link";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function Page() {
  return (
    <main className="mt-20">
      <section className="bg-brand-300 py-8">
        <div className="px-6">
          <div className="flex flex-row items-center gap-4">
            <Link href="/alinhadores">
              <span className="text-white text-4xl">
                <IoChevronBackCircleOutline />
              </span>
            </Link>
            <div className="flex flex-col">
              <span className="font-bold text-md text-white">Alinhadores</span>
              <h1 className="text-white text-2xl font-bold">PRO32</h1>
            </div>
          </div>
        </div>
      </section>
      <AlinhadorModelo />
    </main>
  );
}
