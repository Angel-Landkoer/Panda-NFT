// import hooks
import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import component
import { Cart } from "../../components/Cart/Cart";
import { Modal } from "../../components/Modal/Modal";
import { CardsNFT } from "../../components/CardsNFT/CardsNFT";

import { CartContext } from "../../Context/CartContext";

// import styles
import "./CartAdd.scss";

export function CartAdd() {
  const { cartProducts, removeCard, loading } = useContext(CartContext);

  const [totalPrice, setTotalPrice] = useState(0);

  // useState Order
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [order, setOrder] = useState({
    items: cartProducts.map((card) => {
      return {
        id: card.idC,
        title: card.titleC,
        price: card.price1,
      };
    }),
    buyer: {},
    date: new Date().toLocaleString(),
    total: totalPrice,
  });

  const [formData, setFormData] = useState({
    formName: "",
    formPhone: "",
    formEmail: "",
  });

  useEffect(() => {
    function reducePrice() {
      const allPrices = cartProducts.map((price) => {
        let total = price.price1 * price.count;
        return total;
      });

      const all = allPrices.reduce((a, b) => a + b, 0);

      setTotalPrice(all);
    }

    reducePrice();
  }, []);

  const handleChangeInputs = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    pushData({ ...order, buyer: formData, total: totalPrice });
  };

  async function pushData(newOrder) {
    const collectionOrder = collection(db, "Order");
    const orderDoc = await addDoc(collectionOrder, newOrder);
    setSuccess(orderDoc.id);
    console.log("Orden Generada: ", orderDoc);
  }

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
            <section className="containerCards">
              {cartProducts.length > 0 ? (
                cartProducts.map((item) => {
                  return (
                    <section
                      key={`CartAdd-${item.idC}`}
                      className="controlCard"
                    >
                      <CardsNFT dataCard={item} />

                      <button
                        onClick={() => removeCard(item.idC)}
                        className="btnRemove"
                      >
                        Eliminar
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </section>
                  );
                })
              ) : (
                <div className="noCards">
                  <span>There are no products in the cart</span>
                  <Link to="/">
                    <button>Back to Home</button>
                  </Link>
                </div>
              )}
            </section>
            <section className="payForAll">
              <button onClick={() => setShowModal(true)}>Go to checkout</button>
              <section className="totalPriceCard">
                <h3>Order summary</h3>
                {cartProducts.map((cardPrice) => {
                  return (
                    <div
                      key={`CardAdd-${cardPrice.titleC}`}
                      className="dataTotal"
                    >
                      <span>{`Title: ${cardPrice.titleC}`}</span>
                      <span>{`Price: ${cardPrice.price1}`}</span>
                    </div>
                  );
                })}
                <span className="total">{`Total pressure: ${totalPrice}`}</span>
              </section>
            </section>
            {showModal && (
              <Modal>
                <h2>Contact Details</h2>
                {success ? (
                  <>
                    <div className="successTrue">
                      <h2>Su Orden fue exitosa</h2>
                      <p>{`Su codigo es: ${success}`}</p>
                    </div>
                    <button
                      className="backModal"
                      onClick={() => setSuccess(false)}
                    >
                      Back
                    </button>
                  </>
                ) : (
                  <>
                    <span
                      className="closeModal"
                      onClick={() => setShowModal(false)}
                    >
                      <i className="fa-solid fa-x"></i>
                    </span>
                    <form onSubmit={handleSubmitData}>
                      <label id="formName">
                        <span>Name</span>
                        <input
                          type="text"
                          name="formName"
                          id="formName"
                          autoComplete="name"
                          required
                          onChange={handleChangeInputs}
                          value={formData.formName}
                        />
                      </label>

                      <label id="formPhone">
                        <span>Phone number</span>
                        <input
                          type="number"
                          name="formPhone"
                          id="formPhone"
                          autoComplete="phone"
                          required
                          onChange={handleChangeInputs}
                          value={formData.formPhone}
                        />
                      </label>

                      <label id="formEmail">
                        <span>Email</span>
                        <input
                          type="email"
                          name="formEmail"
                          id="formEmail"
                          autoComplete="email"
                          required
                          onChange={handleChangeInputs}
                          value={formData.formEmail}
                        />
                      </label>
                      <button type="submit">Submit information</button>
                    </form>
                  </>
                )}
              </Modal>
            )}
          </section>
        </main>
      </Cart>
    </>
  );
}
