import FeedModelList from "@/components/common/Feed/FeedModelList";
import HeroCommon from "@/components/common/Hero/HeroCommon";
import db from "@/db.json";

export default function Page() {
  return (
    <main className="mt-20">
      <HeroCommon />
      <FeedModelList />
    </main>
  );
}
