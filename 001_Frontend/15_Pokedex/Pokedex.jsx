import React, { useState, useEffect } from "react";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    fetch("https://pokedex.mimo.dev/api/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <>
      <h1>All Pokemon</h1>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Pokedex;
