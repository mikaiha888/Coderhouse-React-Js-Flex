import "./ItemCount.css";
import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

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
            <button className="Button" onClick={() => onAdd(quantity)} disabled={!stock} >
                Agregar al carrito
            </button>
        </div>
    </div>
    )
};
export default ItemCount;
