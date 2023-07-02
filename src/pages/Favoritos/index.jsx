import { Banner, Card, Titulo } from "components";
import styles from "./Favoritos.module.css";
import React from "react";

function Favoritos() {
  return (
    <>
      <Banner imagem="favoritos" />
      <Titulo>
        <h1>Meus Favoritos</h1>
      </Titulo>
      <section className={styles.container}>
        <Card id="i1" capa="asda" titulo="asdas" />
      </section>
    </>
  );
}

export default Favoritos;
