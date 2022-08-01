// import hooks
import { useState } from "react";

// import styles
import "./SectionDetail.scss";

export function SectionDetail({ context, TokenID, ContractAddress }) {
  const list1 = [
    "Contract Address",
    "Token ID",
    "Token Standard",
    "Blockchain",
  ];
  const list2 = [ContractAddress, TokenID, "Text3", "Ethereume"];

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
            className={state1 ? "activebtn1" : undefined}
          >
            Description
          </button>
          <button
            onClick={activeBtnToggle2}
            className={state2 ? "activebtn2" : undefined}
          >
            Offer
          </button>
          <button
            onClick={activeBtnToggle3}
            className={state3 ? "activebtn3" : undefined}
          >
            Price History
          </button>
        </section>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ea
          animi amet dolore ullam perferendis, laudantium nihil, tempore ad.
        </p>
        {/* <p>{context ? context : 'Como que error'}</p> */}
        <section className="detailMore">
          <ul className="detailCategory ulStyle">
            {list1.map((item, i) => (
              <li key={i + 20}>{item}</li>
            ))}
          </ul>
          <ul className="detailDatas ulStyle">
            {list2.map((item, i) => (
              <li key={i + 30}>{item}</li>
            ))}
          </ul>
        </section>
      </section>
    </>
  );
}
