import "./CheckoutContainer.css";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";

const CheckoutContainer = ({ handleScrollToElement }) => {
  const { cart, getTotal, clearCart } = useContext(CartContext);
  return cart.length ? (
    <div className="checkout-container">
      <h2>¡Ya casi estamos!</h2>
      <div className="total-content">
        <div>
          <h3>Subtotal</h3>
          <span>$ {getTotal()}</span>
        </div>
        <div>
          <h3>Envío</h3>
          <span>$ 3500</span>
        </div>
        <hr />
        <div>
          <h3>Total</h3>
          <span>$ {getTotal() + 3500}</span>
        </div>
      </div>
      <hr />
      <button className="checkout-button" onClick={handleScrollToElement}>
        Terminar mi compra
      </button>
      <div className="checkout-clear-button" onClick={clearCart}>
        Vaciar carrito
      </div>
    </div>
  ) : (
    <></>
  );
};
export default CheckoutContainer;
