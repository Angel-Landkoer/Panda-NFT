// import styles
import "./ContainerMultipleOptionsCardsNFT.scss";

// import hooks
import { useState, useEffect } from "react";

// import components
import { CardsNFT } from "../CardsNFT/CardsNFT";

export function ContainerMultipleOptionsCardsNFT({ title }) {
  const [newNFT, setNewNFT] = useState([]);

  useEffect(() => {
    async function apiNFTs() {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb&limit=6&rating=g"
      );
      const data = await response.json();

      setNewNFT(data.data);
    }

    apiNFTs();
  }, []);

  return (
    <>
      <section className="containerMultipleOptionsCardsNFT">
        <div className="titleBtn_flex">
          <h3>{title}</h3>
          <div className="optionsBtn">
            <button className="btnMusic">Music</button>
            <button className="btnArt">Art</button>
            <button className="btnSport">Sport</button>
            <button className="btnVirtual">Virtual</button>
            <button className="btnVideos">Videos</button>
            <button className="btnMore">More</button>
          </div>
        </div>
        <div className="containerCards_flex">
          {newNFT.map((item) => {
            return <CardsNFT key={item.id} product={item} />;
          })}
        </div>
        <button className="viewMore">View More</button>
      </section>
    </>
  );
}
