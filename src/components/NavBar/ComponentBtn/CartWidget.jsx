// import hooks
import { useState, useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

// import styles
import "./CartWidget.scss";

export function CartWidget() {
  const [toggle, setToggle] = useState(false);

  const { cartProducts, cartProductPrice, totalProducts, clear } =
    useContext(CartContext);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <section className="cartWidget">
        <button className="cartToggle" onClick={handleToggle}>
          {cartProducts.length !== 0 && <span>{totalProducts}</span>}
          <i className="fa-solid fa-cart-shopping"></i>
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
                {item.user ? (
                  <p className="contextDescription">
                    Description: {item.user.description}
                  </p>
                ) : (
                  <p>Description: Dato no encontrado</p>
                )}

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
