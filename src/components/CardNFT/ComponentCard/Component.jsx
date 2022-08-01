import "./Component.scss";

export function Component({ price, creator, imagen }) {
  return (
    <>
      <section className="infoCreator">
        <img src={imagen} alt="informacion de la card" />
        <div className="sectionCreator">
          <span>Creator</span>
          <span>
            <b>{creator}</b>
          </span>
        </div>
        <div className="sectionPrice">
          <span>Current Bid</span>
          <span>
            <b>{price}</b>
          </span>
        </div>
      </section>
    </>
  );
}
