import React from "react";
import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";
import { tables } from "../constants";

import { useState } from "react";

const Tables = () => {
    const [status, setstatus] = useState("all");

    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
            <div className="flex items-center justify-between px-16 py-8 mt-2">
                <div className="flex items-center gap-4">
                    <BackButton />
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider pl-5 ">Tables</h1>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <button onClick={() => setstatus("all")} className={`text-[#ababab] text-lg ${status === "all" && "bg-[#383838] x px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
                        All
                    </button>
                    <button onClick={() => setstatus("booked")} className={`text-[#ababab] text-lg ${status === "booked" && "bg-[#383838] x px-5 py-2"} rounded-lg px-5 py-2 font-semibold`}>
                        Booked
                    </button>
                </div>
            </div>
            <div className="flex flex-wrap gap-9 py-4 overflow-hidden overflow-y-scroll px-16 scrollbar-hide h-[calc(100vh-5rem-5rem)]">
                {tables.map((table) => {
                    return <TableCard key={table.id} name={table.name} status={table.status} initials={table.initial} />;
                })}
            </div>
            <BottomNav />
        </section>
    );
};

export default Tables;
