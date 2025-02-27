import React from "react";
import { FaBars, FaTable, FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";

const BottomNav = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#000000] text-white p-2 h-16 flex justify-around">
            <button className="flex items-center justify-center text-white bg-black w-[200px] rounded-[20px]">
                <FaHome className="inline mr-2" size={20} />
                Home
            </button>
            <button className="flex items-center justify-center text-white bg-black w-[200px] rounded-[20px]">
                <MdOutlineReorder className="inline mr-2" size={20} />
                Orders
            </button>
            <button className="flex items-center justify-center text-white bg-black w-[200px] rounded-[20px]">
                <MdTableBar className="inline mr-2" size={20} />
                Table
            </button>
            <button className="flex items-center justify-center text-white bg-black w-[200px] rounded-[20px]">
                <CiCircleMore className="inline mr-2" size={20} />
                More
            </button>
            <button className="absolute items-center p-3 text-white bg-yellow-400 rounded-full bottom-8">
                <BiSolidDish size={30} />
            </button>
        </div>
    );
};

export default BottomNav;
