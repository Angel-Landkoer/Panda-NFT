// import styles
import "./CardNFT.scss";

// import components

export function CardNFT({ description, image }) {
  return (
    <>
      <section className="card">
        <img className="imageFirst" src={image} alt="imagen de una card" />
        <p className="parrafoFirst">{description}</p>
        <button>BSC</button>

        <section className="infoCreator">
          <img
            src="https://randomuser.me/api/portraits/women/85.jpg"
            alt="informacion de la card"
          />
          <div className="sectionCreator">
            <span>Creator</span>
            <span>
              <b>beautifulpanda941</b>
            </span>
          </div>
          <div className="sectionPrice">
            <span>Current Bid</span>
            <span>
              <b>{238}</b>
            </span>
          </div>
        </section>
      </section>
    </>
  );
}
