// import hooks
import { useContext } from "react";
import { Link } from "react-router-dom";

// import component
import { Cart } from "../../components/Cart/Cart";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";
// sub- component
import { Component } from "../../components/CardsNFT/ComponetsCards/Component";

import { CartContext } from "../../Context/CartContext";

// import styles
import "./CartAdd.scss";

export function CartAdd() {
  const { cartProducts, removeCard, booleanToggle, loading } =
    useContext(CartContext);

  console.log("cartProducts: ", cartProducts);

  return (
    <>
      <Cart>
        <header>
          <section className="header">
            <h1>Cart Add</h1>
          </section>
        </header>
        <main>
          <section className="main">
            {booleanToggle ? (
              cartProducts.map((item) => {
                return (
                  <div key={item.idC}>
                    <CardsNFT>
                      {item.count > 1 ? (
                        <span className="spanCount">{item.count}</span>
                      ) : null}
                      <img
                        className="pictureNFT"
                        src={item.imgC}
                        alt="imagen de una card"
                      />
                      <p className="textNFT">{item.titleC}</p>

                      {loading ? (
                        <h2>Loading...</h2>
                      ) : (
                        <Component
                          key={item.passwordU}
                          creator={item}
                          price={item.price1}
                        />
                      )}
                    </CardsNFT>
                    <button
                      onClick={() => removeCard(item.idC)}
                      className="btnRemove"
                    >
                      Eliminar
                      <i className="fa-solid fa-trash-can"></i>
                    </button>
                  </div>
                );
              })
            ) : (
              <div className="noCards">
                <span>No hay producto en el carrito</span>
                <Link to="/">
                  <button>Volver al home</button>
                </Link>
              </div>
            )}
          </section>
        </main>
      </Cart>
    </>
  );
}
