import React, { useState, useEffect } from 'react';

const Item = ({ name }) => <li style={{ fontWeight: 700 }}>{name}</li>;

const Pokemon = () => {
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(res => res.json())
      .then(data => setPokemons(data.results));
  }, []);

  return (
    <ol>
      {pokemons.map(({ name })=> (
        <Item name={name} />
      ))}
    </ol>
  );
};

export default Pokemon;