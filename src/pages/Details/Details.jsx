// import hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import styles
import "./Details.scss";

// import components
import { ContainerCardsNFT } from "../../components/ContainerCardsNFT/ContainerCardsNFT";
import { CardDetailsContainer } from "../../components/CardDetailsContainer/CardDetailsContainer";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";
// sub-componentes
import { SectionCardDetail } from "../../components/CardDetailsContainer/SectionCardDetail/SectionCardDetail";
import { SectionDetail } from "../../components/CardDetailsContainer/SectionDetail/SectionDetail";

export function Details() {
  let price1 = Math.floor(Math.random() * 100);
  let price2 = Math.floor(Math.random() * 100);

  const { idCard } = useParams();

  const [newNFT, setNewNFT] = useState([]);

  // filter
  const [itemCard, setItemCard] = useState(null);

  useEffect(() => {
    // cards firebase
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

    // cards-ID  firebase
    async function cardID() {
      const docRef = doc(db, "data", idCard);
      const docSnapshot = await getDoc(docRef);
      let docData = docSnapshot.data();
      docData.id = docSnapshot.id;
      return docData;
    }

    cardID().then((res) => setItemCard(res));
  }, [idCard]);

  return (
    <>
      <main>
        <section className="mainDatails">
          <CardDetailsContainer>
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
            <ContainerCardsNFT>
              <div className="titleBtn_flex">
                <h3>Another NFTs</h3>
                <button>View More</button>
              </div>

              <div className="containerCards_flex">
                {newNFT.slice(13, 16).map((dataCard) => {
                  return <CardsNFT key={dataCard.id} product={dataCard} />;
                })}
              </div>
            </ContainerCardsNFT>
          </CardDetailsContainer>
        </section>
      </main>
    </>
  );
}
