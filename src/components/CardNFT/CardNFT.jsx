// import styles
import "./CardNFT.scss";

// import components
import { Component } from "./ComponentCard/Component";

export function CardNFT({ description, image }) {
  return (
    <>
      <section className="card">
        <img className="imageFirst" src={image} alt="imagen de una card" />
        <p className="parrafoFirst">{description}</p>
        <button>BSC</button>
        <Component
          imagen={"https://randomuser.me/api/portraits/women/89.jpg"}
          creator={"beautifulpanda941"}
          price={238205}
        />
      </section>
    </>
  );
}
