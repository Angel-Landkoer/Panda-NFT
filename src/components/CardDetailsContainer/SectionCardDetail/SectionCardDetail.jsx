// import hooks
import { useState } from "react";
import { Link } from "react-router-dom";

// import styles
import "./SectionCardDetail.scss";

// import components
import { ComponentDetailUser } from "./ComponentDetailUser/ComponentDetailUser";
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
          {data ? (
            <ComponentDetailUser user={data} />
          ) : (
            <span>Cargando usuarios...</span>
          )}

          <div className="btnDecisions">
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
          </div>
        </section>
      </section>
    </>
  );
}
