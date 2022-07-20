import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MyPokemonList() {
    return (
        <div className="h-screen">
            {/* Header */}

            <Header />

            {/* Body */}

            <div className="h-full flex pt-14">
                {/* Sidebar */}

                <Sidebar />

                {/* Inner Body */}
                <div className="w-full">
                    {/* Card */}
                    <h1>My Pokemon</h1>

                    <div className="h-[50%] m-5 shadow-lg rounded-md space-y-2 bg-white">
                        <div className=" h-[60%] flex justify-center items-center">
                            <h1>Image</h1>
                        </div>
                        <div className="h-[30%] w-full">
                            <div>
                                <h1>Nickname</h1>
                            </div>
                            <div className="m-5">
                                <button className="bg-red-200 hover:bg-red-600 w-full p-2 rounded-lg">
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
