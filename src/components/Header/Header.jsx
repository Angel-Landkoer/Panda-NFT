// import styles
import "./Header.scss";
import { NavBar } from "./NavBar/NavBar";
import { Discover } from "./Dicover/Discover";
import { CardNFT } from "./CardNFT/CardNFT";

export function Header() {
  return (
    <header>
      <section className="header">
        <NavBar />
        <Discover />
        <CardNFT
          description={"Heat Wave No GIF by Loof and Timmy"}
          image={
            "https://media3.giphy.com/media/TeRP089ltwj4Ib61aj/giphy.gif?cid=d13c8921t1eayoo1h5fbxjoroy9mttl8qt7e0cbvu7sqiff5&rid=giphy.gif&ct=g"
          }
        />
      </section>
    </header>
  );
}
