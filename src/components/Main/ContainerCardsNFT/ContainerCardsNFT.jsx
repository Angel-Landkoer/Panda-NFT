// import hooks
import { useState, useEffect } from "react";

// import styles
import "./ContainerCardsNFT.scss";

// import components
import { CardsNFT } from "./CardsNFT/CardsNFT";

export function ContainerCardsNFT({ title }) {
  const [newNFT, setNewNFT] = useState([]);

  useEffect(() => {
    async function apiNFTs() {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb&limit=100&rating=g"
      );
      const data = await response.json();

      setNewNFT(data.data);
    }

    apiNFTs();
  }, []);

  return (
    <>
      <section className="containerCards">
        <div className="titleBtn_flex">
          <h3>{title}</h3>
          <button>View More</button>
        </div>
        <div className="containerCards_flex">
          {newNFT.map((item) => {
            return <CardsNFT key={item.id} product={item} />;
          })}
        </div>
      </section>
    </>
  );
}
