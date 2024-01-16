import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
    };

    addItem(item, quantity);
  };

  return (
    <div className="ItemDetail">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Categoría: {category}</p>
      <p>Precio: ${price}</p>
      <p>Stock disponible: {stock}</p>
      <p>Descripción: {description}</p>

      {quantityAdded > 0 ? (
        <Link to="/cart">Terminar compra</Link>
      ) : (
        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
      )}
    </div>
  );
};
export default ItemDetail;
