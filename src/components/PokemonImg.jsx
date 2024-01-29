import React from 'react'

export const PokemonImg = ({name, image = {front_default: ''}}) => {
    return (
        <img src={image.front_default} alt={name} />
    )
}
