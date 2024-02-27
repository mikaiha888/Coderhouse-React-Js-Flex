import "./ItemCount.css";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemCount = ({ stock, product }) => {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    const newItem = { ...product, quantity: quantity };
    addItem(newItem, quantity);
  };

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="counter">
      <div className="counter-quantity">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button
        className="add-to-cart"
        onClick={() => handleAddToCart(quantity)}
        disabled={!stock}
      >
        Agregar al carrito
      </button>
    </div>
  );
};
export default ItemCount;
