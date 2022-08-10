// import hooks
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

// import styles
import "./ItemCount.scss";

export function ItemCount({ init, stock, setQuantitySelected, data }) {
  const [pro, setPro] = useState(init);

  const [dynamic, setDynamic] = useState(false);

  const { addProductToCart } = useContext(CartContext);

  const addProduct = (num) => {
    setPro(init + num);
  };

  const onAdd = () => {
    setQuantitySelected(pro);
    addProductToCart(data);
    if (pro > 0) {
      setDynamic(true);
    }
  };

  return (
    <>
      <section className="itemCount">
        <section className="btnsCounter">
          <button
            className="less"
            onClick={() => addProduct(0)}
            disabled={pro === init}
          >
            -
          </button>
          <span>{pro}</span>
          <button
            className="more"
            onClick={() => addProduct(+1)}
            disabled={pro === stock}
          >
            +
          </button>
        </section>
        <section className="toPay">
          <button
            className={dynamic ? "btnOffer" : ''}
            onClick={onAdd}
          >
            Purchase Now
          </button>
          <button
            className={dynamic ? "btnOffer" : ''}
          >
            Place A Big
          </button>
        </section>
      </section>
    </>
  );
}
