import Link from "next/link";
import React from "react";

const FeedModelList = () => {
  return (
    <section>
      <div className="row">
        <div className="container">
          <div className="grid grid-cols-1 gap-4">
            <Link href="/pro-42">
              <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                <div className="flex">
                  <img src="https://via.placeholder.com/300x300" className="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl font-medium">PRO 42</h1>
                </div>
              </div>
            </Link>
            <Link href="/pro-32">
              <div className="flex flex-row bg-zinc-100 rounded-md shadow-lg gap-8 p-2 w-full">
                <div className="flex">
                  <img src="https://via.placeholder.com/300x300" className="" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-4xl font-medium">PRO 32</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeedModelList;
