import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex justify-between py-3 px-8 items-center borderColor">
      <p className="text-lg ">Company Screening</p>
      <div className="flex  justify-center items-center gap-2 ">
        <button className="h-10 px-58 text-sm border-4 bg-white relative -left-8 text-black rounded-lg">
          Chat ExM
        </button>
        <div className="flex justify-center items-center gap-4 mr-24 relative ">
          Sequoia
          <Image
            src="/leaf.jpeg"
            alt={`Image`}
            className="rounded-full"
            width={25}
            height={50}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Companies;
