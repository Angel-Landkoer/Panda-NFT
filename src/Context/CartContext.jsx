// import hooks
import { useState, createContext, useEffect } from "react";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Card in Cart -category
  const [cartProducts, setCartProducts] = useState([]);

  // cards.length in cart
  const [totalProducts, setTotalProducts] = useState(0);

  // card removed
  const [removeCardID, setRemoveCardID] = useState([]);

  // API data all
  const [dataCardU, setDataCardU] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // DataCardU
    // API data
    async function dataCards() {
      try {
        const dataCollection = collection(db, "DataCardU");
        const dataSnapshot = await getDocs(dataCollection);
        const dataList = dataSnapshot.docs.map((doc) => {
          let data = doc.data();
          data.id = doc.id;
          return data;
        });
        return dataList;
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    dataCards().then((res) => {
      setDataCardU(res);
      setLoading(false);
    });
  }, []);

  // function add to cart and save the counter in object

  const addProductToCart = (card, count) => {
    const newCard = { ...card, count };

    const existence = cartProducts.some(
      (product) => product.idC === newCard.idC
    );
    if (existence) {
      const newCart = cartProducts.map((product) => {
        const response = product.idC === newCard.idC;

        if (response) {
          product.count = product.count + newCard.count;
        }
        return product;
      });
      setCartProducts(newCart);
    } else {
      setCartProducts([...cartProducts, newCard]);
    }
  };

  // function clean everything

  const clear = () => {
    setCartProducts([]);
  };

  // function remove card

  const removeCard = (id) => {
    const foundoRemoveCard = cartProducts.findIndex((card) => card.idC === id);

    setRemoveCardID(cartProducts.splice(foundoRemoveCard, 1));
    setTotalProducts(removeCardID);
  };

  // export data

  const data = {
    cartProducts,
    clear,
    setTotalProducts,
    totalProducts,
    setRemoveCardID,
    removeCard,
    addProductToCart,
    loading,
    dataCardU,
  };

  return (
    <>
      <CartContext.Provider value={data}>{children}</CartContext.Provider>
    </>
  );
}

export { CartContext };
