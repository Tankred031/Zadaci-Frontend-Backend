import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import "./Search.css"; // Loading the CSS file

const Search = () => {
    const [pokemons, setPokemons] = useState([]);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch("https://pokedex.mimo.dev");
                const data = await response.json();
                setPokemons(data);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
            }
        };
        fetchPokemons();
    }, []);

    useEffect(() => {
        if (input === "") {
            setFilteredPokemons([]);
        } else {
            const filtered = pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().startsWith(input.toLowerCase())
            );
            setFilteredPokemons(filtered);
        }
    }, [input, pokemons]);

    return (
        <div>
            <h1>Search a Pokémon</h1>
            <input
                type="text"
                placeholder="Type a name..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>
                {filteredPokemons.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        </div>
    );
};

export default Search;