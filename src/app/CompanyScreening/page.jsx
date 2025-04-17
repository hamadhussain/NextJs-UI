// import Image from "next/image";
// import React from "react";

// const Companies = () => {
//   return (
//     <div className="flex justify-between py-3 px-8 items-center borderColor companyScreening">
//       <p className=" ">Company Screening</p>
//       <div className="flex  justify-centr  items-center gap-17 ">
//         <button className="chatEXM   bg-white relative  text-black rounded-lg">
//           Chat ExM
//         </button>
//         <div className="flex justify-center items-center gap-3   ">
//           Sequoia
//           <Image
//             src="/leaf.jpeg"
//             alt={`Image`}
//             className="rounded-full"
//             width={25}
//             height={50}
//           />
//         </div>
//       </div>
//       <div className="px-18"></div>
//     </div>
//   );
// };

// export default Companies;










import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="flex justify-center xl:justify-between py-3 px-8 items-center borderColor companyScreening">
      <p className=" ">Company Screening</p>
      <div className="flex  justify-centr  items-center gap-17 hidden xl:flex ">
        <button className="chatEXM   bg-white relative  text-black rounded-lg">
          Chat ExM
        </button>
        <div className="flex justify-center items-center gap-3  hidden xl:flex ">
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
      <div className="px-18 hidden xl:block"></div>
    </div>
  );
};

export default Companies;

