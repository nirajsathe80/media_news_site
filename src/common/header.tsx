"use client";

import React from "react";
import Link from "next/link";
import { Header_Links } from "./Links/links";

const Header = () => {
  const handleSearch = () => {};
  return (
    <div className="bg-[#191818] headerWidth ">
      <div className="container px-5 mx-auto flex justify-between items-center">
        {/* Logo with the Image component */}
        <div className="flex items-center w-full mr-[20px]">
          <Link href={"/"} className="mr-5 text-[50px] text-[#e44d3b]">
            JM
          </Link>
          <input
            type="text"
            placeholder="Search"
            onChange={() => {}}
            onClick={handleSearch}
            className="bg-white text-gray-800 w-full px-5 py-1 rounded-lg max-w-[700px]"
          />
        </div>

        {/* Navigation */}
        <nav className="space-x-4">
          {Header_Links.map((item, index) => (
            <Link
              key={index}
              href={item?.path}
              className="text-white cursor-pointer text-xl font-semibold pr-2"
            >
              {item?.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
