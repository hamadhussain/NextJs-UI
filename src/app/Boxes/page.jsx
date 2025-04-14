"use client";
import React from "react";
import { IoEarth } from "react-icons/io5";
import Image from "next/image";

const BoxGrid = () => {
  const boxes = [
    { img: "/Boxes/LOGO1.png", text: "Sectors and Industries" },
    { img: "/Boxes/LOGO2.png", text: "Business Description" },
    { img: "/Boxes/LOGO3.png", text: "Locations" },
    { img: "/Boxes/LOGO4.png", text: "Business Cycles and Backing Status" },
    { img: "/Boxes/LOGO5.png", text: "Deals and Investors" },
    { img: "/Boxes/LOGO6.png", text: "Financial Metrics" },
    { img: "/Boxes/LOGO7.png", text: "Intellectual Property" },
  ];

  return (
    <div className="borderColorUp ">
      <p className="mx-8 text-2xl">Explore Company Criteria below</p>

      <div className="flex gap-4 items-center flex-wrap  justify-center  p-8">
        {boxes.map((box, index) => (
          <div key={index} className="box-grid-box">
            <p className="box-grid-text text-center px-2">{box.text}</p>
{/*             {index === 2 ? (
              <IoEarth size={90} color="rgba(0, 0, 0, 1)" />
            ) : ( */}
              <Image
                src={box.img}
                alt={`Box ${index + 1}`}
                className="box-grid-image"
                width={100}
                height={100}
              />
{/*             // )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxGrid;
