// import Image from "next/image";
// import React from "react";

// const Navbar = () => {
//   return (
//     <div className="h-24 px-6 pb-14 pt-14 flex justify-between items-center borderColor">
//       <Image
//         src="/logo.png"
//         alt={`Image`}
//         width={500}
//         height={500}
//         className="logoIMG1 "
//       />
//       <div className="flex justify-center items-center gap-24 text-white  pl-8 navFont">
//         <p className=" cursor-pointer px-4  border-4 bg-white text-black rounded-lg navFontWeight">Companies</p>
//         <p className=" cursor-pointer px-4">Deals</p>
//         <p className=" cursor-pointer px-4">Limited Partners</p>
//         <p className=" cursor-pointer px-4">Support</p>
//       </div>
//        <Image
//         src="/secondLOGO.png"
//         alt={`Image`}
//         width={150}
//         height={100}
//                  className="logoIMG"

//       />
//     </div>
//   );
// };

// export default Navbar;








"use client";
import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenuUnfold4Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="h-24 px-6 pb-14 pt-14 flex justify-between items-center borderColor ">
      <Image
        src="/logo.png"
        alt={`Image`}
        width={500}
        height={500}
        className="logoIMG1 "
      />
      <div className="flex justify-center items-center gap-24 text-white  pl-8 navFont  hidden xl:flex">
        <p className=" cursor-pointer px-4  border-4 bg-white text-black rounded-lg navFontWeight">
          Companies
        </p>
        <p className=" cursor-pointer px-4">Deals</p>
        <p className=" cursor-pointer px-4">Limited Partners</p>
        <p className=" cursor-pointer px-4">Support</p>
      </div>
      <Image
        src="/secondLOGO.png"
        alt={`Image`}
        width={150}
        height={100}
        className="logoIMG xl:block hidden"
      />
      <Sheet >
        <SheetTrigger className="xl:hidden block"><RiMenuUnfold4Line className="text-white text-2xl"/></SheetTrigger>
        <SheetContent className=" bg-black text-white" >
          <SheetHeader>
            <SheetTitle><Image
        src="/secondLOGO.png"
        alt={`Image`}
        width={150}
        height={100}
        className="logoIMG "
      /></SheetTitle>
            <SheetDescription className=" space-y-7 py-10">
            <p className=" cursor-pointer px-4  border-4 bg-white hover:bg-gray-100 text-black rounded-lg navFontWeight">
          Companies
        </p>
        <p className=" cursor-pointer hover:transition duration-100 ease-in-out hover:border-b py-1 text-white px-4">Deals</p>
        <p className=" cursor-pointer hover:transition duration-100 ease-in-out hover:border-b py-1 text-white px-4">Limited Partners</p>
        <p className=" cursor-pointer hover:transition duration-100 ease-in-out hover:border-b py-1 text-white px-4">Support</p>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Navbar;

