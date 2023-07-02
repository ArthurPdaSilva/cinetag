import { Banner, Card, Titulo } from "components";
import { useFavoritoContext } from "contexts/Favoritos";
import React from "react";

function Template({ imageText, title, videos, styles }) {
  const { favorito } = useFavoritoContext();
  console.log(favorito);
  return (
    <>
      <Banner imagem={imageText} />
      <Titulo>
        <h1>{title}</h1>
      </Titulo>
      <section className={styles.container}>
        {videos
          ? videos.map((video) => {
              return <Card {...video} key={video.id} />;
            })
          : favorito.map((fav) => {
              return <Card {...fav} key={fav.id} />;
            })}
      </section>
    </>
  );
}

export default Template;
