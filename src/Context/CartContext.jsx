// import hooks
import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Card in Cart -category
  const [cartProducts, setCartProducts] = useState([]);

  // // Card in count
  // const [cardCount, setCardCount] = useState([]);

  // CardPrice in Card
  const [cartProductPrice, setCartProductPrice] = useState(0);

  // cards.length in cart
  const [totalProducts, setTotalProducts] = useState(0);

  //
  const [removeCardID, setRemoveCardID] = useState([]);

  // const someThing = (card, count) => {
  //   console.log("someThingCount", count);

  //   if (cartProducts.some((product) => product.id === card.id)) {
  //     const newCard = cartProducts.map((item) => ({
  //       ...item,
  //       counter: count,
  //     }));
  //     return setCartProducts(...newCard, newCard);
  //   } else {
  //     setCartProducts([...cartProducts, card]);
  //   }
  // };

  const someThing = (card, count) => {
    const newCard = { ...card, count };

    const existence = cartProducts.some((product) => product.id === newCard.id);
    if (existence) {
      console.log("es true");
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
    // setCartProducts,
    cartProducts,
    // addProductToCart,
    clear,
    setCartProductPrice,
    cartProductPrice,
    setTotalProducts,
    totalProducts,
    setRemoveCardID,
    removeCard,
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
