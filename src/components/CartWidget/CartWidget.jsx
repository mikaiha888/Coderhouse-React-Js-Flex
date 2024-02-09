import cart from "../../assets/cart.svg";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext);

  return (
    <Link to={'/cart'}>
      <div>
        <img src={cart} alt="cart" />
        <span>{getQuantity()}</span>
      </div>
    </Link>
  );
};
export default CartWidget;
