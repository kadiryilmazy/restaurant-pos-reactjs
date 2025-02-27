import React from "react";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
    return (
        <div className="px-8 mt-6">
            <div className="w-full bg-black h-[450px] rounded-lg">
                <div className="flex items-center justify-between px-6 py-4">
                    <h1 className="text-lg font-semibold tracking-wide text-white">Recent Orders</h1>
                    <a href="" className="text-sm font-semibold text-blue-600">
                        View All
                    </a>
                </div>
                <div className="flex items-center gap-4 bg-[#1F1F1F] rounded-[15px] px-6 py-2 mx-6">
                    <FaSearch className="text-[#f5f5f5]" />
                    <input type="text" placeholder="Search" className="bg-[#1f1f1f] text-[#f5f5f5] outline-none" />
                </div>
                <div className="gap-2 px-6 mt-4 overflow-y-scroll h-[300px] scrollbar-hide">
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />
                    <OrderList />

                    <OrderList />
                    <OrderList />
                </div>
            </div>
        </div>
    );
};

export default RecentOrders;
