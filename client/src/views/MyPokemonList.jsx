import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MyPokemonList() {
    const { sidebar } = useSelector((state) => state.pokemon);

    const [pokemon, setPokemon] = useState([]);

    const listPokemon = (data) => {
        setPokemon(data);
    }

    useEffect(() => {
        const myPokemon = JSON.parse(localStorage.getItem("myPokemon"));
        listPokemon(myPokemon)
    }, [sidebar, pokemon]);

    const removePokemon = (indexDelete) => {
        const data = pokemon.filter((el, index) => index !== indexDelete); 
        localStorage.setItem("myPokemon", JSON.stringify(data))
    };

    return (
        <div className="h-screen">
            {/* Header */}

            <Header />

            {/* Body */}

            <div className="h-full flex flex-col pt-14 sm:pt-16 md:pt-16 lg:pt-16">
                {/* Sidebar */}

                {sidebar && <Sidebar />}

                {/* Inner Body */}
                <h1 className="bg-white">My Pokemon</h1>
                <div className="w-full h-full lg:flex lg:flex-wrap md:flex md:flex-wrap">
                    {/* Card */}

                    {pokemon?.map((el, index) => (
                        <div
                            className="h-[50%] m-5 shadow-lg rounded-md space-y-2 bg-white"
                            key={index}
                        >
                            <div className=" h-[60%] flex justify-center items-center">
                                <img
                                    src={el?.sprites?.front_default}
                                    className="h-full"
                                />
                            </div>
                            <div className="h-[30%] w-full">
                                <div>
                                    <h1>{el.nickname}</h1>
                                </div>
                                <div className="m-5">
                                    <button
                                        className="bg-red-200 hover:bg-red-600 w-full p-2 rounded-lg"
                                        onClick={() => removePokemon(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
