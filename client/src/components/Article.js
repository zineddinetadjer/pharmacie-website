import React from "react";
import "../styles/article.css";
import photo from "../images/pexels-trang-doan-1092730.jpg";

const Article = () => {
  return (
    <div className="artcile">
      <section className="sect">
        <div className="image">
          <img src={photo} />
        </div>
        <div className="ombre"></div>
      </section>
      <section className="sect">
        <div className="image deux">
          <h1>Les Fibres : pourquoi sont-elles essentielles</h1>
          <p>
            Les fibres alimentaires ne sont pas dégirée par notre organisme. Les
            fibres ont un effait coupe-faim efficace et facilitent le
            transit.Mais, alors où trouver les fibres et quels sont leurs
            bienfaits ? Zoom sur les fibres.
            <br />
            Les fibres, qu-est ce que c'est?
          </p>
        </div>
        <div className="ombre two"></div>
      </section>
    </div>
  );
};
export default Article;
