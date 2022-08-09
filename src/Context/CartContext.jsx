// import hooks
import { useState, createContext } from 'react';

const CartContext = createContext();

export function CartProvider({children}) {

  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  }

  const clear = () => {
    setCartProducts([]);
  }

  const data = {
    setCartProducts,
    addProductToCart, 
    cartProducts,
    clear,
  };

    return (
        <>
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
        </>
    )
}

export { CartContext } 