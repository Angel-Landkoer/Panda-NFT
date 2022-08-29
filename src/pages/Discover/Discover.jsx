/* eslint-disable no-unused-vars */
// import Hooks
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
// import { getDocs, collection } from "firebase/firestore";
// import { db } from "../../firebaseConfig";

// import components
import { CartContext } from "../../Context/CartContext";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";
// sub-component
import { Component } from "../../components/CardsNFT/ComponetsCards/Component";

// import styles
import "./Discover.scss";

export function Discover() {
  const { dataCardU, loading } = useContext(CartContext);

  // input
  const [search, setSearch] = useState("");

  //

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  //
  let resolve = [];

  if (!search) {
    resolve = dataCardU;
  } else {
    resolve = dataCardU.filter((card) => {
      return card.titleC.toLowerCase().includes(search.toLowerCase());
    });
  }

  console.log("SectionDiscover");

  return (
    <>
      <header>
        <section className="headerDiscover"></section>
      </header>
      <main>
        <section className="mainDiscover">
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
            {resolve.map((item, i) => {
              return (
                <CardsNFT key={`discover${item.idC}`}>
                  {item.count > 1 ? (
                    <span className="spanCount">{item.count}</span>
                  ) : null}
                  <img
                    className="pictureNFT"
                    src={item.imgC}
                    alt="imagen de una card"
                  />
                  <p className="textNFT">{item.titleC}</p>
                  <Link to={`/CardNFT/${item.idC}`}>
                    <button>BSC</button>
                  </Link>
                  {loading ? (
                    <h2>Loading...</h2>
                  ) : (
                    <Component creator={item} price={item.price2} />
                  )}
                </CardsNFT>
              );
            })}
          </section>
          <button className="viewMore">View More</button>
        </section>
      </main>
    </>
  );
}
