import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

function OrdersCard() {
    return (
        <div className="w-[370px] bg-[#262626] rounded-lg p-4 ">
            <div className="flex items-center gap-5">
                <button className="p-3 text-xl font-bold bg-yellow-500 rounded-lg">AM</button>
                <div className="flex items-center justify-between w-[100%] mt-5">
                    <div className="flex flex-col items-start gap-2">
                        <h1 className="text-lg font-semibold tracking-wide text-white">User</h1>
                        <p className="text-[#ababab] text-sm">#101/ Dine in</p>
                    </div>
                    <div className="flex flex-col items-end gap-5 ">
                        <p className="gap-2 px-5 py-2 text-white bg-green-800 rounded-lg ">
                            <FaCheckDouble className="inline mr-2" />
                            Ready
                        </p>
                        <p className="text-[#ababab] text-sm ">
                            <FaCircle className="inline mr-2 text-green-600" />
                            Ready to serve
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center mt-4 text-[#ababab]">
                <p>January 18 , 2025 08:32 PM</p>
                <p>8 Items</p>
            </div>
            <hr className="w-full mt-4 border-gray-500 border-t-1 " />
            <div className="flex items-center justify-start mt-4">
                <h1 className="text-xl font-semibold text-white">Total</h1>
                <p className="text-lg font-semibold text-white">$25.00</p>
            </div>
        </div>
    );
}

export default OrdersCard;
