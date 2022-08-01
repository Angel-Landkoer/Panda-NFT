/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
//import Hooks
// import { useState, useEffect } from "react";

// import styles
import "./Main.scss";

// import components
import { ContainerCardsNFT } from "./ContainerCardsNFT/ContainerCardsNFT";
import { SectionLogos } from "./SectionLogos/SectionLogos";
import { SectionCreateSellNFT } from "./SectionCreateSellNFT/SectionCreateSellNFT";
import { CardDetailsContainer } from "./CardDetailsContainer/CardDetailsContainer";
// import { SectionCardDetail } from "./CardDetailsContainer/SectionCardDetail/SectionCardDetail";

export function Main() {
  return (
    <main>
      <section className="main">
        {/* <SectionLogos />
        <SectionCreateSellNFT />
        <ContainerCardsNFT title={"Live Auctions"} /> */}
        <CardDetailsContainer />
      </section>
    </main>
  );
}
