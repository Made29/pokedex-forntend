import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function PokemonDetail() {
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

                    <div className=" h-full m-5 rounded-md shadow-lg bg-white">

                        <div className=" h-[50%] flex justify-center items-center ">
                            <h1>Image</h1>
                        </div>
                        
                        <div className=" h-[50%] text-left p-2">
                            <div className="h-[80%]">
                                <h1>Name</h1>
                                <h1>Moves</h1>
                                <h1>Type</h1>
                            </div>

                            <div>
                                <button className="p-2 w-full bg-blue-200 hover:bg-green-400">
                                    Catch
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}
