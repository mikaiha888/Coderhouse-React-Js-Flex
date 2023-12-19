import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>BinX</h3>
      <div>
        <button>Escritorios</button>
        <button>Mesas</button>
        <button>Sillas</button>
        <button>Accesorios</button>
      </div>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
