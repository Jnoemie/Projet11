import { Link, useLocation } from "react-router-dom";
import logo from "../Assets/logo.png";

import "../Styles/Header.scss";

function Header() {
  const location = useLocation();

  return (
    <div className="kasa-banner">
      <img
        src={logo} // import du logo 
        alt="Kasa écrit en rouge avec une maison à la place du premier A"
        className="kasa-logo"
      />
      <ul className="menuNav">
        <li className="menuPuce">
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link>
        </li>
        <li className="menuPuce">
          <Link
            to="/About"
            className={location.pathname === "/About" ? "active" : ""}
          >
            A Propos
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;