// import hooks
import { useState, useEffect } from "react";

// import styles
import "./CardsNFT.scss";

// import components
import { Component } from "./ComponetsCards/Component";

export function CardsNFT({ product }) {
  const [create, setCreate] = useState([]);
  const [loading, setLoading] = useState(true);

  const [limit, setlimit] = useState(0);

  const activeBtnLess = () => {
    if (limit <= 0) {
      setlimit(0);
    } else {
      setlimit(limit - 1);
    }
  };

  const activeBtnMore = () => {
    if (limit >= 1) {
      setlimit(1);
    } else if (limit === 2) {
      setlimit(1);
    } else {
      setlimit(limit + 1);
    }
  };

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
        <div className="stocks">
          <button className="less" onClick={activeBtnMore}>
            +
          </button>
          <span>{limit}</span>
          <button className="more" onClick={activeBtnLess}>
            -
          </button>
        </div>
        <button >BSC</button>
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          create.map((item) => {
            let number = Math.floor(Math.random() * 400);
            return (
              <Component
                key={item.login.password}
                creator={item}
                price={number}
              />
            );
          })
        )}
      </section>
    </>
  );
}
