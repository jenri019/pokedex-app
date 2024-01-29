import React from 'react'

export const ButtonControl = ({btnFunction, btnPosition}) => {
    return (
        <button onClick={() => btnFunction() } className={`btn-change ${btnPosition}`}></button>
    )
}
