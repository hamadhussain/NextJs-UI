// "use client";
// import { useState } from "react";
// import { FaTimes } from "react-icons/fa";
// import { GoSearch } from "react-icons/go";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { RiArrowUpDownLine } from "react-icons/ri";
// import { HiArrowSmallDown, HiArrowUp } from "react-icons/hi2";

// export default function Home() {
//   const [newCriteria, setNewCriteria] = useState("");

//   const removeItem = (id) => {};

//   return (
//     <div className="bg-black  p-6 space-y-4  w-2/3 ">
//       <h2 className="text-lg tracking-widest mb-4">CRITERIA</h2>

//       <table className="w-full text-sm">
//         <tbody>
//           <tr className="border-b borderColor-gray-700">
//             <td className="w-8 text--400 px-2 py-2">
//               <div className="flex justify-center items-center">
//                 1 <p className=" relative  text-3xl font-medium left-2"> {"["}</p>
//               </div>
//             </td>
//             <td className="w-12 px-2 py-2 relative -left-5">
//               <p className="flex items-center gap-6">
//                 <HiArrowSmallDown />
//                 And
//               </p>
//             </td>
//             <td className="px-7 py-2">
//               Industry Classification In (Primary) Real Estate; Health Care
//             </td>
//             <td className="w px-2 py-2 flex items-center justify-end ">
//               <p className="whitespace-nowrap text--400 px-2 py-2">250,000</p>
//               <FaTimes className="cursor-pointer" onClick={() => removeItem(1)} />
//             </td>
//           </tr>

//           <tr className="border-b borderColor-gray-700">
//             <td className="w-8 text--400 px-2 py-2">
//               <div className="flex justify-center items-center">
//                 2 <p className=" relative -top-4 text-3xl font-medium left-2"> {"["}</p>
//               </div>
//             </td>
//             <td className="w-12 px-2 py-2 relative -left-5">
//               <p className="flex items-center gap-6">
//                 <RiArrowUpDownLine />
//                 And
//               </p>
//             </td>
//             <td className="px-2 py-2">
//               <p className="flex items-center gap-1">
//                 <IoMdArrowDropdown />
//                 Geography In United States and Canada
//               </p>
//             </td>
//             <td className="w px-2 py-2 flex items-center justify-end ">
//               <p className="whitespace-nowrap text--400 px-2 py-2">214,712</p>
//               <FaTimes className="cursor-pointer" onClick={() => removeItem(2)} />
//             </td>
//           </tr>

//           <tr className="border-b borderColor-gray-700">
//             <td className="w-8 text--400 px-2 py-2">
//               <div className="flex flex-col items-center">3</div>
//             </td>
//             <td className="w-12 px-2 py-2 relative -left-5">
//               <p className="flex items-center gap-6">
//                 <HiArrowUp />
//                 And
//               </p>
//             </td>
//             <td className="px-2 py-2">
//               <p className="flex items-center gap-1">
//                 <IoMdArrowDropdown />
//                 Company Type In Public Company
//               </p>
//             </td>
//             <td className="w px-2 py-2 flex items-center justify-end ">
//               <p className="whitespace-nowrap text--400 px-2 py-2">3,609</p>
//               <FaTimes className="cursor-pointer" onClick={() => removeItem(3)} />
//             </td>
//           </tr>

//           <tr className="">
//             <td className="w-44 relative left-22 px-2 py-2">
//               <div className="flex flex-col items-center">
//                 <span className="text-sm">Add Criteria</span>
//               </div>
//             </td>
//             <td className="w-8 text-gray-400 px-2 py-2"></td>
//             <td className="px-2 py-2 flex justify-between items-center ">
//               <input
//                 type="text"
//                 value={newCriteria}
//                 onChange={(e) => setNewCriteria(e.target.value)}
//                 placeholder="Add Search Criteria or Add Keywords"
//                 className="bg-black border-b p-2 outline-none text-white text-sm flex-1"
//               />
//               <GoSearch />
//             </td>
//             <td className="w px-2 py-2 flex items-center justify-end "></td>
//             <td>
//               <button className=" relative left-40 borderColor-gray-600 px-3 py-1 button text-sm">
//                 ADD
//               </button>
//             </td>
//           </tr>

