// import hooks
import { useContext } from "react";

// import component
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";
import { CartContext } from "../../Context/CartContext";

// import styles
import "./CartAdd.scss";

export function CartAdd() {
  const { cartProducts, removeCard } = useContext(CartContext);

  return (
    <>
      <header>
        <section className="headerCartAdd">
          <h1>Cart Add</h1>
        </section>
      </header>
      <main>
        <section className="mainCartAdd">
          {cartProducts.map((item) => {
            return (
              <div key={item.id}>
                <CardsNFT product={item} />
                <button
                  onClick={() => removeCard(item.id)}
                  className="btnRemove"
                >
                  Pa' tu casa
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            );
          })}
        </section>
      </main>
    </>
  );
}
