// import styles
import "./Header.scss";
import { NavBar } from "./NavBar/NavBar";
import { Discover } from "./Dicover/Discover"

export function Header() {
  return (
    <header>
      <section className="header">
        <NavBar />
        <Discover />
      </section>
    </header>
  );
}