//           <tr className="bordr-b borderColor-gray-700">
//             <td className="w-8  px-2 py-2"></td>
//             <td className="w-12 px-2 py-2"></td>
//             <td className="px-2 py-2"></td>
//             <td className="w px-2 py-2 flex items-center justify-end ">
//               <button className=" borderColor-gray-600 button px-3 py-1 text-sm">
//                 RUN SCREEN
//               </button>
//             </td>
//           </tr>
//         </tbody>
//       </table>

//       <div className="pt-4"></div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { FaArrowDown, FaCaretDown, FaTimes } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { RiArrowUpDownLine } from "react-icons/ri";
import { HiArrowSmallDown, HiArrowUp } from "react-icons/hi2";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

export default function Home() {
  const [newCriteria, setNewCriteria] = useState("");

  const removeItem = (id) => {
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div className="bg-black p-8 pl-19.5 pr-55 pt-12 textCriteria space-y-4 w-3/4 text-white ">
      <h2 className="tracking-widest Criteria mb-4 pl-5">CRITERIA</h2>
      {Array.from({ length: 3 }, (x, i) => (
        <CriteriaRow key={i} index={i + 1} />
      ))}
      <div className="flex items-center justify-between py-2 ">
        <div className="addCriteria flex items-center gap-5 pl-23">
          <div className=" text-center ">Add Criteria</div>
          <div className="flex-1 flex items-center border-b borderColorCriteria py-2 ">
            <input
              type="text"
              value={newCriteria}
              onChange={(e) => setNewCriteria(e.target.value)}
              placeholder="Add Search Criteria or Add Keywords"
              className=" flex-1 px-4"
            />
            <GoSearch />
          </div>
        </div>
        <div className="pl-4">
          <button className="button px-3 py-1 text-sm">ADD</button>
        </div>
      </div>
      <div className="flex justify-end py-2">
        <button className="button px-3 py-1 text-sm w-full sm:w-auto">
          RUN SCREEN
        </button>
      </div>
    </div>
  );
}

function CriteriaRow({ index, removeItem }) {
  const criterions = [
    "Industry Classification In (Primary) Real Estate; Health Care",
    "Geography In United States and Canada",
    "Company Type In Public Company",
  ];

  return (
    <div className="flex items-center border-b borderColorCriteria py-2 pl-5 gap-8">
      <div className="flex items-center gap-2  ">
        <span className="fontInter">{index}</span>
        <p className=" text-2xl ">{index === 3 ? "" : "["}</p>{" "}
      </div>
      <div className={`flex items-center gap-4 ${index === 3 ? "ml-2" : ""} ${index === 1 ? "ml-1.5" : ""}`}>
        {index === 1 && <IoIosArrowRoundDown className="text-3xl  " />}
        {index === 2 && <span className=" flex -gap-10 text-xl"><IoIosArrowRoundDown className="text-  " /><IoIosArrowRoundUp className="relative -left-3 -top-2" /></span>}
        {index === 3 && <IoIosArrowRoundUp className="text-2xl" />}

        <span className={`w-5  ${index === 3 ? "ml-4.5" : ""}`}>{index === 1 ? <p className=""></p> : "And"}</span>
      </div>
      <div className="relative inline-block gap-0 ">
        {index === 1 ? (
          <FaCaretDown className="top-1 absolute pointer-events-none hidden " />
        ) : (
          <FaCaretDown className="top-1 absolute pointer-events-none " />
        )}
        <select
          defaultValue={criterions[index - 1]}
          className="appearance-none pl-8 bg-none"
        >
          {criterions.map((criterion, i) => (
            <option className={`${index === 1 ? "px-2" : ""}`} key={i} value={criterion}>
              {criterion}
            </option>
          ))}
        </select>
      </div>
      <div className="grow flex gap-2 justify-end items-center ">
        <span>
          {index === 1 && (
            <p className="">
              <span className="  px-1 opacity-65">{">  "}</span> 250,000
            </p>
          )}
          {index === 2 && "214,712"}
          {index === 3 && "3,609"}
        </span>{" "}
        <button onClick={() => removeItem(1)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
