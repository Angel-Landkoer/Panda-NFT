// import styles
import "./CardNFT.scss";

// import component
import { Component } from "./ComponentCard/Component";

export function CardNFT({ description, image }) {
  return (
    <>
      <section className="card">
        <img className="imageFirst" src={image} alt="imagen de una card" />
        <p className="parrafoFirst">{description}</p>
        <button>BSC</button>
        <Component
          imagen={"https://randomuser.me/api/portraits/thumb/women/1.jpg"}
          creator={"beautifulpanda941"}
          price={238205}
        />
      </section>
    </>
  );
}
