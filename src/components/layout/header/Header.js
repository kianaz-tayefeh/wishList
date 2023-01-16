import { Link } from "react-router-dom";

import Logo from "./../../../images/logo.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="header-nav">
        <ul className="header-nav-ul">
          <li className="header-nav-ul-li">
            <Link to="/">All Movies</Link>
          </li>
          <li className="header-nav-ul-li">
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
