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
      console.log(modelCard);
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
        {modelCard.map((model, j) => {
          return (
            <SectionDetail
              key={j + 3}
              // context={model.user.description}
              TokenID={model.id}
              ContractAddress={model.images.original.hash}
            />
          );
        })}
        <ContainerCardsNFT title={"Another NFTs"} />
      </section>
    </>
  );
}
