import React, { useContext } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { PokemonContext } from '../../context/PokemonContext';
import style from './Detail.module.css'

export default function Detail() {
  const { pokemonSelected } = useContext(PokemonContext);

  const imageSrc = pokemonSelected?.sprites?.other?.home?.front_default;
  const name = pokemonSelected?.name;
  const height = pokemonSelected?.height;
  const id = pokemonSelected?.id;
  const hp = pokemonSelected?.stats?.[0].base_stat;
  const attack = pokemonSelected?.stats?.[1].base_stat;
  const defense = pokemonSelected?.stats?.[2].base_stat;
  const specialAttack = pokemonSelected?.stats?.[3].base_stat;
  const specialDefense = pokemonSelected?.stats?.[4].base_stat;
  const speed = pokemonSelected?.stats?.[5].base_stat;
  const type = pokemonSelected?.types?.[0]?.type?.name;

  return (
    <Card className={style.card}>
      <Card.ImgOverlay className="d-flex flex-column">
        <Row>
          <Col xs={6}>
            <div className={style.cardTitleContainer}>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle1}>{`height: ${height}`}</p>
              </div>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle1}>{`hp: ${hp}`}</p>
              </div>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle1}>{`attack: ${attack}`}</p>
              </div>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle1}>{`defense: ${defense}`}</p>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className={style.cardTitleContainer}>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle2}>{`special attack: ${specialAttack}`}</p>
              </div>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle2}>{`special defense: ${specialDefense}`}</p>
              </div>
              <div className={style.cardTitleWrapper}>
                <p className={style.cardTitle2}>{`speed: ${speed}`}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Card.ImgOverlay>
      <Card.Img variant="top" src={imageSrc} className={style.cardImage} alt={name}/>
      {type&&<Card.Img variant= "top" src={require(`../../images/Backgrounds/${type}.jpg`)} alt="Background" className={style.cardBackground} />}
      <Row >
        <div className={"text-center mt-3 "+style.name}>
          <h4 className={style.cardTitle}>{`${id}. ${name}`}</h4>
        </div>
      </Row>
    </Card>
  );
}