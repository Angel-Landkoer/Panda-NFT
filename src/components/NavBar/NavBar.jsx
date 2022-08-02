// import Hooks
import { Link } from "react-router-dom";

// import style
import "./NavBar.scss";

export function NavBar() {
  return (
    <nav className="navigation">
      <Link to="/">
        <img
          src={
            "https://raw.githubusercontent.com/Angel-Landkoer/The-pictures/master/reac-Pandas_NFT/logo%20(8).png"
          }
          alt="Logo"
        />
      </Link>
      <ul className="listsNavigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Discover">Discover</Link>
        </li>
        <li>
          <Link to="Docs">Docs</Link>
        </li>
        <li>
          <Link to="Blog">Blog</Link>
        </li>
        <li>
          <Link to="About-us">About-us</Link>
        </li>
        <li>
          <Link to="Contact-us">Contact-us</Link>
        </li>
      </ul>
      <button className="connectWallet">Connect Wallet</button>
    </nav>
  );
}
