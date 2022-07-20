import { BsJustify } from "react-icons/bs";

export default function Header() {
    return (
        <div className="fixed h-[10%] w-full flex justify-between items-center bg-[#1E5397]">
            <div className="w-[20%] h-full flex justify-center items-center text-2xl">
                <button>
                    <BsJustify />
                </button>
            </div>

            <div className="w-[60%] h-full flex justify-center items-center">
                <h1 className="text-yellow-400">Pokemon</h1>
            </div>
            <div className="w-[20%] h-full flex justify-center items-center text-white">
                User
            </div>
        </div>
    );
}
