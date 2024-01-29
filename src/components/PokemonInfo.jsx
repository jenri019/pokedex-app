import React from 'react'
import { useFetch } from '../hooks';
import { PokemonImg } from './PokemonImg';
import { PokemonDescription } from './PokemonDescription';

export const PokemonInfo = ({idPokemon, visible}) => {

  const urlInfo = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`
  const urlDescription = `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`

  const { data } = useFetch(urlInfo, urlDescription);
  const { name, sprites, flavor_text } = !!data && data;

  return (
    <div className="information-window">
      {
        (visible)
        ? (<PokemonImg name={name} image={sprites}/>)
        : (<PokemonDescription description={flavor_text}/>)
      }
    </div>
  )
}