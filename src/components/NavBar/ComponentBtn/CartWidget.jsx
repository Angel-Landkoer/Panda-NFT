// import hooks
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

// import styles
import "./CartWidget.scss";

export function CartWidget() {
  const [toggle, setToggle] = useState(false);

  const { cartProducts, cartProductPrice, clear } = useContext(CartContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <section className="cartWidget">
        <button className="cartToggle" onClick={handleToggle}>
          Cart
        </button>
        <div className={toggle ? "contentActive" : "contentHide"}>
          {cartProducts.map((item, i) => {
            return (
              <div key={`context${i}`} className="context">
                <img
                  className="contextImg"
                  src={item.images.original.url}
                  alt=""
                />
                <p className="contextTitle">Title: {item.title}</p>
                <p className="contextDescription">
                  Description: {item.user.description}
                </p>
                <p className="contextPrice">Price Big: {cartProductPrice}</p>
              </div>
            );
          })}
          <button onClick={clear}>Clear</button>
        </div>
      </section>
    </>
  );
}
