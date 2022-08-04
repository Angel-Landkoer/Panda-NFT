/* eslint-disable no-unused-vars */
// import Hooks
import { useState, useEffect } from "react";

// import components
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";

// import styles
import "./Discover.scss";

export function Discover() {
  // apiInformation
  const [dataCard, setDataCard] = useState([]);
  // input
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function apiCard() {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/trending?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb&limit=100&rating=g"
      );
      const data = await response.json();

      setDataCard(data.data);
    }

    apiCard();
  }, []);
  //

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    console.log(search);
  };

  //
  let resolve = [];

  if (!search) {
    resolve = dataCard;
  } else {
    resolve = dataCard.filter((card) => {
      return (
        card.title.toLowerCase().includes(search.toLowerCase()) ||
        card.username.toLowerCase().includes(search.toLowerCase())
      );
    });
  }

  //
  return (
    <>
      {/* <header>
        <section className="header"></section>
      </header> */}
      <main>
        <section className="main">
          <section className="searchKey">
            <h2>Explore Collectibles</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Type Your Keywords..."
                value={search}
                onChange={handleChange}
              />
            </form>
          </section>
          <section className="categories">
            <div className="oneToggle">
              <button>Sort By</button>
            </div>
            <div className="someCategories">
              <button className="btnMusic">Music</button>
              <button className="btnArt">Art</button>
              <button className="btnSport">Sport</button>
              <button className="btnVirtual">Virtual</button>
              <button className="btnVideos">Videos</button>
              <button className="btnMore">More</button>
            </div>
          </section>
          <section className="containerCard">
            {resolve.map((item) => {
              return <CardsNFT key={item.id} product={item} />;
            })}
          </section>
          <button className="viewMore">View More</button>
        </section>
      </main>
    </>
  );
}
