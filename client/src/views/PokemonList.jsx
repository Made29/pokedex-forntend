import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAllPokemon } from "../store/actions/pokemonAction";
import { useNavigate } from "react-router-dom";

export default function PokemonList() {
    const { pokemons, sidebar } = useSelector((state) => state.pokemon);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    
    //count pokemon we have
    let totalPokemon = {};
    
    const data = JSON.parse(localStorage.getItem("myPokemon"));
    
    if (data) {
        for (let i = 0; i < data.length; i++) {
            if (!totalPokemon[data[i].name]) {
                totalPokemon[data[i].name] = 1;
            } else {
                totalPokemon[data[i].name]++;
            }
        }
    }

    //for sidebar and pagination
    useEffect(() => {
        dispatch(fetchAllPokemon(currentPage));
    }, [dispatch, currentPage, sidebar]);

    //all data sent to detail page
    const pokemonDetail = (id, name, image, moves, types) => {
        navigate(`/detail/${id}`, {
            state: {
                id: id,
                name: name,
                image: image,
                moves: moves,
                types: types,
            },
        });
    };

    // how paginaton work
    const pagination = (page) => {
        if (page === "prev") {
            if (+currentPage !== 0) {
                setCurrentPage(+currentPage - 20);
            }
        } else {
            if (+currentPage !== 0) {
                setCurrentPage(+currentPage + 20);
            } else {
                setCurrentPage(20);
            }
        }
    };

    return (
        <div className="h-screen">
            {/* Header */}

            <Header />

            {/* Body */}

            <div className="h-full flex flex-col pt-14 sm:pt-16 md:pt-16 lg:pt-16 lg:pb-0">
                {/* Sidebar */}

                {sidebar && <Sidebar />}

                {/* Inner Body */}
                <h1 className="bg-white">Pokemon List</h1>
                <div className="w-full lg:h-[92%] lg:flex lg:flex-wrap lg:flex-col">
                    {/* Card */}

                    {pokemons?.map((el) => (
                        <div
                            className="m-5 shadow-lg rounded-md bg-white cursor-pointer py-3 "
                            key={el.id}
                            onClick={() =>
                                pokemonDetail(
                                    el.detail.id,
                                    el.name,
                                    el?.detail?.sprites?.front_default,
                                    el?.detail?.moves,
                                    el?.detail?.types
                                )
                            }
                        >
                            <div className=" h-[20%]">
                                <h1>{el?.name}</h1>
                                <h1 className="text-sm">
                                    Own Total:{" "}
                                    {totalPokemon[el.name]
                                        ? totalPokemon[el.name]
                                        : "0"}
                                </h1>
                            </div>
                        </div>
                    ))}
                </div>
                    <div className="flex justify-center items-center space-x-1">
                        <button
                            className="bg-gray-300 w-full"
                            onClick={() => pagination("prev")}
                        >
                            Prev
                        </button>
                        <button
                            className="bg-gray-300 w-full"
                            onClick={() => pagination("next")}
                        >
                            Next
                        </button>
                    </div>
            </div>
        </div>
    );
}
