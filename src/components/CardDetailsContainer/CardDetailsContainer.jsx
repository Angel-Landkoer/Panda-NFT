// import hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import styles
import "./CardDetailsContainer.scss";

// import componets
import { ContainerCardsNFT } from "../ContainerCardsNFT/ContainerCardsNFT";
import { SectionCardDetail } from "./SectionCardDetail/SectionCardDetail";
import { SectionDetail } from "./SectionDetail/SectionDetail";

export function CardDetailsContainer() {
  let price1;
  let price2;

  // API
  const [modelCard, setModelCard] = useState([]);

  // filter
  const [itemCard, setItemCard] = useState([]);

  useEffect(() => {
    async function card() {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb&limit=100&rating=g"
      );
      const data = await response.json();
      setModelCard(data.data);
    }

    card();
  }, []);

  const { idCard } = useParams();


  useEffect(() => {
    const found = modelCard.filter(
      (card) => card.images.original.hash === idCard
    );
    setItemCard(found);
  }, [idCard, modelCard]);

  return (
    <>
      <section className="cardDetailsContainer">
        {itemCard.map((item, i) => {
          price1 = Math.floor(Math.random() * 100);
          price2 = Math.floor(Math.random() * 100);

          return (
            <SectionCardDetail
              key={i}
              data={item}
              priceFirst={price1}
              priceSecond={price2}
            />
          );
        })}

        {itemCard.map((item, i) => {
          return <SectionDetail key={i + 3} data={item} />;
        })}
        <ContainerCardsNFT title={"Another NFTs"} />
      </section>
    </>
  );
}
