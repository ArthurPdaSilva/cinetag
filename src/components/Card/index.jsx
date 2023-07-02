import React from "react";
import styles from "./Card.module.css";
import { iconeDesfavortiar, iconeFavoritar } from "./assets";
import { useFavoritoContext } from "contexts/Favoritos";

function Card({ id, titulo, capa }) {
  const { favorito, adicionarFavorito } = useFavoritoContext();
  const ehFavorito = favorito.some((fav) => fav.id === id);
  const icone = ehFavorito ? iconeDesfavortiar : iconeFavoritar;

  return (
    <div className={styles.container} id={id}>
      <img src={capa} alt={titulo} className={capa} />
      <h2>{titulo}</h2>
      <img
        src={icone}
        alt="Favoritar filme"
        className={styles.favoritar}
        onClick={() => {
          adicionarFavorito({ id, titulo, capa });
        }}
      />
    </div>
  );
}

export default Card;
