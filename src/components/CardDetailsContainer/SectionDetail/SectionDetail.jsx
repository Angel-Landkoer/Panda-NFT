// import hooks
import { useState } from "react";

// import styles
import "./SectionDetail.scss";

export function SectionDetail({ data }) {
  const dataType = [
    "Contract Address",
    "Token ID",
    "Token Standard",
    "Blockchain",
  ];

  const datas = [data.images.original.hash, data.id, "Text3", "Ethereume"];

  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);

  const activeBtnToggle1 = () => {
    setState1(!state1);
  };

  const activeBtnToggle2 = () => {
    setState2(!state2);
  };

  const activeBtnToggle3 = () => {
    setState3(!state3);
  };

  return (
    <>
      <section className="sectionDetail">
        <section className="navegationBnts">
          <button
            onClick={activeBtnToggle1}
            className={state1 ? "activebtn1" : ""}
          >
            Description
          </button>
          <button
            onClick={activeBtnToggle2}
            className={state2 ? "activebtn2" : ""}
          >
            Offer
          </button>
          <button
            onClick={activeBtnToggle3}
            className={state3 ? "activebtn3" : ""}
          >
            Price History
          </button>
        </section>
        {data.user ? (
          <p>{data.user.description}</p>
        ) : (
          <p>Datos de description no encontrados</p>
        )}
        <section className="detailMore">
          <ul className="detailCategory ulStyle">
            {dataType.map((item, i) => (
              <li key={i + 20}>{item}</li>
            ))}
          </ul>

          <ul className="detailDatas ulStyle">
            {datas.map((item, i) => (
              <li key={i + 30}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
