// import hooks
import { useState, createContext, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Card in Cart -category
  const [cartProducts, setCartProducts] = useState([]);

  // CardPrice in Card
  const [cartProductPrice, setCartProductPrice] = useState(0);

  // cards.length in cart
  const [totalProducts, setTotalProducts] = useState(0);

  // card removed
  const [removeCardID, setRemoveCardID] = useState([]);

  // card existences or not
  const [booleanToggle, setBooleanToggle] = useState(false);

  useEffect(() => {
    const existences = () => {
      const booleanExistence = cartProducts.some((card) => card);
      if (booleanExistence) {
        setBooleanToggle(true);
      } else {
        setBooleanToggle(false);
      }
    };
    existences();
  });

  const someThing = (card, count) => {
    const newCard = { ...card, count };

    const existence = cartProducts.some((product) => product.id === newCard.id);
    if (existence) {
      const newCart = cartProducts.map((product) => {
        if (product.id === newCard.id) {
          product.count = product.count + newCard.count;
        }
        return product;
      });
      setCartProducts(newCart);
    } else {
      setCartProducts([...cartProducts, newCard]);
    }
  };

  const clear = () => {
    setCartProducts([]);
  };

  const removeCard = (id) => {
    const foundoRemoveCard = cartProducts.findIndex((card) => card.id === id);

    setRemoveCardID(cartProducts.splice(foundoRemoveCard, 1));
    setTotalProducts(removeCardID);
  };

  const data = {
    booleanToggle,
    cartProducts,
    clear,
    setCartProductPrice,
    cartProductPrice,
    setTotalProducts,
    totalProducts,
    setRemoveCardID,
    removeCard,
    someThing,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
}

export { CartContext };
