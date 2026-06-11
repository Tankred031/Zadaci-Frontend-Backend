import React from "react";
import { Link } from "react-router-dom";
import "./PokemonCard.css";

const PokemonCard = ({ pokemon }) => {
  const pokemonId = pokemon.url.split("/").filter(Boolean).pop();
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <Link to={`/pokemon?name=${pokemon.name}`} className="pokemon-card-link">
      <div className="pokemon-card">
        <img src={spriteUrl} alt={pokemon.name} />
        <h2>{pokemon.name}</h2>
      </div>
    </Link>
  );
};

export default PokemonCard;