// import Hooks
import { useContext } from "react";
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
// sub-Component
import { Component } from "../../components/CardsNFT/ComponetsCards/Component";

import { SectionCreateSellNFT } from "../../components/SectionCreateSellNFT/SectionCreateSellNFT";
// sub-component
import { Cards } from "../../components/SectionCreateSellNFT/Cards/Cards";

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

  // context
  const { dataCardU, loading } = useContext(CartContext);

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
          <SectionLogos>
            {logos.map((logo, i) => {
              return (
                <figure key={`logo${i}`}>
                  <img src={logo} alt={`logo${i}`} />
                </figure>
              );
            })}
          </SectionLogos>

          {/*        section        */}
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

          {/*        section         */}
          {titles.map((item) => {
            return (
              <ContainerCardsNFT key={item}>
                <div className="titleBtn_flex">
                  <h3>{item}</h3>
                  <button>View More</button>
                </div>

                <div className="containerCards_flex">
                  {dataCardU.slice(1, 4).map((dataCard) => {
                    return (
                      <CardsNFT key={dataCard.idC}>
                        {dataCard.count > 1 ? (
                          <span className="spanCount">{dataCard.count}</span>
                        ) : null}
                        <img
                          className="pictureNFT"
                          src={dataCard.imgC}
                          alt="imagen de una card"
                        />
                        <p className="textNFT">{dataCard.titleC}</p>

                        <Link to={`/CardsNFT/${dataCard.idC}`}>
                          <button>BSC</button>
                        </Link>

                        {loading ? (
                          <h2>Loading...</h2>
                        ) : (
                          <Component
                            creator={dataCard}
                            price={dataCard.price2}
                          />
                        )}
                      </CardsNFT>
                    );
                  })}
                </div>
              </ContainerCardsNFT>
            );
          })}

          {/*    section        */}
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
              {dataCardU.slice(5, 11).map((dataCard) => {
                return (
                  <CardsNFT key={`MultipleOptions ${dataCard.idC}`}>
                    {dataCard.count > 1 ? (
                      <span className="spanCount">{dataCard.count}</span>
                    ) : null}
                    <img
                      className="pictureNFT"
                      src={dataCard.imgC}
                      alt="imagen de una card"
                    />
                    <p className="textNFT">{dataCard.titleC}</p>

                    <Link to={`/CardsNFT/${dataCard.idC}`}>
                      <button>BSC</button>
                    </Link>

                    {loading ? (
                      <h2>Loading...</h2>
                    ) : (
                      <Component
                        key={dataCard.passwordU}
                        creator={dataCard}
                        price={dataCard.price2}
                      />
                    )}
                  </CardsNFT>
                );
              })}
            </div>
            <button className="viewMore">View More</button>
          </ContainerMultipleOptionsCardsNFT>
          {/*    section        */}
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
