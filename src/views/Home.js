import React from "react";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { getLocalPokemons } from "../hooks/useCatch";
import { usePokemons } from "../hooks/usePokemons";

function Home() {
    const { error, loading, data } = usePokemons();

    const countOfCatchPokemon = getLocalPokemons();

    if (error) return <PageTitle pageTitle="Something went wrong!"></PageTitle>;
    if (loading) return <PageTitle pageTitle="Loading..."></PageTitle>;
    return (
        <div>
            <div className="grid grid-cols-2 justify-between">
                <PageTitle pageTitle="All Pokemon"></PageTitle>
                <h5 className="text-gray-900 underline underline-offset-1 decoration-4 decoration-blue-600/30 font-semibold text-xl tracking-tight text-right mt-10">
                    {countOfCatchPokemon.length} catches
                </h5>
            </div>
            <div className="flex items-start">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full mt-5">
                    {data.pokemons.results.map((pokemon, index) => {
                        return (
                            <Card
                                key={index}
                                content={{
                                    imageUrl: `${pokemon.image}`,
                                    title: `${pokemon.name}`,
                                    detailUrl: `/detail/${pokemon.name}`,
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-row justify-center gap-6 mt-8 mb-32">
                <button className="py-3 px-7 rounded-2xl tracking-tighter font-medium bg-gray-900 text-gray-100 hover:bg-gray-800 transition duration-300 focus:outline-none focus:text-gray-100 focus:ring-4 focus:ring-gray-300 focus:ring-offset-2">
                    Load more
                </button>
            </div>
        </div>
    );
}

export default Home;
