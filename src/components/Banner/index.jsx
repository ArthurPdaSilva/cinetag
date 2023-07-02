import React, { useEffect, useState } from "react";
import styles from "./Banner.module.css";
import { favoritos, home, player } from "./assets";

function Banner({ imagem }) {
  const [img, setImg] = useState("");

  useEffect(() => {
    const imgs = [favoritos, home, player];

    setImg(
      imgs.find((nomeImagem) => {
        return nomeImagem.includes(imagem);
      })
    );
  }, [imagem]);

  return (
    <div
      className={styles.capa}
      style={{ backgroundImage: `url('${img}')` }}
    ></div>
  );
}

export default Banner;
