import React from "react";

function MiniCard({ title, icon, number, footerNum }) {
    return (
        <div className="bg-[#1a1a1a] py-5 px-5 rounded-lg w-[50%]">
            <div className="flex items-start justify-between">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">{title}</h1>
                <button className={`${title === "Total Earnings" ? "bg-green-500" : "bg-yellow-500"} p-3 rounded-lg text-white text-2xl`}>{icon}</button>
            </div>
            <div>
                <h1 className="mt-5 text-4xl font-bold text-white">{number}</h1>
                <h1 className="mt-2 text-lg text-white">
                    <span className="text-green-500 ">%{footerNum}</span> than yesterday
                </h1>
            </div>
        </div>
    );
}

export default MiniCard;
