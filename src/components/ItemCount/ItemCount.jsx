// import hooks
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

// import styles
import "./ItemCount.scss";

export function ItemCount({ init, stock, setQuantitySelected, data }) {
  const [count, setCount] = useState(init);

  const [dynamic, setDynamic] = useState(false);

  const { someThing } = useContext(CartContext);

  const addProduct = (num) => {
    setCount(count + num);
  };

  const onAdd = () => {
    setQuantitySelected(count);
    someThing(data, count);
    if (count > 0) {
      setDynamic(true);
    }
  };

  return (
    <>
      <section className="itemCount">
        <section className="btnsCounter">
          <button
            className="less"
            onClick={() => {
              addProduct(-1);
            }}
            disabled={count === init ? true : false}
          >
            -
          </button>
          <span>{count}</span>
          <button
            className="more"
            onClick={() => {
              addProduct(+1);
            }}
            disabled={count === stock ? true : false}
          >
            +
          </button>
          <span style={{ color: "red" }}>{`Solo hay ${stock} en stock`}</span>
        </section>
        <section className="toPay">
          <button className={dynamic ? "btnOffer" : ""} onClick={onAdd}>
            Purchase Now
          </button>
          <button className={dynamic ? "btnOffer" : ""}>Place A Big</button>
        </section>
      </section>
    </>
  );
}
