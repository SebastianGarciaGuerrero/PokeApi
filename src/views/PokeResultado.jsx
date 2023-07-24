import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/pokebuscador.css"


const PokeResultado = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState();

  const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getData(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }, [name]);

  useEffect(() => {

  })

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };


  return (
    <div className="pokemon-card-container">
      <div className="pokemon-card">
        {pokemon ? (
          <>
            <h2>{capitalizeFirstLetter(pokemon.name)}</h2>
            <div className="pokemon-image"> {/* Agregamos una nueva div con la clase pokemon-image */}
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
            <div className="pokemon-info">
              <p>Height: {pokemon.height} cm</p>
            <p  >Weight: {pokemon.weight}</p>
          </div>
          <ul>
            <li>hp: {pokemon?.stats[0]?.base_stat}</li>
            <li>attack: {pokemon?.stats[1]?.base_stat}</li>
            <li>defense: {pokemon?.stats[2]?.base_stat}</li>
            <li>special attack: {pokemon?.stats[3]?.base_stat}</li>
            <li>special defense: {pokemon?.stats[4]?.base_stat}</li>
            <li>speed: {pokemon?.stats[5]?.base_stat}</li>
          </ul>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
  
};

export default PokeResultado;
