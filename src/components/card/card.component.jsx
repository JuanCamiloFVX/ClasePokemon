import React from 'react';

import './card.styles.css';

export const Card = props =>(
    <div classname = "card-container">
        <a href={`https://www.pokemon.com/us/pokedex/${props.pokemon.name}`} target="_blank" rel="noreferrer">
            <img alt="pokemon" src={`https://img.pokemondb.net/artwork/${props.pokemon.name}.jpg`}/>
            <h2>{props.pokemon.name}</h2>
        </a>
    </div>
);
