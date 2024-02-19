import "./ItemCount.css";
import { useState, useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ItemCount = ({ stock, product }) => {
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useContext(CartContext);

  const handleAddToCart = () => {
    const newItem = {...product, quantity: quantity}
    addItem(newItem, quantity)
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
    <div className="Counter">
        <div className="Controls">
            <button className="Button" onClick={handleDecrement}>-</button>
            <h4 className="Quantity">{quantity}</h4>
            <button className="Button" onClick={handleIncrement}>+</button>
        </div>
        <div>
            <button className="Button" onClick={() => handleAddToCart(quantity)} disabled={!stock} >
                Agregar al carrito
            </button>
        </div>
    </div>
    )
};
export default ItemCount;
