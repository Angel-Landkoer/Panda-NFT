/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import style
import "./NavBar.scss";
import logo from "/home/angell/projects_all/react-CoderHouse/project/Panda-NFT/src/images/header/logo.svg";

export function NavBar() {
  return (
    <nav className="navigation">
      <a href="#">
        <img src={logo} alt="Logo" />
      </a>
      <ul className="listsNavigation">
        <li key={"home"}>
          <a href="#">Home</a>
        </li>
        <li key={"discover"}>
          <a href="#">Discover</a>
        </li>
        <li key={"docs"}>
          <a href="#">Docs</a>
        </li>
        <li key={"blog"}>
          <a href="#">Blog</a>
        </li>
        <li key={"about"}>
          <a href="#">About-us</a>
        </li>
        <li key={"contact"}>
          <a href="#">Contact-us</a>
        </li>
      </ul>
      <button className="connectWallet">Connect Wallet</button>
    </nav>
  );
}
