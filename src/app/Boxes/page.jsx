// "use client";
// import React from "react";
// import Image from "next/image";

// const BoxGrid = () => {
//   const boxes = [
//     { img: "/Boxes/LOGO1.png", text: "Sectors and Industries" },
//     { img: "/Boxes/LOGO2.png", text: "Business Description" },
//     { img: "/Boxes/LOGO3.png", text: "Locations" },
//     { img: "/Boxes/LOGO4.png", text: "Business Cycles and Backing Status" },
//     { img: "/Boxes/LOGO5.png", text: "Deals and Investors" },
//     { img: "/Boxes/LOGO6.png", text: "Financial Metrics" },
//     { img: "/Boxes/LOGO7.png", text: "Intellectual Property" },
//   ];

//   return (
//     <div className="borderColorUp ">
//       <p className="mx-8   boxHeader">Explore Company Criteria below</p>

//       <div className="flex  items-center flex-wrap  justify-evenly pt-14 px-10">
//         {boxes.map((box, index) => (
//           <div key={index} className="box-grid-box">
//             <p className="box-grid-text text-center px-1">{box.text}</p>
//               <Image
//                 src={box.img}
//                 alt={`Box ${index + 1}`}
//                 className="box-grid-image"
//                 width={100}
//                 height={100}
//               />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BoxGrid;










"use client";
import React from "react";
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
    <div className=" xl:my-0 my-10">
      <p className="mx-8   boxHeader">Explore Company Criteria below</p>

      <div className="flex  items-center flex-wrap space-x-0 xl:space-x-3 xl:space-y-0 space-y-4 justify-evenly pt-8 px-4 sm:pt-10 sm:px-6 md:pt-12 md:px-8 lg:pt-14 lg:px-10 ">
        {boxes.map((box, index) => (
          <div key={index} className="box-grid-box ">
            <p className="box-grid-text text-center px-1">{box.text}</p>
              <Image
                src={box.img}
                alt={`Box ${index + 1}`}
                className="box-grid-image"
                width={100}
                height={100}
              />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxGrid;

