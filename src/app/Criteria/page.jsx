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

export default function Home() {
  const [newCriteria, setNewCriteria] = useState("");

  const removeItem = (id) => {
    console.log(`Remove item with id: ${id}`);
  };

  return (
    <div className="bg-black p-8 pt-12 px-36 space-y-4 w-3/4 text-white criteria">
      <h2 className="tracking-widest mb-4">CRITERIA</h2>

      {/* Row 1 */}
      {Array.from({ length: 3 }, (x, i) => (
        <CriteriaRow key={i} index={i + 1} />
      ))}

      {/* Row 2 */}
      {/* <div className="flex items-center border-b border-gray-700 py-2">
        <div className="w-8 flex justify-center items-center">
          <span>2</span>
          <p className="relative -top-4 text-3xl font-medium left-2">{"["}</p>
        </div>
        <div className="w-12 flex items-center gap-6 relative left-2">
          <RiArrowUpDownLine />
          <span>And</span>
        </div>
        <div className="flex-1 px-2 relative left-2">
          <div className="flex items-center gap-1">
            <IoMdArrowDropdown />
            <span>Geography In United States and Canada</span>
          </div>
        </div>
        <div className="w-1/4 flex justify-end items-center">
          <span className="text-gray-400">214,712</span>
          <FaTimes className="cursor-pointer" onClick={() => removeItem(2)} />
        </div>
      </div> */}

      {/* Row 3 */}
      {/* <div className="flex items-center border-b border-gray-700 py-2">
        <div className="w-8 flex justify-center items-center">
          <span>3</span>
        </div>
        <div className="w-12 flex items-center gap-6 relative left-2">
          <HiArrowUp />
          <span>And</span>
        </div>
        <div className="flex-1 px-2">
          <div className="flex items-center gap-1">
            <IoMdArrowDropdown />
            <span>Company Type In Public Company</span>
          </div>
        </div>
        <div className="w-1/4 flex justify-end items-center">
          <span className="text-gray-400">3,609</span>
          <FaTimes className="cursor-pointer" onClick={() => removeItem(3)} />
        </div>
      </div> */}

      {/* Add Criteria */}
      <div className="flex items-center py-2">
        <div className="w-44 text-center text-sm">Add Criteria</div>
        <div className="flex-1 flex items-center gap-2 px-4">
          <input
            type="text"
            value={newCriteria}
            onChange={(e) => setNewCriteria(e.target.value)}
            placeholder="Add Search Criteria or Add Keywords"
            className="bg-black border-b border-gray-600 p-2 outline-none text-white text-sm flex-1"
          />
          <GoSearch />
        </div>
        <div className="pl-4">
          <button className="button px-3 py-1 text-sm">
            ADD
          </button>
        </div>
      </div>

      {/* Run Button */}
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
    <div className="flex items-center border-b border-gray-700 py-2 gap-8">
      <div className="flex items-center gap-2 text-3xl ">
        <span className="text-sm">{index}</span>
 <p className="font-medium ">
        {index === 3 ? "" : "["}
          </p>      </div>
      <div className={`flex items-center gap-4 ${index === 3 ? "ml-2.5" : ""}`}>
  {index === 1 && <HiArrowSmallDown className="" />}
  {index === 2 && <RiArrowUpDownLine className="" />}
  {index === 3 && <HiArrowUp className="" />}

  <span className="w-5">{index === 1 ? "" : "AND"}</span>
</div>
      <div className="relative inline-block gap-2 px-7">
      {index === 1 ?<FaCaretDown className="top-1 absolute pointer-events-none hidden" />  : <FaCaretDown className="top-1 absolute pointer-events-none " /> }
        <select defaultValue={criterions[index -1]} className="appearance-none pl-8 bg-none">
          {criterions.map((criterion, i) => (
            <option className="text-black" key={i} value={criterion}>
              {criterion}
            </option>
          ))}
        </select>
      </div>
      <div className="grow flex gap-2 justify-end items-center mx-4">
  <span> 
  {index === 1 && <p className=""><span className=" text-sm px-1 opacity-65">{">  "}</span> 250,000</p>}
  {index === 2 && "214,712"}
  {index === 3 && "3,609"}</span>        <button onClick={() => removeItem(1)}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}
