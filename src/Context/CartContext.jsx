// import hooks
import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const [cartProductPrice, setCartProductPrice] = useState(0);

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };

  const clear = () => {
    setCartProducts([]);
  };

  const data = {
    setCartProducts,
    addProductToCart,
    cartProducts,
    clear,
    setCartProductPrice,
    cartProductPrice,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
}

export { CartContext };
