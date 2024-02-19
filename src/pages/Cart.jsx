import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, getTotal, clearCart, removeItem } = useContext(CartContext);

  return (
    <div>
      {cart.map((item) => (
        <div key={item.name}>
          <h3>{item.name}</h3>
          <img src="item.img" alt="item.name" />
          <p>Precio: ${item.price}</p>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => removeItem(item.id)}></button>
        </div>
      ))}
      <h3>Total de compra $ {getTotal()}</h3>
      <hr />
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to={"/checkout"}>Terminar mi compra</Link>
    </div>
  );
};
export default Cart;
