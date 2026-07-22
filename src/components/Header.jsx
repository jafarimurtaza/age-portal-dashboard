import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

export default function Header() {
  return (
    <div className="w-full py-3 bg-gray-100 min-h-16 sm:h-20">
      <header className="flex justify-between items-center px-3 sm:px-6 h-full flex-row gap-2">
        <div className="border border-gray-300 rounded-2xl px-2 sm:px-3 py-2 sm:py-2 flex items-center gap-1 sm:gap-2 bg-gray-200">
          <button className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-xl">
              <IoSearchOutline className="text-gray-600 " />
            </span>
            <span className="hidden sm:inline ">
              <form action="">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent border-none focus:outline-none text-gray-600"
                />
              </form>
            </span>
          </button>
        </div>

        <div>
          <button className="flex items-center gap-1 sm:gap-2">
            <span className="text-lg sm:text-xl bg-gray-300 rounded-full p-1 sm:p-2">
              <CiUser className="text-gray-600 " />
            </span>
            <span>
              <p className="text-xs hidden sm:block md:block text-gray-600 truncate max-w-25 sm:max-w-none">
                Example@gmail.com
              </p>
            </span>
          </button>
        </div>
      </header>
    </div>
  );
}
