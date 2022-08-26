// import hooks
import { useState, createContext, useEffect } from "react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
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

  // card existences or not
  const [booleanToggle, setBooleanToggle] = useState(false);

  let cards = [];
  let users = [];
  let allData = [];

  useEffect(() => {
    // // APIs alternate
    // async function testCards() {
    //   const response = await fetch(
    //     "https://api.giphy.com/v1/gifs/trending?api_key=dS6ZnDy8xSpY1Ul63p88KSDnASS9X5Hb&limit=50&rating=g"
    //   );
    //   const { data } = await response.json();
    //   const dataCardLimit = data.map((card) => {
    //     let priceBig = Math.floor(Math.random() * 100);
    //     let lastBig = Math.floor(Math.random() * 100);
    //     const cardLimit = {
    //       titleC: card.title,
    //       idC: card.id,
    //       imgC: card.images.original.url,
    //       hashC: card.images.original.hash,
    //       price1: priceBig,
    //       price2: lastBig,
    //     };
    //     return cardLimit;
    //   });

    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   cards = [...dataCardLimit];
    // }

    // async function testUsers() {
    //   const responses = await fetch("https://randomuser.me/api/?results=50");
    //   const { results } = await responses.json();

    //   const dataUsersLimit = results.map((user) => {
    //     const usersLimit = {
    //       nameU: user.name.first,
    //       pictureU: user.picture.large,
    //       genderU: user.gender,
    //       passwordU: user.login.password,
    //       idU: user.id.value,
    //     };
    //     return usersLimit;
    //   });

    //   // eslint-disable-next-line react-hooks/exhaustive-deps
    //   users = [...dataUsersLimit];
    // }

    // async function mergeAPIs() {
    //   await testCards();
    //   await testUsers();

    //   for (let i = 0; i < cards.length; i++) {
    //     const element = { ...cards[i], ...users[i] };

    //     allData.push(element);
    //   }

    //   setDataCardU(allData);
    //   setLoading(false);

    //   console.log("CCC dataCardU: ", dataCardU);

    //   // dataCardU.forEach((item) => {
    //   //   setDoc(doc(db, "DataCardU", item.idC), item);
    //   // });
    // }

    // mergeAPIs();

    // API data

    async function dataCards() {
      const dataCollection = collection(db, "DataCardU");
      const dataSnapshot = await getDocs(dataCollection);
      const dataList = dataSnapshot.docs.map((doc) => {
        let data = doc.data();
        data.id = doc.id;
        return data;
      });
      return dataList;
    }

    dataCards().then((res) => {
      setDataCardU(res);
      setLoading(false);
    });

    // show existence of object / or / no

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

  // function add to cart and save the counter in object

  const someThing = (card, count) => {
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
    booleanToggle,
    cartProducts,
    clear,
    setTotalProducts,
    totalProducts,
    setRemoveCardID,
    removeCard,
    someThing,
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
