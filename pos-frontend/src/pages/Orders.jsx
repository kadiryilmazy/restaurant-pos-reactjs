import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders = () => {
    const [status, setstatus] = useState("all");
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden ">
            <div className="flex items-center justify-between px-10 py-4 mt-2">
                <div className="flex items-center ml-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider pl-5 ">Orders</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setstatus("all")} className={`text-[#ababab] text-lg ${status === "all" && "bg-[#383838] x px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
                        All
                    </button>
                    <button onClick={() => setstatus("progress")} className={`text-[#ababab] text-lg ${status === "progress" && "bg-[#383838] x px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
                        In Progress
                    </button>
                    <button onClick={() => setstatus("ready")} className={`text-[#ababab] text-lg ${status === "ready" && "bg-[#383838] x px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
                        Ready
                    </button>
                    <button onClick={() => setstatus("completed")} className={`text-[#ababab] text-lg ${status === "completed" && "bg-[#383838] x px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
                        Completed
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-6 py-4 overflow-hidden overflow-y-scroll px-14 scrollbar-hide h-[calc(100vh-5rem-5rem)]">
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
                <OrderCard />
            </div>
            <BottomNav />
        </section>
    );
};

export default Orders;
