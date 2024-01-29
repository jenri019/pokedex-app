import React from 'react'

export const PokemonName = ({name = ''}) => {

    const getCapitalize = (value) => {
        return value.toString().toUpperCase();
    }

  return (
    <div className='pokemon-name-container'>
        <p>{ getCapitalize(name) }</p>
    </div>
  )
}
