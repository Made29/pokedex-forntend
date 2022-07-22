import {
    POKEMON_FETCHALLDATA,
    POKEMON_ADDPOKEMON_TOMYBAG,
    SIDE_BAR,
    POKEMON_BY_ID,
} from "../actions/actionType";

const initialState = {
    pokemons: [],
    pokemonById: {},
    sidebar: false,
};

function pokemonReducer(state = initialState, action) {
    switch (action.type) {
        case POKEMON_FETCHALLDATA:
            return {
                ...state,
                pokemons: action.payload,
            };

        case POKEMON_ADDPOKEMON_TOMYBAG:
            return {
                ...state,
                pokemonById: action.payload,
            };

        case SIDE_BAR:
            return {
                ...state,
                sidebar: action.payload
            };
        case POKEMON_BY_ID:
            return {
                ...state,
                pokemonById: action.payload
            };
        default:
            return state;
    }
}

export default pokemonReducer;
