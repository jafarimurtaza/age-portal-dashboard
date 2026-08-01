import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function Header() {
  return (
    <div className="w-full py-3 bg-gray-100 min-h-16 sm:h-20">
      <header className="flex flex-col sm:flex-row justify-between items-center px-3 sm:px-6 h-full gap-3">
        <div className="w-full sm:w-auto border border-gray-300 rounded-2xl px-3 py-2 flex items-center gap-3 bg-gray-200 max-w-2xl">
          <IoSearchOutline className="text-gray-600 text-xl" />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent border-none focus:outline-none text-gray-600 placeholder:text-gray-500"
          />
        </div>

        <button className="w-full sm:w-auto flex items-center justify-between sm:justify-center gap-3 rounded-2xl border border-gray-300 bg-white px-3 py-2">
          <span className="text-lg bg-gray-300 rounded-full p-2">
            <CiUser className="text-gray-600" />
          </span>
          <span className="text-xs text-gray-600 truncate max-w-35">
            Example@gmail.com
          </span>
        </button>
      </header>
    </div>
  );
}
