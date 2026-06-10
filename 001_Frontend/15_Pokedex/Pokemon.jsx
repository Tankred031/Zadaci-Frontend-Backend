import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const pokemonName = query.get("name");

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch Pokémon");
        }

        const data = await response.json();
        setPokemon(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (pokemonName) {
      fetchPokemonDetails();
    }
  }, [pokemonName]);

  if (!pokemonName) return <p>No Pokémon selected.</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Pokémon Details</h1>

      {pokemon && (
        <div className="pokemon-detail-card">
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />

          <p>
            <strong>Height:</strong> {pokemon.height}
          </p>

          <p>
            <strong>Weight:</strong> {pokemon.weight}
          </p>

          <h3>Abilities</h3>
          <ul>
            {pokemon.abilities.map((a, i) => (
              <li key={i}>{a.ability.name}</li>
            ))}
          </ul>

          <h3>Types</h3>
          <ul>
            {pokemon.types.map((t, i) => (
              <li key={i}>{t.type.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pokemon;