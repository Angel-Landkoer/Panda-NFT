// import styles
import "./SectionCreateSellNFT.scss";

import { Cards } from "./Cards/Cards";

export function SectionCreateSellNFT() {
  return (
    <>
      <section className="createSell">
        <h2>Create and sell your NFTs</h2>
        <div className="containeCards">
          <Cards
            title={"Set up your wallet"}
            paragraph={
              "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
            }
          />
          <Cards
            title={"Add your NFTs"}
            paragraph={
              "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
            }
          />
          <Cards
            title={"List them for sale"}
            paragraph={
              "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner."
            }
          />
          
        </div>
      </section>
    </>
  );
}
