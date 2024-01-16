import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";

import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to='/'>
        <h1>BinX</h1>
      </Link>
      <div className="Links">
        <NavLink to={'/category/escritorios'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Escritorios</NavLink>
        <NavLink to={'/category/mesas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mesas</NavLink>
        <NavLink to={'/category/sillas'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Sillas</NavLink>
        <NavLink to={'/category/accesorios'} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Accesorios</NavLink>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
