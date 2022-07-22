import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="bg-[#1E5397] w-[80%] md:w-[40%] lg:w-[20%] h-full fixed space-y-3 ease-in-out duration-300">
            <Link to="/">
                <div className="p-2 hover:bg-slate-700">
                    <button className="text-white">All Pokemon</button>
                </div>
            </Link>
            <Link to="/my-pokemon">
                <div className="p-2 hover:bg-slate-700">
                    <button className="text-white">My Pokemon</button>
                </div>
            </Link>
        </div>
    );
}
