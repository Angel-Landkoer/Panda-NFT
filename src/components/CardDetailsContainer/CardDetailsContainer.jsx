// import hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import styles
import "./CardDetailsContainer.scss";

// import componets
import { ContainerCardsNFT } from "../ContainerCardsNFT/ContainerCardsNFT";
import { SectionCardDetail } from "./SectionCardDetail/SectionCardDetail";
import { SectionDetail } from "./SectionDetail/SectionDetail";
// import { CartContext } from "../../Context/CartContext";

export function CardDetailsContainer() {

  let price1 = Math.floor(Math.random() * 100);
  let price2 = Math.floor(Math.random() * 100);

  const { idCard } = useParams();

  // filter
  const [itemCard, setItemCard] = useState(null);

  useEffect(() => {
    async function card() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/${idCard}?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb`
      );
      const { data } = await response.json();

      setItemCard(data);
    }

    card();
  }, [idCard]);

  return (
    <>
      <section className="cardDetailsContainer">
        {itemCard ? (
          <SectionCardDetail
            data={itemCard}
            priceFirst={price1}
            priceSecond={price2}
          />
        ) : (
          <h4>Cargando detalles...</h4>
        )}
        {itemCard ? (
          <SectionDetail data={itemCard} />
        ) : (
          <h4>Cargando otros detalles...</h4>
        )}

        <ContainerCardsNFT title={"Another NFTs"} />
      </section>
    </>
  );
}
