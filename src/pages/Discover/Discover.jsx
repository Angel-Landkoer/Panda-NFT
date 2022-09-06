/* eslint-disable no-unused-vars */
// import Hooks
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

// import components
import { CartContext } from "../../Context/CartContext";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";

// import styles
import "./Discover.scss";

export function Discover() {
  const { dataCardU, loading } = useContext(CartContext);

  // input
  const [search, setSearch] = useState("");

  //

  const [algo, setAlgo] = useState([...dataCardU]);
  const [toggle, setToggle] = useState(true);
  const [stock, setStock] = useState([]);

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

  let filterWords = [];

  const handleChangeCategory = (e) => {
    // alert(e.target.name.toLowerCase());
    filterWords = algo.filter((card) =>
      card.titleC.toLowerCase().includes(e.target.name.toLowerCase())
    );
    setToggle(!toggle);
    setStock(filterWords);
  };

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
              <button
                className="btnMusic"
                name="Music"
                onClick={handleChangeCategory}
              >
                Music
              </button>
              <button
                className="btnArt"
                name="Art"
                onClick={handleChangeCategory}
              >
                Art
              </button>
              <button
                className="btnSport"
                name="Sport"
                onClick={handleChangeCategory}
              >
                Sport
              </button>
              <button
                className="btnVirtual"
                name="Virtual"
                onClick={handleChangeCategory}
              >
                Virtual
              </button>
              <button
                className="btnVideos"
                name="Videos"
                onClick={handleChangeCategory}
              >
                Videos
              </button>
              <button
                className="btnMore"
                name="More"
                onClick={handleChangeCategory}
              >
                More
              </button>
            </div>
          </section>
          <section className="containerCard">
            {toggle
              ? resolve.map((item, i) => {
                  return (
                    <CardsNFT key={`discover-${item.idC}`} dataCard={item}>
                      <Link to={`/CardNFT/${item.idC}`}>
                        <button>BSC</button>
                      </Link>
                    </CardsNFT>
                  );
                })
              : stock.map((item, i) => {
                  return (
                    <CardsNFT
                      key={`discover-${item.passwordU}`}
                      dataCard={item}
                    >
                      <Link to={`/CardNFT/${item.idC}`}>
                        <button>BSC</button>
                      </Link>
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
