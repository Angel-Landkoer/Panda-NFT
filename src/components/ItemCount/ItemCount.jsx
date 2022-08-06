// import hooks
import { useState } from "react";

// import styles
import "./ItemCount.scss";

export function ItemCount({ init, stock, setQuantitySelected }) {
  const [pro, setPro] = useState(init);

  const [dynamic, setDynamic] = useState(false);

  const addProduct = (num) => {
    setPro(init + num);
  };

  const onAdd = () => {
    setQuantitySelected(pro);
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
            className={dynamic ? "btnOffer" : console.log("Algo fallo", null)}
            onClick={onAdd}
          >
            Purchase Now
          </button>
          <button
            className={dynamic ? "btnOffer" : console.log("Algo fallo", null)}
          >
            Place A Big
          </button>
        </section>
      </section>
    </>
  );
}
