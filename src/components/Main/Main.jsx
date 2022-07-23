/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
//import Hooks
import { useState, useEffect } from "react";

// import styles
import "./Main.scss";

// import components
import { CardsNFT } from "./CardsNFT/CardsNFT";
import { SectionLogos } from "./SectionLogos/SectionLogos";
import { SectionCreateSellNFT } from "./SectionCreateSellNFT/SectionCreateSellNFT";

export function Main() {
  return (
    <main>
      <section className="main">
        <SectionLogos />
        <SectionCreateSellNFT />
      </section>
    </main>
  );
}
