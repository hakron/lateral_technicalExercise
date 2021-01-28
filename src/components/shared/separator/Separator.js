import React from 'react'
import './Separator.css'

export const Separator = ({isSlim}) => {

    const selectedStyle = isSlim ? 'slim' : 'thicc'
    return (
        <hr className={`separator ${selectedStyle}`} ></hr>
    )
}
