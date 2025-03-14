import scrollbarHide from "tailwind-scrollbar-hide";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    safelist: [
        "bg-red-400",
        "bg-red-500",
        "bg-red-600",
        "bg-orange-400",
        "bg-orange-500",
        "bg-orange-600",
        "bg-yellow-400",
        "bg-yellow-500",
        "bg-yellow-600",
        "bg-green-400",
        "bg-green-500",
        "bg-green-600",
        "bg-blue-400",
        "bg-blue-500",
        "bg-blue-600",
        "bg-cyan-400",
        "bg-cyan-500",
        "bg-cyan-600",
        "bg-teal-400",
        "bg-teal-500",
        "bg-teal-600",
        "bg-sky-400",
        "bg-sky-500",
        "bg-sky-600",
        "bg-pink-400",
        "bg-pink-500",
        "bg-pink-600",
        "bg-fuchsia-400",
        "bg-fuchsia-500",
        "bg-fuchsia-600",
        "bg-purple-400",
        "bg-purple-500",
        "bg-purple-600",
        "bg-violet-400",
        "bg-violet-500",
        "bg-violet-600",
        "bg-rose-400",
        "bg-rose-500",
        "bg-rose-600",
        "bg-lime-400",
        "bg-lime-500",
        "bg-lime-600",
        "bg-emerald-400",
        "bg-emerald-500",
        "bg-emerald-600",
        "bg-indigo-400",
        "bg-indigo-500",
        "bg-indigo-600",
    ],
    theme: {
        extend: {},
    },
    plugins: [scrollbarHide],
};
