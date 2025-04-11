"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiArrowUpDownLine } from "react-icons/ri";
import { HiArrowSmallDown, HiArrowUp } from "react-icons/hi2";

export default function Home() {
  const [newCriteria, setNewCriteria] = useState("");

  const removeItem = (id) => {};

  return (
    <div className="bg-black  p-6 space-y-4  w-2/3 font-sans">
      <h2 className="text-lg tracking-widest mb-4">CRITERIA</h2>

      <table className="w-full text-sm">
        <tbody>
          <tr className="border-b borderColor-gray-700">
            <td className="w-8 text--400 px-2 py-2">
              <div className="flex justify-center items-center">
                1 <p className=" relative  text-3xl font-medium left-2"> {"["}</p>
              </div>
            </td>
            <td className="w-12 px-2 py-2 relative -left-5">
              <p className="flex items-center gap-6">
                <HiArrowSmallDown />
                And
              </p>
            </td>
            <td className="px-7 py-2">
              Industry Classification In (Primary) Real Estate; Health Care
            </td>
            <td className="w px-2 py-2 flex items-center justify-end ">
              <p className="whitespace-nowrap text--400 px-2 py-2">250,000</p>
              <FaTimes className="cursor-pointer" onClick={() => removeItem(1)} />
            </td>
          </tr>

          <tr className="border-b borderColor-gray-700">
            <td className="w-8 text--400 px-2 py-2">
              <div className="flex justify-center items-center">
                2 <p className=" relative -top-4 text-3xl font-medium left-2"> {"["}</p>
              </div>
            </td>
            <td className="w-12 px-2 py-2 relative -left-5">
              <p className="flex items-center gap-6">
                <RiArrowUpDownLine />
                And
              </p>
            </td>
            <td className="px-2 py-2">
              <p className="flex items-center gap-1">
                <IoMdArrowDropdown />
                Geography In United States and Canada
              </p>
            </td>
            <td className="w px-2 py-2 flex items-center justify-end ">
              <p className="whitespace-nowrap text--400 px-2 py-2">214,712</p>
              <FaTimes className="cursor-pointer" onClick={() => removeItem(2)} />
            </td>
          </tr>

          <tr className="border-b borderColor-gray-700">
            <td className="w-8 text--400 px-2 py-2">
              <div className="flex flex-col items-center">3</div>
            </td>
            <td className="w-12 px-2 py-2 relative -left-5">
              <p className="flex items-center gap-6">
                <HiArrowUp />
                And
              </p>
            </td>
            <td className="px-2 py-2">
              <p className="flex items-center gap-1">
                <IoMdArrowDropdown />
                Company Type In Public Company
              </p>
            </td>
            <td className="w px-2 py-2 flex items-center justify-end ">
              <p className="whitespace-nowrap text--400 px-2 py-2">3,609</p>
              <FaTimes className="cursor-pointer" onClick={() => removeItem(3)} />
            </td>
          </tr>

          <tr className="">
            <td className="w-44 relative left-22 px-2 py-2">
              <div className="flex flex-col items-center">
                <span className="text-sm">Add Criteria</span>
              </div>
            </td>
            <td className="w-8 text-gray-400 px-2 py-2"></td>
            <td className="px-2 py-2 flex justify-between items-center ">
              <input
                type="text"
                value={newCriteria}
                onChange={(e) => setNewCriteria(e.target.value)}
                placeholder="Add Search Criteria or Add Keywords"
                className="bg-black border-b p-2 outline-none text-white text-sm flex-1"
              />
              <GoSearch />
            </td>
            <td className="w px-2 py-2 flex items-center justify-end "></td>
            <td>
              <button className=" relative left-40 borderColor-gray-600 px-3 py-1 button text-sm">
                ADD
              </button>
            </td>
          </tr>

          <tr className="bordr-b borderColor-gray-700">
            <td className="w-8  px-2 py-2"></td>
            <td className="w-12 px-2 py-2"></td>
            <td className="px-2 py-2"></td>
            <td className="w px-2 py-2 flex items-center justify-end ">
              <button className=" borderColor-gray-600 button px-3 py-1 text-sm">
                RUN SCREEN
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="pt-4"></div>
    </div>
  );
}
