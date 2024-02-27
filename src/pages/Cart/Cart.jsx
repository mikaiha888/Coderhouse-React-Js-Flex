import "./Cart.css";
import { useRef } from "react";

import CheckOut from "../CheckOut/CheckOut";
import ProductsContainer from "../../components/ProductsContainer/ProductsContainer";
import CheckoutContainer from "../../components/CheckoutContainer/CheckoutContainer";

const Cart = () => {
  const myElementRef = useRef(null);

  const handleScrollToElement = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="cart-container">
      <ProductsContainer />
      <CheckoutContainer handleScrollToElement={handleScrollToElement} />
      <CheckOut myElementRef={myElementRef} />
    </div>
  );
};
export default Cart;
