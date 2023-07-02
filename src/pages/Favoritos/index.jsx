import styles from "./Favoritos.module.css";
import React from "react";
import Template from "pages/template";

function Favoritos() {
  return (
    <Template
      imageText="favoritos"
      title="Meus Favoritos"
      videos={null}
      styles={styles}
    />
  );
}

export default Favoritos;
