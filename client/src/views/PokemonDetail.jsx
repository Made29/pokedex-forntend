import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Modal from "../components/Modal";
import { addPokemon } from "../store/actions/pokemonAction";
import { useState } from "react";

export default function PokemonDetail() {
    const { state } = useLocation();
    const { id, name, image, moves, types } = state;

    // for show and hide modal
    const [modal, setModal] = useState(false)
    
    // for show and hide sidebar && modal
    const { sidebar } = useSelector((state) => state.pokemon);
    useEffect(() => {}, [sidebar, modal]);

    const dispatch = useDispatch();

    // limit the moves of pokemon 
    const movesLimit = moves.slice(0, 6);

    // catch pokemon
    const catchPokemon = (id) => {

        //how to get 50% chance
        const probability = Math.floor(Math.random() * 2);

        if (probability === 1) {
            dispatch(addPokemon(id)).then((data) => {
                let myPokemonList = JSON.parse(
                    localStorage.getItem("myPokemon")
                    );
                if (myPokemonList) {
                    myPokemonList.push(data);
                } else {
                    myPokemonList = [data];
                }
                localStorage.setItem(
                    "myPokemon",
                    JSON.stringify(myPokemonList)
                );
                setModal(!modal)
            });
        } else {
            alert("ups! pokemonnya lepas. tetap semangat!");
        }
    };

    return (
        <div className="h-screen">
            {/* Header */}

            <Header />

            {/* Body */}

            <div className="h-full flex pt-14">
                {/* Sidebar */}

                {sidebar && <Sidebar />}

                {/* Inner Body */}
                <div className="w-full lg:flex lg:justify-center lg:h-[95%]">
                    {/* Card */}

                    <div className=" h-full m-5 rounded-md shadow-lg bg-white lg:w-[30%]">
                        <div className=" h-[50%] flex justify-center items-center ">
                            <img src={image} className="h-full" />
                        </div>

                        <div className=" h-[50%] text-left p-2">
                            <div className="h-[80%] space-y-2">
                                <div>
                                    <h1>Name: {name}</h1>
                                </div>
                                <div>
                                    <h1>Moves: </h1>
                                    <div className="flex flex-wrap">
                                        {movesLimit?.map((el) => (
                                            <h1 className="text-xs bg-gray-300 rounded-full p-1 mr-1 mt-1">
                                                {el.move.name}
                                            </h1>
                                        ))}
                                    </div>
                                </div>
                                <h1>Type: </h1>
                                <div className="flex flex-wrap">
                                    {types?.map((el) => (
                                        <h1
                                        // background color follow the type of pokemon
                                            key={el.id}
                                            className={
                                                el.type.name === "grass" ||
                                                el.type.name === "bug"
                                                    ? "text-xs bg-green-400 rounded-full p-1 mr-1 mt-1"
                                                    : el.type.name ===
                                                          "poison" ||
                                                      el.type.name ===
                                                          "dragon" ||
                                                      el.type.name ===
                                                          "flying" ||
                                                      el.type.name === "ghost"
                                                    ? "text-xs bg-fuchsia-500 rounded-full p-1 mr-1 mt-1"
                                                    : el.type.name ===
                                                          "ground" ||
                                                      el.type.name === "rock" ||
                                                      el.type.name === "electric"
                                                    ? "text-xs bg-yellow-500 rounded-full p-1 mr-1 mt-1"
                                                    : el.type.name === "fire"
                                                    ? "text-xs bg-red-500 rounded-full p-1 mr-1 mt-1"
                                                    : el.type.name === "water" ||
                                                      el.type.name === "ice"
                                                    ? "text-xs bg-blue-300 rounded-full p-1 mr-1 mt-1"
                                                    : el.type.name === "dark" ||
                                                      el.type.name === "fighting"
                                                    ? "text-xs bg-stone-500 rounded-full p-1 mr-1 mt-1"
                                                    : el.type.name === "fairy" ||
                                                      el.type.name === "psychic"
                                                    ? "text-xs bg-pink-400 rounded-full p-1 mr-1 mt-1"
                                                    : "text-xs bg-gray-300 rounded-full p-1 mr-1 mt-1"
                                            }
                                        >
                                            {el.type.name}
                                        </h1>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <button
                                    className="p-2 w-full bg-blue-200 hover:bg-green-400"
                                    onClick={() => catchPokemon(id)}
                                >
                                    Catch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Modal to name pokemon  */}
                {modal && <Modal isActive={setModal} modal={modal}/>}
            </div>
        </div>
    );
}
