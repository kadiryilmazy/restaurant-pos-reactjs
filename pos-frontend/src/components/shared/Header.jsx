import React from "react";
import Logo from "../../logo.png";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();
    return (
        <header className="flex justify-between items-center px-8 py-4  bg-[#000000]">
            <div onClick={() => navigate("/")} className="flex items-center gap-2 select-none hover:scale-125">
                <img src={Logo} className="w-8 h-8" alt="restro logo" />
                <h1 className="text-lg font-semibold text-[#f5f5f5]"> Restro</h1>
            </div>

            {/*SEARCH*/}
            <div className="flex items-center gap-4 bg-[#000000] rounded-[20px] px-5 py-2 w-[500px]">
                <FaSearch className="text-[#f5f5f5]" />
                <input type="text" placeholder="Search" className="bg-[#333] text-[#f5f5f5] px-2 py-1 rounded-md placeholder-white " />
            </div>

            {/*LOGGED USER*/}
            <div className="flex items-center gap-4">
                <div className="bg-[#0000] rounded-[15px] p-3 cursor-pointer">
                    <FaBell className="text-[#f5f5f5] text-2xl" />
                </div>
                <div className="flex items-center gap-3 cursor-pointer">
                    <FaUserCircle className="text-[#f5f5f5] text-4xl" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-[#f5f5f5] text-md font-semibold">User Name</h1>
                        <p className="text-[#ababab] text-xs font-medium">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
