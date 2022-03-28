import React from "react";
import PageTitle from "../components/PageTitle";
import { deletePokemon, getLocalPokemons } from "../hooks/useCatch";

function Favorite() {
    // Fetch data from local storage
    const pokemons = getLocalPokemons();
    if (pokemons.length < 1) return <p className="text-center text-lg py-8 font-semibold tracking-tight text-gray-700">Data is empty.</p>

    return (
        <div>
            <PageTitle pageTitle="Your Favorite Pokemon" />
            <div className="flex items-start mb-32">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-5">
                    {pokemons.map((pokemon, index) => {
                        return (
                            <div key={index}>
                                <div className="rounded-xl w-400 h-300 shadow-lg hover:shadow-2xl transition duration-300 bg-blue-300 max-w-sm">
                                    <div className="flex flex-wrap justify-end">
                                        <a href="/favorite"
                                            onClick={() => deletePokemon(pokemon.name)}
                                            className="bg-rose-600 hover:bg-rose-500 hover:shadow-lg transition duration-300 p-3 rounded-tr-xl rounded-bl-xl">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6 text-white"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                                        alt="Cat"
                                        className="rounded-t-xl flex items-center justify-center w-auto mx-auto py-6"
                                    />
                                    <div className="p-4 bg-gray-900 rounded-b-xl">
                                        <h5 className="text-gray-100 text-lg text-center font-semibold tracking-tight uppercase">
                                            {pokemon.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Favorite;
