// import hooks
import { useState, useEffect } from "react";

// import styles
import "./Header.scss";

// import components
import { NavBar } from "./NavBar/NavBar";
import { Discover } from "./Dicover/Discover";
import { CardNFT } from "./CardNFT/CardNFT";

// import utilities
import { data } from "../../utilities/Card.mock";

export function Header() {
  const [cardData, setCardData] = useState([]);

  const getPromose = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });

  useEffect(() => {
    getPromose
      .then((res) => {
        return setCardData(res);
      })
      .catch((error) => console.log("error", error));
  }, []);


  return (
    <header>
      <section className="header">
        <NavBar />
        <Discover />
        {
          cardData
          .map((item, i) => {
            return (
              <CardNFT key={i} description={item.title} image={item.images.original.url} />
            )
          })
        }
      </section>
    </header>
  );
}
