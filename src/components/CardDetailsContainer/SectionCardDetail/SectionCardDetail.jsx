// import hooks
import { useState, useEffect } from "react";

// import styles
import "./SectionCardDetail.scss";

// import components
import { ComponentDetailUser } from "./ComponentDetailUser/ComponentDetailUser";

export function SectionCardDetail({ data, priceFirst, priceSecond }) {
  const [userCreator, setUserCreator] = useState([]);

  useEffect(() => {
    async function apiUser() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      setUserCreator(data.results);
    }

    apiUser();
  }, []);

  return (
    <>
      <section className="sectionCardDetail">
        <figure className="imageDetail">
          <img src={data.images.original.url} alt="algo" />
        </figure>
        <section className="details">
          <h3 className="titleCard">{data.username}</h3>
          <p className="descriptionCard">{data.title}</p>
          <div className="pricesCard">
            <span className="spanPrice">Price Bid</span>
            <p className="priceBig">{priceFirst} ETH</p>
            <span className="spanLast">Last Big</span>
            <p className="lastBig">{priceSecond} ETH</p>
          </div>
          {userCreator.map((item) => (
            <ComponentDetailUser
              key={item.login.password}
              creator={item.name.first}
              imagen={item.picture.medium}
            />
          ))}
          <div className="btnDecisions">
            <button>Purchase Now</button>
            <button>Place A Bid</button>
          </div>
        </section>
      </section>
    </>
  );
}
