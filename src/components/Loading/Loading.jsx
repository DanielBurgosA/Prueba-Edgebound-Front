import React from 'react';
import style from './Loading.module.css';

const Loading = () => {
  return (
    <div className={style.centeronpage }>
        <img src={require("../../images/pokemon-symbol-logo-png-31.png")} alt="Pokébola" className={style.pokebola} />
    </div>
  );
};

export default Loading;