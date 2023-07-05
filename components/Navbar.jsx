import Link from "next/link";
import React from "react";
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'


const Navbar = () => {
  return (
    <div className="bg-orange-500 text-[#efefef] h-[60px] w-full py-2 px-6 flex justify-center">
      <div className="h-full w-10/12 my-auto flex justify-between items-center">
        <h2  className="text-3xl">
          <Link href="/">WebDevMania</Link>
        </h2>
        <ul className="flex gap-6 justify-center items-center">
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">Home</li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">Hero</li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">Categories</li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">Featured</li>
            <li className="cursor-pointer transition-all hover:text-[#efefefe6]">Contact</li>
        </ul>
        <div className="flex items-center gap-6">
            <div className="rounded-lg flex items-center gap-4 bg-white px-2 py-1">
                <input className="outline-none text-[#222]" type="text" placeholder="Search..." />
                <AiOutlineSearch color="black"/>
            </div>
       
        <div className="relative">
            <AiOutlineShoppingCart size={25}/>
            <span className="px-2 absolute bg-white text-[#222] -top-3 rounded-full -right-4">0</span>
        </div>
        <span>
            Guest
        </span>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
