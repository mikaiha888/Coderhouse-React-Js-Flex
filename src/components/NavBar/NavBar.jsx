import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import UserLogo from "../UserLogo/UserLogo";

import logo from "../../assets/sodesk-logo-black.svg"

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/'  className="logo">
        <img src={logo} alt="sodesk-logo" />
      </Link>
      <ul>
        <li><Link to="/category/escritorios">Escritorios</Link></li>
        <li><Link to="/category/mesas">Mesas</Link></li>
        <li><Link to="/category/sillas">Sillas</Link></li>
        <li><Link to="/category/accesorios">Accesorios</Link></li>
      </ul>
      <div className="icons">
        <CartWidget />
        <UserLogo />
      </div>
    </nav>
  );
};
export default NavBar;
