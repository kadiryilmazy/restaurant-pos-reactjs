import React from "react";
import { popularDishes } from "../../constants";

function PopularDishes() {
    return (
        <div className="pr-6 mt-6 ">
            <div className="w-full bg-black rounded-lg">
                <div className="flex items-center justify-between px-6 py-4">
                    <h1 className="text-lg font-semibold tracking-wide text-white">Populas Dishes</h1>
                    <a href="" className="text-sm font-semibold text-blue-600">
                        View All
                    </a>
                </div>
                <div className="overflow-y-scroll h-[680px] scrollbar-hide">
                    {popularDishes.map((dish) => {
                        return (
                            <div key={dish.id} className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-6 py-2 mx-6 mt-6">
                                <h1 className="mr-5 text-xl font-bold text-white">{dish.id < 10 ? `0${dish.id}` : dish.id}</h1>
                                <img src={dish.image} alt={dish.name} className="h-[50px] w-[50px] rounded-full" />
                                <div>
                                    <h2 className="font-semibold tracking-wide text-white">{dish.name}</h2>
                                    <p className="text-sm text-white">
                                        <span className="text-[#ababab] text-sm font-semibold mt-1">Orders: </span>
                                        {dish.numberOfOrders}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default PopularDishes;
