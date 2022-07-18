// import styles
import "./Header.scss";
import { NavBar } from "./NavBar/NavBar";

export function Header() {
  return (
    <header>
      <section className="header">
        <NavBar />
      </section>
    </header>
  );
}
