// import hooks
import { useState, useEffect } from "react";

// import styles
import "./CardsNFT.scss";

// import components
import { Component } from "./ComponetsCards/Component";

export function CardsNFT({ product }) {
  const [create, setCreate] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function apiCreator() {
      const response = await fetch("https://randomuser.me/api/");

      const data = await response.json();

      setCreate(data.results);
      setLoading(false);
    }

    apiCreator();
  }, []);

  return (
    <>
      <section className="cardsNFTs">
        <img
          className="pictureNFT"
          src={product.images.original.url}
          alt="imagen de una card"
        />
        <p className="textNFT">{product.title}</p>
        <button>BSC</button>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          create.map((item) => {
            let number = Math.floor(Math.random() * 400);
            return (
              <Component key={item.login.password} creator={item} price={number} />
            );
          })
        )}
      </section>
    </>
  );
}
