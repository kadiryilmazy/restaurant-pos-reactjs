import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate("/")} className="p-2 text-2xl font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-400">
            <IoArrowBackOutline />
        </button>
    );
}

export default BackButton;
