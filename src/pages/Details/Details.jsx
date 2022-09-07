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

  // More View
  const [moreOrLess, setMoreOrLess] = useState(16);
  const [moreOrLessToggle, setMoreOrLessToggle] = useState(false);

  const handleMoreContainerCards = () => {
    setMoreOrLessToggle(!moreOrLessToggle);
    moreOrLessToggle ? setMoreOrLess(16) : setMoreOrLess(19);
  };

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

  return (
    <>
      <main>
        <section className="mainDatails">
          <CardDetailsContainer>
            {itemCard1 ?? itemCards2 ? (
              <SectionCardDetail data={itemCard1 ?? itemCards2} />
            ) : (
              <h4>Loading Details...</h4>
            )}

            {itemCard1 ?? itemCards2 ? (
              <SectionDetail data={itemCard1 ?? itemCards2} />
            ) : (
              <h4>Loading Other Details...</h4>
            )}

            <ContainerCardsNFT>
              <section className="titleBtn_flex">
                <h3>Another NFTs</h3>
                <button onClick={handleMoreContainerCards}>
                  {moreOrLessToggle ? "View Less" : "View More"}
                </button>
              </section>

              <section className="containerCards_flex">
                {dataCardU.slice(13, moreOrLess).map((dataCard) => {
                  return (
                    <CardsNFT
                      key={`Details-${dataCard.idC}`}
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
          </CardDetailsContainer>
        </section>
      </main>
    </>
  );
}
