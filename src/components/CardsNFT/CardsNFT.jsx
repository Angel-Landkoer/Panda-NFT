// import hooks
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

// import components

// import styles
import "./CardsNFT.scss";

// import components
import { Component } from "./ComponetsCards/Component";

export function CardsNFT({ product, children }) {
  // const [create, setCreate] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   async function apiCreator() {
  //     const userCollection = collection(db, "results");
  //     const userSnapshot = await getDocs(userCollection);
  //     const userList = userSnapshot.docs.map((doc) => {
  //       let users = doc.data();
  //       users.id = doc.id;

  //       return users;
  //     });
  //     return userList;
  //   }

  //   apiCreator().then((res) => {
  //     setCreate(res);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <>
      <section className="cardsNFTs">
        {/* {product.count > 1 ? (
          <span className="spanCount">{product.count}</span>
        ) : null}
        <img
          className="pictureNFT"
          src={product.images.original.url}
          alt="imagen de una card"
        />
        <p className="textNFT">{product.title}</p> */}
        {children}

        {/* {loading ? (
          <h2>Loading...</h2>
        ) : (
          create.map((item) => {
            let number = Math.floor(Math.random() * 100);
            return (
              <Component
                key={item.login.password}
                creator={item}
                price={number}
              />
            );
          })
        )} */}
      </section>
    </>
  );
}
