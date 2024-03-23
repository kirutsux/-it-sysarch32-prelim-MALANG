import React from 'react';
import Pokemon from './Pokemon';

function Pokedex({ pokemonData, language, onLanguageChange }) {

  return (
    <div className="pokedex-container">
      <div className="language-buttons">
          <button className="btnDesign" onClick={() => onLanguageChange('english')}>English</button>
          <button className="btnDesign" onClick={() => onLanguageChange('japanese')}>Japanese</button>
          <button className="btnDesign" onClick={() => onLanguageChange('chinese')}>Chinese</button>
          <button className="btnDesign" onClick={() => onLanguageChange('french')}>French</button>
      </div>
      <div className="pokemon-list">
      {pokemonData.map((pokemon, index) => (
          <Pokemon
            key={index}
            id={pokemon.id}
            name={pokemon.name[language]}
            image={pokemon.image}
            types={pokemon.type}
            hp={pokemon.base.HP}
            attack={pokemon.base.Attack}
            defense={pokemon.base.Defense}
            SpAttack={pokemon.base["Sp. Attack"]}
            SpDefense={pokemon.base["Sp. Defense"]}
            speed={pokemon.base.Speed}
          />
        ))}
      </div>
    </div>
  );
}

export default Pokedex;
