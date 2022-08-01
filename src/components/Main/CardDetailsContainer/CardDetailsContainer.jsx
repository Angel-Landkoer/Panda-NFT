// import hooks
import { useState, useEffect } from "react";
import { ContainerCardsNFT } from "../ContainerCardsNFT/ContainerCardsNFT";

// import styles
import "./CardDetailsContainer.scss";

// import componets
import { SectionCardDetail } from "./SectionCardDetail/SectionCardDetail";
import { SectionDetail } from "./SectionDetail/SectionDetail";

export function CardDetailsContainer() {
  let price1;
  let price2;

  const [modelCard, setModelCard] = useState([]);

  useEffect(() => {
    async function card() {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb&limit=1&rating=g"
      );
      const data = await response.json();
      setModelCard(data.data);
    }

    card();
  }, []);

  return (
    <>
      <section className="cardDetailsContainer">
        {modelCard.map((item, i) => {
          price1 = Math.floor(Math.random() * 100);
          price2 = Math.floor(Math.random() * 100);

          return (
            <SectionCardDetail
              key={i}
              detail={item}
              priceFirst={price1}
              priceSecond={price2}
            />
          );
        })}
        {modelCard.map((item, i) => {
          return (
            <SectionDetail
              key={i + 3}
              description={item.user.description}
              TokenID={item.id}
              ContractAddress={item.images.original.hash}
            />
          );
        })}
        <ContainerCardsNFT title={"Another NFTs"} />
      </section>
    </>
  );
}
