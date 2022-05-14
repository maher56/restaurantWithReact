import React from 'react'

const Recipe = ({title , img , calories})=> {
    return (
        <div>
            <h1>{title}</h1>
            <p>{(calories - 0).toFixed(2)}</p>
            <img src={img} alt="food"/>
        </div>
    )
}

export default Recipe
