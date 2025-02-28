import React from "react";
import { FaCheckDouble, FaCircle } from "react-icons/fa";

function OrderList() {
    return (
        <div className="flex items-center gap-6 mt-2 mb-3">
            <button className="p-3 text-xl font-bold bg-yellow-500 rounded-lg">AM</button>
            <div className="flex items-center justify-between w-[100%]">
                <div className="flex flex-col items-start gap-2">
                    <h1 className="text-lg font-semibold tracking-wide text-white">User</h1>
                    <p className="text-[#ababab] text-sm">8</p>
                </div>
                <div>
                    <h1 className="text-[#f6b100] font-semibold border border-[#f6b100] rounded-lg p-1">Table No:3</h1>
                </div>
                <div className="flex flex-col items-end gap-2 ">
                    <p className="text-green-600 ">
                        <FaCheckDouble className="inline mr-2" />
                        Ready
                    </p>
                    <p className="text-[#ababab] text-sm">
                        <FaCircle className="inline mr-2 text-green-600" />
                        Ready to serve
                    </p>
                </div>
            </div>
        </div>
    );
}

export default OrderList;
