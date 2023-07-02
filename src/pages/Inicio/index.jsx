import React from "react";
import videos from "json/db.json";
import Template from "pages/template";
import styles from "./Inicio.module.css";

function Inicio() {
  return (
    <Template
      imageText="home"
      title="Um lugar para guardar seus videos e filmes!"
      videos={videos}
      styles={styles}
    />
  );
}

export default Inicio;
