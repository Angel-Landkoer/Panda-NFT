// import hooks
import { useState, createContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const [cartProductPrice, setCartProductPrice] = useState(0);

  const [totalProducts, setTotalProducts] = useState(0);

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

  const data = {
    setCartProducts,
    addProductToCart,
    cartProducts,
    clear,
    setCartProductPrice,
    cartProductPrice,
    setTotalProducts,
    totalProducts,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
}

export { CartContext };
