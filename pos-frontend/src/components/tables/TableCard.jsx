import React from "react";
import { getRandomBG } from "../../utils";

const TableCard = ({ key, name, status, initials }) => {
    return (
        <div key={key} className="w-[300px] bg-[#262626] hover:bg-[#2c2c2c] rounded-lg p-4 pb-10 mb-4 cursor-pointer  ">
            <div className="flex items-center justify-between px-1">
                <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
                <p className={`${status === "Booked" ? "text-green bg-[#2e4a40]" : "text-white bg-[#664a04]"} px-2 py-2  rounded-lg `}>{status}</p>
            </div>
            <div className="flex items-center justify-center mt-5 mb-7">
                <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>{initials}</h1>
            </div>
        </div>
    );
};

export default TableCard;
