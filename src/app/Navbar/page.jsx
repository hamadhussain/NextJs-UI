import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center px-10  borderColor">
      <Image
        src="/firstlogo.png"
        alt={`Image`}
        width={200}
        height={100}
      />
      <div className="flex justify-center items-center gap-4 text-white font-bold">
        <p className=" px-2 py-2 border-4 bg-white text-black rounded-lg">Companies</p>
        <p className=" px-4">Deals</p>
        <p className=" px-4">Limited Partners</p>
        <p className=" px-4">Support</p>
      </div>
       <Image
        src="/secondlogo.png"
        alt={`Image`}
        width={150}
        height={100}
      />
    </div>
  );
};

export default Navbar;
