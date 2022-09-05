// import styles
import "./SectionCreateSellNFT.scss";

import { Cards } from "./Cards/Cards";

export function SectionCreateSellNFT({ cardsContext, title }) {
  return (
    <>
      <section className="createSell">
        <h2>{title}</h2>
        <div className="containeCards">
          {cardsContext.map((context, i) => {
            return <Cards key={`CardsStatic${i}`} context={context} />;
          })}
        </div>
      </section>
    </>
  );
}
