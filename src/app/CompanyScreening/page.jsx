import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex  justify-between p-3 items-center borderColor">
      <p className=" relative left-16">Company Screening</p>
      <div className="flex  justify-center items-center gap-4 ">
         <p className=" px-44 py-1 border-4 bg-white relative -left-8 text-black rounded-lg">Chat ExM
         </p>
        <div className="flex  justify-center items-center gap-4">
          Sequoia
          <Image
            src="/leaf.jpeg"
            alt={`Image`}
            className="rounded-full"
            width={25}
            height={50}
          />{" "}
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Companies;
