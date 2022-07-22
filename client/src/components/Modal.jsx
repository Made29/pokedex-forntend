import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Modal({ modal, isActive }) {
    const [name, setName] = useState("");
    const [pokemonList, setPokemonList] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("myPokemon"))
        setPokemonList(data)
    }, [])

    const input = (e) => {
        setName(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        let newData = pokemonList
        newData[newData.length - 1].nickname = name
        localStorage.setItem("myPokemon", JSON.stringify(pokemonList))
        isActive(!modal)
    }

    return (
        <div className="bg-blue-500 h-full w-full fixed bg-opacity-75 flex justify-center items-center ">
            <form className="bg-white p-10 rounded shadow-sm text-left space-y-1" onSubmit={submit}>
                <h1>Kamu berhasil menangkap pokemonnya!!!</h1>
                <h1>Beri nama pokemon mu</h1>
                <input
                    onChange={input}
                    value={name}
                    type="text"
                    placeholder="ex: Jamal"
                    className="border-2 p-1 w-full"
                />
                <button className="bg-blue-300 hover:bg-blue-600 hover:rounded-lg duration-100 w-full p-1">
                    Submit
                </button>
            </form>
        </div>
    );
}
