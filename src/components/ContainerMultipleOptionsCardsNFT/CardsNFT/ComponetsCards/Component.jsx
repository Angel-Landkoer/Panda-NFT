// import styles
import "./Component.scss";

export function Component({ creator, price }) {
  return (
    <>
      <section className="creatorNFT">
        <img src={creator.picture.medium} alt="informacion de la card" />
        <div className="containerCreator">
          <span>Creator</span>
          <span>
            <b>{creator.login.username}</b>
          </span>
        </div>
        <div className="containerPrice">
          <span>Current Bid</span>
          <span>
            <b>{price} ETH</b>
          </span>
        </div>
      </section>
    </>
  );
}
