import React from 'react'
import { PokemonImg } from './PokemonImg'
import { useCounter, useVisible } from '../hooks';
import { ButtonControl } from './ButtonControl';
import { PokemonInfo } from './PokemonInfo';

export const PokedexBody = () => {

    const {counter, increment, decrement} = useCounter(1);
    const {visible, changeVisibility} = useVisible(true);

    const getPreviousPokemon = () => {
        if(counter == 1) return;
        decrement();
    }

    const getNextPokemon = () => {
        if(counter == 10) return;
        increment();
    }

    const setPokemonImage = () => {
        if(visible) return;
        changeVisibility();
    }

    const setPokemonDescription = () => {
        if(!visible) return;
        changeVisibility();
    }

    return (
        <div className='pokedex'>
            <PokemonInfo idPokemon={counter} visible={visible}/>

            <ButtonControl btnFunction={ getPreviousPokemon } btnPosition='btn-horizontal btn-left'/>
            <ButtonControl btnFunction={ getNextPokemon } btnPosition='btn-horizontal btn-right'/>

            <ButtonControl btnFunction={ setPokemonImage } btnPosition='btn-vertical btn-up'/>
            <ButtonControl btnFunction={ setPokemonDescription } btnPosition='btn-vertical btn-down'/>
        </div>
    )
}
