import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import { CatchForm } from "../hooks/useCatch";
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
                        className="w-full h-full bg-blue-300 object-cover rounded-t-xl md:rounded-l-xl md:rounded-tr-none"
                    />
                    <div className="md:col-span-2 p-6 mb-8 flex flex-col justify-start">
                        <div className="mb-5">
                            <h5 className="text-gray-900 text-xl font-semibold tracking-tight uppercase mb-2">
                                {data.pokemon.name}
                            </h5>
                            <p className="text-gray-700 font-medium tracking-tight mb-2">
                                Moves:
                            </p>
                            {data.pokemon.moves.map((moves, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="text-gray-600 text-xs tracking-tight capitalize"
                                    >
                                        {moves.move.name} |{" "}
                                    </span>
                                );
                            })}
                            <p className="text-gray-700 font-medium tracking-tight my-2">
                                Types:
                            </p>
                            {data.pokemon.types.map((types, index) => {
                                return (
                                    <span
                                        key={index}
                                        className="px-6 py-2 bg-gray-300 font-medium rounded-xl text-gray-900 text-xs tracking-tight capitalize mr-1"
                                    >
                                        {types.type.name}
                                    </span>
                                );
                            })}
                        </div>
                        <CatchForm valueId={data.pokemon.id} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
