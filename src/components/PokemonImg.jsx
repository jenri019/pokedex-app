import React from 'react'

export const PokemonImg = ({counter}) => {

    const urlInfo = `https://pokeapi.co/api/v2/pokemon/${counter}`
/*
    const { data, isLoading } = useFetch(urlInfo);
    const { name, sprites } = !!data && data;

    const getPrevPokemon = () => {
        if(counter == 1) return;
        decrement();
    }

    const getNextPokemon = () => {
        if(counter == 300) return;
        increment();
    }*/

    return (
        <img src="{ img }" alt="{ name }" />
    )
}
