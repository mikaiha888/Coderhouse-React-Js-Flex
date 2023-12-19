import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h1>BinX</h1>
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
