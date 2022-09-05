// import hooks

// import components

// import styles
import "./CardsNFT.scss";

// import components

export function CardsNFT({ children, dataCard }) {
  return (
    <>
      <section className="cardsNFTs">
        {dataCard.count > 1 ? (
          <span className="spanCount">{dataCard.count}</span>
        ) : null}
        <img
          className="pictureNFT"
          src={dataCard.imgC}
          alt="imagen de una card"
        />
        <p className="textNFT">{dataCard.titleC}</p>

        {children}

        <section className="creatorNFT">
          <img src={dataCard.pictureU} alt="informacion de la card" />
          <div className="containerCreator">
            <span>Creator</span>
            <span>
              <b>{dataCard.nameU}</b>
            </span>
          </div>
          <div className="containerPrice">
            <span>Current Bid</span>
            <span>
              <b>{dataCard.price2} ETH</b>
            </span>
          </div>
        </section>
      </section>
    </>
  );
}
