import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function PokemonList() {
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
                    <h1>Pokemon List</h1>

                    <div className="h-[50%] m-5 shadow-lg rounded-md bg-white">
                        <div className=" h-[80%] flex justify-center items-center">
                            <h1>Image</h1>
                        </div>
                        <div className=" h-[20%]">
                            <h1>Name</h1>
                            <h1>Own Total</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
