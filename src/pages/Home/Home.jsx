// import Hooks

// import components
// header
import { CardNFT } from "../../components/CardNFT/CardNFT";
import { DiscoverH } from "../../components/DiscoverH/DiscoverH";

// main
import { ContainerCardsNFT } from "../../components/ContainerCardsNFT/ContainerCardsNFT";
import { SectionCreateSellNFT } from "../../components/SectionCreateSellNFT/SectionCreateSellNFT";
import { SectionLogos } from "../../components/SectionLogos/SectionLogos";
import { ContainerMultipleOptionsCardsNFT } from "../../components/ContainerMultipleOptionsCardsNFT/ContainerMultipleOptionsCardsNFT";
import { SectionCreateYourOwnNFT } from "../../components/SectionCreateYourOwnNFT/SectionCreateYourOwnNFT";

// import styles
import "./Home.scss";

export function Home() {
  return (
    <>
      <header>
        <section className="header">
          <DiscoverH />
          <CardNFT
            description={"Heat Wave No GIF by Loof and Timmy"}
            image={
              "https://media3.giphy.com/media/TeRP089ltwj4Ib61aj/giphy.gif?cid=d13c8921t1eayoo1h5fbxjoroy9mttl8qt7e0cbvu7sqiff5&rid=giphy.gif&ct=g"
            }
          />
        </section>
      </header>
      <main>
        <section className="main">
          <SectionLogos />
          <SectionCreateSellNFT />
          <ContainerCardsNFT title={"Live Auctions"} />
          <ContainerCardsNFT title={"Featured Artist"} />
          <ContainerMultipleOptionsCardsNFT title={"Hot NFTs"} />
          {/* <ContainerCardsNFT title={"Hot NFTs"} /> */}
          <SectionCreateYourOwnNFT />
          {/* <CardDetailsContainer /> */}
        </section>
      </main>
    </>
  );
}
