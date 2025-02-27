import React, { useState, useEffect } from "react";

function Greetings() {
    const [dateTime, setDateTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const formatDate = (date) => {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return `${months[date.getMonth()]} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
    };

    const formatTime = (date) => `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`; // Return formatted time

    return (
        <div className="flex items-center justify-between px-8 mt-5">
            <div>
                <h1 className="mb-2 text-2xl font-semibold tracking-wide text-white ">Good Morning User!</h1>
                <p className="text-sm">Give your best services for customer :D</p>
            </div>
            <div>
                <h1 className="text-3xl font-bold tracking-wide text-white w-[130px]">{formatTime(dateTime)}</h1>
                <p className="text-[#ababab] text-sm">{formatDate(dateTime)}</p>
            </div>
        </div>
    );
}

export default Greetings;
