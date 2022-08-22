// import Hooks
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import components
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
// sub-component
import { Cards } from "../../components/SectionCreateSellNFT/Cards/Cards";

// import styles
import "./Home.scss";

export function Home() {
  // del componente - sectionLogos
  const logos = [
    "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/Item.png?raw=true",
    "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/Item%20(1).png?raw=true",
    "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/Item%20(2).png?raw=true",
    "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/Item%20(3).png?raw=true",
    "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/Tokocrypto%201.png?raw=true",
  ];

  // del componente - SectionCreateSellNFT
  const cardsContext = [
    {
      title: "Set up your wallet",
      paragraph:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/IconPlaceholder.png?raw=true",
    },
    {
      title: "Add your NFTs",
      paragraph:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/IconPlaceholder.png?raw=true",
    },
    {
      title: "List them for sale",
      paragraph:
        "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner.",
      img: "https://github.com/Angel-Landkoer/The-pictures/blob/master/reac-Pandas_NFT/IconPlaceholder.png?raw=true",
    },
  ];

  // del componente ContainercardsNFT

  const titles = ["Live Auctions", "Featured Artist"];

  // del componente - sectionCreateYourOwnNFT
  const sectionCreateYourOwnNFT = [
    {
      title: "Create Your Own NFT!",
      paragraph:
        "We have a large scale group to support each other in this game, Join us to get the news as soon as possible and follow our latest announcements!",
      btn: "Join Comunity Now",
    },
  ];

  // useStates
  const [newNFT, setNewNFT] = useState([]);
  // const [separate, setSeparate] = useState([]);

  // useEffect
  useEffect(() => {
    async function apiNFTs() {
      const cardCollection = collection(db, "data");
      const cardSnapshot = await getDocs(cardCollection);
      let cardsList = cardSnapshot.docs.map((doc) => {
        let cards = doc.data();
        cards.id = doc.id;

        return cards;
      });
      return cardsList;
    }

    apiNFTs().then((res) => {
      setNewNFT(res);
    });
  }, []);

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
        <section className="mainHome">
          <SectionLogos>
            {logos.map((logo, i) => {
              return (
                <figure key={`logo${i}`}>
                  <img src={logo} alt={`logo${i}`} />
                </figure>
              );
            })}
          </SectionLogos>

          <SectionCreateSellNFT>
            <h2>Create and sell your NFTs</h2>
            <div className="containeCards">
              {cardsContext.map((context, i) => {
                return (
                  <Cards key={`CardsStatic${i}`}>
                    <figure>
                      <img src={context.img} alt="img" />
                    </figure>
                    <h3>{context.title}</h3>
                    <p>{context.paragraph}</p>
                  </Cards>
                );
              })}
            </div>
          </SectionCreateSellNFT>

          {titles.map((item) => {
            return (
              <ContainerCardsNFT key={item}>
                <div className="titleBtn_flex">
                  <h3>{item}</h3>
                  <button>View More</button>
                </div>

                <div className="containerCards_flex">
                  {newNFT.slice(1, 4).map((dataCard) => {
                    return <CardsNFT key={dataCard.id} product={dataCard} />;
                  })}
                </div>
              </ContainerCardsNFT>
            );
          })}

          <ContainerMultipleOptionsCardsNFT>
            <div className="titleBtn_flex">
              <h3>Hot NFTs</h3>
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
              {newNFT.slice(5, 11).map((dataCard) => {
                return <CardsNFT key={dataCard.id} product={dataCard} />;
              })}
            </div>
            <button className="viewMore">View More</button>
          </ContainerMultipleOptionsCardsNFT>

          <SectionCreateYourOwnNFT>
            {sectionCreateYourOwnNFT.map((item, i) => {
              return (
                <section
                  key={`yourOwn${i}`}
                  className="sectionCreateYourOwnNFT"
                >
                  <h3>{item.title}</h3>
                  <p>{item.paragraph}</p>
                  <button>{item.btn}</button>
                </section>
              );
            })}
          </SectionCreateYourOwnNFT>
        </section>
      </main>
    </>
  );
}
