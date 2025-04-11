'use client';
import React from 'react';
import { IoEarth } from "react-icons/io5";
import Image from 'next/image';

const BoxGrid = () => {
  const boxes = [
    { img: '/Boxes/logo1.png', text: 'Sectors and Industries' },
    { img: '/Boxes/logo2.png', text: 'Business Description' },
    { img: '/Boxes/logo3.png', text: 'Locations' },
    { img: '/Boxes/logo4.png', text: 'Business Cycles and Backing Status' },
    { img: '/Boxes/logo5.png', text: 'Deals and Investors' },
    { img: '/Boxes/logo6.png', text: 'Financial Metrics' },
    { img: '/Boxes/logo7.png', text: 'Intellectual Property' },

  ];

  return (

  <>
    <p className=' borderColorUp text-2xl'>Explore Company Criteria below</p>

<div className="box-grid-container my-10">
  {boxes.map((box, index) => (
    <div key={index} className="box-grid-box">
      <p className="box-grid-text text-center px-2">{box.text}</p>
      {index === 2 ? (
        <IoEarth size={90} color="rgba(0, 0, 0, 1)" />
      ) : (
        <Image src={box.img} alt={`Box ${index + 1}`} className="box-grid-image" width={100} height={100} />
      )}
    </div>
  ))}
</div>
  </>
  );
};

export default BoxGrid;