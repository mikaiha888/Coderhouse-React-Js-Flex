import './CartWidget.css'
import cart from "../../assets/cart.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <Link to={"/cart"} className='cart-widget'>
      <img src={cart} alt="cart" />
      <span>{getQuantity()}</span>
    </Link>
  );
};
export default CartWidget;
