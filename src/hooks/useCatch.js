import React, { useState, useEffect } from "react";
import Button from "../components/Button";

// Get all pokemon from local storage
export const getLocalPokemons = () => {
    let pokemons = [];
    const data = localStorage.getItem("pokemons");
    if (data) {
        pokemons = JSON.parse(data);
    }
    return pokemons;
};

// Delete catches pokemon from local storage
export const deletePokemon = (name) => {
    let items = getLocalPokemons();
    const filteredPokemon = items.filter(pokemons => pokemons.name !== name);
    localStorage.setItem("pokemons", JSON.stringify(filteredPokemon));
};

export const CatchForm = (props) => {
    // Array state all object pokemon
    const [pokemons, setPokemons] = useState(getLocalPokemons());

    // Input field state
    const [id, setId] = useState(props.valueId);
    const [name, setName] = useState('');

    // Handler submit event
    const pokemonSubmithandler = (e) => {
        e.preventDefault();
        let pokemon = {
            id,
            name
        };
        setPokemons([...pokemons, pokemon]);
        setName('');
        setId(props.valueId);
    };

    // Store value to local storage
    useEffect(() => {
        localStorage.setItem("pokemons", JSON.stringify(pokemons));
    }, [pokemons]);

    return (
        <div>
            <form autoComplete="off" onSubmit={pokemonSubmithandler}>
                <label
                    htmlFor="name"
                    className="form-label text-sm font-medium inline-block mb-2 text-gray-700"
                >
                    Nickname
                </label>
                <div className="md:flex items-center gap-2">
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter the nickname"
                        required
                        className="block xs:mb-3 md:mb-0 w-full md:w-1/3 text-gray-800 rounded-xl border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                    />
                    <Button btnType="submit" btnTitle="Catch to list" />
                </div>
            </form>
        </div>
    );
};
