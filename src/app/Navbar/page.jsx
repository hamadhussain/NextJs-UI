import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-24 px-6 pb-14 pt-14 flex justify-between items-center borderColor">
      <Image
        src="/logo.png"
        alt={`Image`}
        width={500}
        height={500}
        className="logoIMG1 "
      />
      <div className="flex justify-center items-center gap-24 text-white  pl-8 navFont">
        <p className=" cursor-pointer px-4  border-4 bg-white text-black rounded-lg navFontWeight">Companies</p>
        <p className=" cursor-pointer px-4">Deals</p>
        <p className=" cursor-pointer px-4">Limited Partners</p>
        <p className=" cursor-pointer px-4">Support</p>
      </div>
       <Image
        src="/secondLOGO.png"
        alt={`Image`}
        width={150}
        height={100}
                 className="logoIMG"

      />
    </div>
  );
};

export default Navbar;
