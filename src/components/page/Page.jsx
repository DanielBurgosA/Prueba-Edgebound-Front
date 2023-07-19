import React, { useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import PokeCard from '../cards/PokeCard';
import { PokemonContext } from '../../context/PokemonContext';
import PaginationComp from '../paginationComp/PaginationComp';

export default function Page() {
  const {pokemons} = useContext(PokemonContext)
  const rows = Math.ceil(pokemons.length / 3);

  return (
    <div className="container">
      {[...Array(rows)].map((_, rowIndex) => (
        <Row key={rowIndex}>
          {[...Array(3)].map((_, colIndex) => {
            const pokemonIndex = rowIndex * 3 + colIndex;
            const pokemon = pokemons[pokemonIndex];
            return (
              (pokemon&&pokemon.id<9000) ?
              <Col key={colIndex} md={4}>
                <PokeCard pokemon={pokemon} key={pokemon.id} />
              </Col> :
              null
            );
          })}
        </Row>
      ))}
      <PaginationComp/>
    </div>
    
  );
}