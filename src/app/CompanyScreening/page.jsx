import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex justify-between py-3 px-8 items-center borderColor companyScreening">
      <p className="text-lg ">Company Screening</p>
      <div className="flex  justify-centr  items-center gap-16 ">
        <button className="chatEXM   bg-white relative  text-black rounded-lg">
          Chat ExM
        </button>
        <div className="flex justify-center items-center gap-3  relative ">
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
      <div className="px-17"></div>
    </div>
  );
};

export default Companies;

