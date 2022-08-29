// import hooks
import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import styles
import "./Details.scss";

// import components
import { CartContext } from "../../Context/CartContext";
import { ContainerCardsNFT } from "../../components/ContainerCardsNFT/ContainerCardsNFT";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";
// sub-component
import { Component } from "../../components/CardsNFT/ComponetsCards/Component";

import { CardDetailsContainer } from "../../components/CardDetailsContainer/CardDetailsContainer";
// sub-componentes
import { SectionCardDetail } from "../../components/CardDetailsContainer/SectionCardDetail/SectionCardDetail";
import { SectionDetail } from "../../components/CardDetailsContainer/SectionDetail/SectionDetail";

export function Details() {
  const { dataCardU, loading } = useContext(CartContext);

  const { idCard, idCategory } = useParams();

  // filter
  const [itemCard1, setItemCard1] = useState(null);
  const [itemCards2, setItemCard2] = useState(null);

  useEffect(() => {
    // cards-ID  firebase

    async function cardID1() {
      const docRef = doc(db, "DataCardU", idCard);
      const docSnapshot = await getDoc(docRef);
      let docData = docSnapshot.data();
      docData.id = docSnapshot.id;
      return docData;
    }

    async function cardID2() {
      const docRef = doc(db, "DataCardU", idCategory);
      const docSnapshot = await getDoc(docRef);
      let docData = docSnapshot.data();
      docData.id = docSnapshot.id;
      return docData;
    }
    cardID1().then((res) => setItemCard1(res));
    cardID2().then((res) => setItemCard2(res));
  }, [idCard, idCategory]);

  console.log("SectionDetails");

  return (
    <>
      <main>
        <section className="mainDatails">
          <CardDetailsContainer>
            {itemCard1 ? (
              <>
                <SectionCardDetail data={itemCard1} />
                <SectionDetail data={itemCard1} />
              </>
            ) : itemCards2 ? (
              <>
                <SectionCardDetail data={itemCards2} />
                <SectionDetail data={itemCards2} />
              </>
            ) : (
              <h4>Cargando detalles...</h4>
            )}

            {/* {itemCard1 ?? itemCards2 ? (
              <SectionCardDetail data={itemCard1 ?? itemCards2} />
            ) : (
              <h4>Cargando detalles...</h4>
            )}

            {itemCard1 ?? itemCards2 ? (
              <SectionDetail data={itemCard1 ?? itemCards2} />
            ) : (
              <h4>Cargando otros detalles...</h4>
            )} */}

            <ContainerCardsNFT>
              <div className="titleBtn_flex">
                <h3>Another NFTs</h3>
                <button>View More</button>
              </div>

              <div className="containerCards_flex">
                {dataCardU.slice(13, 16).map((dataCard) => {
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
                        <Component creator={dataCard} price={dataCard.price2} />
                      )}
                    </CardsNFT>
                  );
                })}
              </div>
            </ContainerCardsNFT>
          </CardDetailsContainer>
        </section>
      </main>
    </>
  );
}
