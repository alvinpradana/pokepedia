import React from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import PageTitle from "../components/PageTitle";
import { usePokemon } from "../hooks/usePokemon";

function Detail() {
    const { name } = useParams();
    const { loading, error, data } = usePokemon(name);

    if (error) return <PageTitle pageTitle="Something went wrong!"></PageTitle>;
    if (loading) return <PageTitle pageTitle="Loading..."></PageTitle>;

    return (
        <div>
            <PageTitle pageTitle="Detail Pokemon" />
            <div className="flex justify-start mt-5 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl bg-white shadow-lg">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.pokemon.id}.png`}
                        alt="Cat"
                        className="w-full h-full object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                    />
                    <div className="md:col-span-2 p-6 mb-8 flex flex-col justify-start">
                        <div className="mb-6">
                            <h5 className="text-gray-900 text-xl font-medium tracking-tight capitalize mb-2">
                                {data.pokemon.name}
                            </h5>
                            <p className="text-gray-700 text-base tracking-tight mb-4">
                                Moves:
                            </p>
                            {data.pokemon.moves.map((moves, index) => {
                                return (
                                    <span key={index} className="text-gray-600 text-xs tracking-tight capitalize" >
                                        {moves.move.name} |{" "}
                                    </span>
                                );
                            })}
                        </div>
                        <Button btnTitle="Add to favorite" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
