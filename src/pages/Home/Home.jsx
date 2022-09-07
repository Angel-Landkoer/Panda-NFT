// import Hooks
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

// import components
import { CartContext } from "../../Context/CartContext";

// header
import { CardNFT } from "../../components/CardNFT/CardNFT";
import { DiscoverH } from "../../components/DiscoverH/DiscoverH";

// main
import { SectionLogos } from "../../components/SectionLogos/SectionLogos";
import { ContainerMultipleOptionsCardsNFT } from "../../components/ContainerMultipleOptionsCardsNFT/ContainerMultipleOptionsCardsNFT";
import { SectionCreateYourOwnNFT } from "../../components/SectionCreateYourOwnNFT/SectionCreateYourOwnNFT";
import { ContainerCardsNFT } from "../../components/ContainerCardsNFT/ContainerCardsNFT";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";

import { SectionCreateSellNFT } from "../../components/SectionCreateSellNFT/SectionCreateSellNFT";

// import styles
import "./Home.scss";

export function Home() {
  // del componente - sectionLogos
  const logos = [
    "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FItem.png?alt=media&token=0badf088-0e66-4f1b-bee1-16bcc211c8c0",
    "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FItem%20(1).png?alt=media&token=324ae486-6501-46cb-967d-dda910025480",
    "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FItem%20(2).png?alt=media&token=7b4ce90f-1918-4088-b99b-88774bc0145e",
    "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FCoinbase%20New%202021%201.png?alt=media&token=3d72be1a-3491-40f6-b551-e4e68f97e895",
    "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FTokocrypto%201.png?alt=media&token=8ff7f355-8ff6-4ef7-8aa4-44ffc971d043",
  ];

  // del componente - SectionCreateSellNFT
  const cardsContext = [
    {
      title: "Set up your wallet",
      paragraph:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FIconPlaceholder.png?alt=media&token=d310a53c-06d0-42be-8155-206216a99c01",
    },
    {
      title: "Add your NFTs",
      paragraph:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FIconPlaceholder.png?alt=media&token=d310a53c-06d0-42be-8155-206216a99c01",
    },
    {
      title: "List them for sale",
      paragraph:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: "https://firebasestorage.googleapis.com/v0/b/panda-nft-44791.appspot.com/o/picturesPanda%2FIconPlaceholder.png?alt=media&token=d310a53c-06d0-42be-8155-206216a99c01",
    },
  ];

  // del componente ContainercardsNFT

  // const titles = ["Live Auctions", "Featured Artist"];

  const titles = {
    title1: "Live Auctions",
    title2: "Featured Artist",
  };
  const { title1, title2 } = titles;

  // del componente - sectionCreateYourOwnNFT
  const sectionCreateYourOwnNFT = [
    {
      title: "Create Your Own NFT!",
      paragraph:
        "We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!",
      btn: "Join Comunity Now",
    },
  ];

  // context
  const { dataCardU, loading } = useContext(CartContext);

  // State ContainerCardsNFT
  const [moreOrLess, setMoreOrLess] = useState(4);
  const [moreOrLessToggle, setMoreOrLessToggle] = useState(false);

  const [moreOrLess2, setMoreOrLess2] = useState(15);
  const [moreOrLessToggle2, setMoreOrLessToggle2] = useState(false);

  // State ContainerMultipleOptionsCardsNFT
  const [moreOrLess3, setMoreOrLess3] = useState(11);
  const [moreOrLessToggle3, setMoreOrLessToggle3] = useState(false);

  const handleMoreContainerCards1 = () => {
    setMoreOrLessToggle(!moreOrLessToggle);
    moreOrLessToggle ? setMoreOrLess(4) : setMoreOrLess(7);
  };

  const handleMoreContainerCards2 = () => {
    setMoreOrLessToggle2(!moreOrLessToggle2);
    moreOrLessToggle2 ? setMoreOrLess2(15) : setMoreOrLess2(18);
  };

  // ContainerMultipleOptionsCardsNFT
  const handleMoreContainerMultiple = () => {
    setMoreOrLessToggle3(!moreOrLessToggle3);
    moreOrLessToggle3 ? setMoreOrLess3(11) : setMoreOrLess3(18);
  };

  return (
    <>
      <header>
        <section className="headerHome">
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
        {/*       section        */}
        <section className="mainHome">
          <SectionLogos logos={logos} />

          {/*        section        */}
          <SectionCreateSellNFT
            cardsContext={cardsContext}
            title={"Create and sell your NFTs"}
          />

          {/*        section         */}

          <ContainerCardsNFT>
            <section className="titleBtn_flex">
              <h3>{title1}</h3>
              <button onClick={handleMoreContainerCards1}>
                {moreOrLessToggle ? "View Less" : "View More"}
              </button>
            </section>
            <section className="containerCards_flex">
              {dataCardU.slice(1, moreOrLess).map((dataCard) => {
                return (
                  <CardsNFT key={`Home-${dataCard.idC}`} dataCard={dataCard}>
                    <Link to={`/CardsNFT/${dataCard.idC}`}>
                      <button>BSC</button>
                    </Link>
                  </CardsNFT>
                );
              })}
            </section>
          </ContainerCardsNFT>

          <ContainerCardsNFT>
            <section className="titleBtn_flex">
              <h3>{title2}</h3>
              <button onClick={handleMoreContainerCards2}>
                {moreOrLessToggle2 ? "View Less" : "View More"}
              </button>
            </section>
            <section className="containerCards_flex">
              {dataCardU.slice(12, moreOrLess2).map((dataCard) => {
                return (
                  <CardsNFT
                    key={`Home-${dataCard.passwordU}}`}
                    dataCard={dataCard}
                  >
                    <Link to={`/CardsNFT/${dataCard.idC}`}>
                      <button>BSC</button>
                    </Link>
                  </CardsNFT>
                );
              })}
            </section>
          </ContainerCardsNFT>

          {/*    section        */}
          <ContainerMultipleOptionsCardsNFT>
            <section className="titleBtn_flex">
              <h3>Hot NFTs</h3>
              <div className="optionsBtn">
                <button className="btnMusic">Music</button>
                <button className="btnArt">Art</button>
                <button className="btnSport">Sport</button>
                <button className="btnVirtual">Virtual</button>
                <button className="btnVideos">Videos</button>
                <button className="btnMore">More</button>
              </div>
            </section>
            <section className="containerCards_flex">
              {dataCardU.slice(5, moreOrLess3).map((dataCard) => {
                return (
                  <CardsNFT
                    key={`MultipleOptions-${dataCard.idC}`}
                    dataCard={dataCard}
                  >
                    <Link to={`/CardsNFT/${dataCard.idC}`}>
                      <button>BSC</button>
                    </Link>
                  </CardsNFT>
                );
              })}
            </section>
            <button className="viewMore" onClick={handleMoreContainerMultiple}>
              {moreOrLessToggle3 ? "View Less" : "View More"}
            </button>
          </ContainerMultipleOptionsCardsNFT>

          {/*    section        */}
          <SectionCreateYourOwnNFT
            sectionCreateYourOwnNFT={sectionCreateYourOwnNFT}
          />
        </section>
      </main>
    </>
  );
}
