import React from 'react';

const Pokemon = ({ id, name, image, types, hp, attack, defense, SpAttack, SpDefense, speed }) => {
  return (
    <div className="pokemon-card">
        <div className="pokemon-image-container">
            <img src={image} alt={name} className="pokemon-image" />
        </div>
        <div className="pokemon-info">
            <p id="col1">[{id}] {name}</p>
            <div className="types-container">
            {types && types.length > 0 && types.map((type, index) => (
            <p key={index} className={type.toLowerCase()}>{type}</p>
            ))}
            </div>
            <div class="container">
            <div class='row1'>
            <p>HP: {hp}</p>
            <p>Attack: {attack}</p>
            <p>Defense: {defense}</p>
            </div>
            <div class='row2'>
            <p>Sp. Attack: {SpAttack}</p>
            <p>Sp. Defense: {SpDefense}</p>
            <p>Speed: {speed}</p>
            </div>
        </div>
        </div>
    </div>
);
}

export default Pokemon;