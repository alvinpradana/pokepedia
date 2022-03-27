import React from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import PageTitle from "../components/PageTitle";
import { usePokemons } from "../hooks/usePokemons";

function Home() {
    const { error, loading, data } = usePokemons();

    if (error) return <PageTitle pageTitle="Something went wrong!"></PageTitle>;
    if (loading) return <PageTitle pageTitle="Loading..."></PageTitle>;
    return (
        <div>
            <div className="grid grid-cols-2 justify-between">
                <PageTitle pageTitle="List Pokemon"></PageTitle>
                <h5 className="text-gray-900 font-semibold text-xl tracking-tight text-right mt-10">
                    {data.pokemons.count} items
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
                                    // description: `${pokemon.url}`,
                                    detailUrl: `/detail/${pokemon.name}`,
                                    linkUrl: "#!",
                                    linkTitle: "Add to favorite",
                                }}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-row justify-center gap-6 mt-8 mb-32">
                <Button btnTitle="< Prev" />
                <Button btnTitle="Next >" />
            </div>
        </div>
    );
}

export default Home;
