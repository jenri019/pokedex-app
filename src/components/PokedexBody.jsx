import React from 'react'
import { PokemonImg } from './PokemonImg'
import { useCounter } from '../hooks/useCounter';
import { ButtonControl } from './ButtonControl';

export const PokedexBody = () => {
    const {counter, increment, decrement} = useCounter(1);

    return (
        <div className='pokedex'>
            <PokemonImg counter={counter}/>
            <ButtonControl btnFunction={decrement} btnPosition='btn-left' className='btn-change'/>
            <ButtonControl btnFunction={increment} btnPosition='btn-right' className='btn-change'/>
        </div>
    )
}
