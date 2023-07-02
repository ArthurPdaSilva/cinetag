import React from "react";
import styles from "./Card.module.css";
import { iconeFavoritar } from "./assets";

function Card({ id, titulo, capa }) {
  return (
    <div className={styles.container} id={id}>
      <img src={capa} alt={titulo} className={capa} />
      <h2>{titulo}</h2>
      <img
        src={iconeFavoritar}
        alt="Favoritar filme"
        className={styles.favoritar}
      />
    </div>
  );
}

export default Card;
