import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import PokemonList from "./views/PokemonList";
import PokemonDetail from "./views/PokemonDetail";
import MyPokemonList from "./views/MyPokemonList";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/detail/:id" element={<PokemonDetail />} />
                <Route path="/my-pokemon" element={<MyPokemonList />} />
            </Routes>
        </div>
    );
}

export default App;
