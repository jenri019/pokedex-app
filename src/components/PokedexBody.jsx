import React from 'react'
import { PokemonImg } from './PokemonImg'
import { useCounter } from '../hooks/useCounter';

export const PokedexBody = () => {
    const {counter, increment, decrement} = useCounter(1);

    return (
        <div className='pokedex'>
            <PokemonImg counter={counter}/>
            <button onClick={() => decrement()} className='btn-change btn-left'></button>
            <button onClick={() => increment()} className='btn-change btn-right'></button>
        </div>
    )
}
