import { BsJustify } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { sidebar } from "../store/actions/pokemonAction";

export default function Header() {
    const dispatch = useDispatch()

    const showHideBar = () => {
        dispatch(sidebar())
    }

    return (
        <div className="fixed h-[10%] w-full flex justify-between items-center bg-[#1E5397]">
            <div className="w-[20%] h-full flex pl-3 text-2xl">
                <button onClick={showHideBar}>
                    <BsJustify />
                </button>
            </div>

            <div className="w-[60%] h-full flex justify-center items-center">
                <h1 className="text-yellow-400">Pokemon</h1>
            </div>
            <div className="w-[20%] h-full flex justify-end items-center pr-3 text-white">
                User
            </div>
        </div>
    );
}
