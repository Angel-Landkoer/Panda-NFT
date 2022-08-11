// import hooks
import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Card in Cart
  const [cartProducts, setCartProducts] = useState([]);

  // CardPrice in Card
  const [cartProductPrice, setCartProductPrice] = useState(0);

  // cards.length in cart
  const [totalProducts, setTotalProducts] = useState(0);

  //
  const [removeCardID, setRemoveCardID] = useState([]);

  const addProductToCart = (product) => {
    let isInCart = cartProducts.find((itemCart) => itemCart.id === product.id);
    if (!isInCart) {
      setTotalProducts(totalProducts + 1);

      return setCartProducts([...cartProducts, product]);
    }
  };

  const clear = () => {
    setCartProducts([]);
    setTotalProducts(0);
  };

  const removeCard = (id) => {
    const foundoRemoveCard = cartProducts.findIndex((card) => card.id === id);

    setRemoveCardID(cartProducts.splice(foundoRemoveCard, 1));
    setTotalProducts(removeCardID);
  };

  const data = {
    setCartProducts,
    addProductToCart,
    cartProducts,
    clear,
    setCartProductPrice,
    cartProductPrice,
    setTotalProducts,
    totalProducts,
    setRemoveCardID,
    removeCardID,
    removeCard,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
}

export { CartContext };
