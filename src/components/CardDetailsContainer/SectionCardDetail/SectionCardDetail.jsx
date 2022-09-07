// import hooks
import { useState } from "react";
import { Link } from "react-router-dom";

// import styles
import "./SectionCardDetail.scss";

// import components
import { ItemCount } from "../../ItemCount/ItemCount";

export function SectionCardDetail({ data }) {
  // cantidad selecciona
  const [quantitySelected, setQuantitySelected] = useState(0);

  return (
    <>
      <section className="sectionCardDetail">
        <figure className="imageDetail">
          <img src={data.imgC} alt="algo" />
        </figure>
        <section className="details">
          <h3 className="titleCard">{data.nameU}</h3>
          <p className="descriptionCard">{data.titleC}</p>
          <div className="pricesCard">
            <span className="spanPrice">Price Bid</span>
            <p className="priceBig">{data.price1} ETH</p>
            <span className="spanLast">Last Big</span>
            <p className="lastBig">{data.price2} ETH</p>
          </div>

          <section className="componentDetailUser">
            <figure className="sectionImageUser">
              <img
                src={
                  data.pictureU ? (
                    data.pictureU
                  ) : (
                    <span>Aún no se encuentra el autor</span>
                  )
                }
                alt="imagen"
              />
            </figure>
            <section className="sectionUserCreator">
              <span>Creator</span>
              <span>
                <b>
                  {data.nameU ? (
                    data.nameU
                  ) : (
                    <span>Aún no se encuentra el autor</span>
                  )}
                </b>
              </span>
            </section>
          </section>

          <section className="btnDecisions">
            {quantitySelected > 0 ? (
              <Link to="/CartAdd">
                <button className="finishBuy">TERMINAR COMPRA</button>
              </Link>
            ) : (
              <ItemCount
                setQuantitySelected={setQuantitySelected}
                init={1}
                stock={15}
                data={data}
              />
            )}
          </section>
        </section>
      </section>
    </>
  );
}
