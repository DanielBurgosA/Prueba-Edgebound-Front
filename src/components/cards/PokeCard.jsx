import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { PokemonContext } from '../../context/PokemonContext';
import style from './PokeCards.module.css'

export default function PokeCard({ pokemon }) {
  const { setIDPokemonSelected, idPokemonSelected } = useContext(PokemonContext);
  const { id, name, sprites, types } = pokemon;
  const image = sprites.other.dream_world.front_default?sprites.other.dream_world.front_default:sprites.other.home.front_default;

  const formattedTypes = types.map(( type) => {
    return type.type.name ;
  });

  const handleClick = () => {
    setIDPokemonSelected(id);
  };

  return (
    <Card className={id!==idPokemonSelected?style.pokeCard:`${style.pokeCard} ${style.selected}` } onClick={handleClick} style={{margin:'10px'}}>
      <Card.Body>
      <div className={style.pokeCardTitle}>
        <Card.Title className="d-flex justify-content-between" style={{fontSize: "16px"}} >
          <span>{id}</span>
          <span>{name}</span>
        </Card.Title>
      </div>
        <Card.Img variant="top" src={image} style={{ width: '100px', height: '100px', margin: '5px' }} />
        <div className={style.types}>
          {formattedTypes.map((type, index) => (
            <div key={index} className={`${style.cardTextContainer} ${style[type]}`}>
              <p className={style.cardText}>{type}</p>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}