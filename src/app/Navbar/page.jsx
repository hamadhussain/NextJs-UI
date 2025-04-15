import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-24 flex justify-between items-center borderColor">
      <Image
        src="/logo.png"
        alt={`Image`}
        width={1020}
        height={980}
        className="h-28 w-min "
      />
      <div className="flex justify-center items-center gap-20 text-white font-bold">
        <p className=" cursor-pointer px-4 py-1 border-4 bg-white text-black rounded-lg">Companies</p>
        <p className=" cursor-pointer px-4">Deals</p>
        <p className=" cursor-pointer px-4">Limited Partners</p>
        <p className=" cursor-pointer px-4">Support</p>
      </div>
       <Image
        src="/secondLOGO.png"
        alt={`Image`}
        width={150}
        height={100}
                 className="mx-4"

      />
    </div>
  );
};

export default Navbar;
