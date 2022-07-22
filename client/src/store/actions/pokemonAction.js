import {
    POKEMON_ADDPOKEMON_TOMYBAG,
    POKEMON_BY_ID,
    POKEMON_FETCHALLDATA,
    SIDE_BAR,
} from "./actionType";

const url = "https://pokeapi.co/api/v2/pokemon";

export const fetchData = (payload) => {
    return {
        type: POKEMON_FETCHALLDATA,
        payload,
    };
};

export const addPokemonToMyBag = (payload) => {
    return {
        type: POKEMON_ADDPOKEMON_TOMYBAG,
        payload,
    };
};

export const sidebar1 = (payload) => {
    return {
        type: SIDE_BAR,
        payload,
    };
};

export const pokemonById = (payload) => {
    return {
        type: POKEMON_BY_ID,
        payload,
    };
};

export const fetchAllPokemon = (page) => {
    return (dispatch) => {
        //get the first url
        fetch(`${url}?offset=${page}&limit=20`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                const result = data.results;
                data.results.forEach((el) => {
                    //get the second url to get the detail pokemon
                    fetch(el.url)
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error(response.statusText);
                            }
                            return response.json();
                        })
                        .then((data) => {
                            const detail = data;
                            el.detail = detail;
                        });
                    dispatch(fetchData(result));
                });
            })
            .catch((error) => console.log(error));
    };
};

export const addPokemon = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${url}/${id}`);
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            const data = await response.json();
            dispatch(pokemonById(data))
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};

export const sidebar = () => {
    return async (dispatch, getState) => {
        try {
            const data = getState();
            dispatch(sidebar1(!data.pokemon.sidebar));
            return data;
        } catch (error) {
            console.log(error);
        }
    };
};
