import "./ItemDetail.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const [counter, setCounter] = useState(1);

  const { addItem } = useContext(CartContext);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubstract = () => {
    setCounter(counter + 1);
  };

  const handleAddToCart = () => {
    const newItem = {...product, quantity:counter}
        addToCart(newItem)
  };

  return (
    <>
      {product && (
        <div className="ItemDetail">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Categoría: {product.category}</p>
          <p>Precio: ${product.price}</p>
          <p>Stock disponible: {product.stock}</p>
          <p>Descripción: {dproduct.escription}</p>

          {isInCart(product.id) ? (
            <Link to="/cart">
              <Button label="Ir al Carrito" callback={handleAdd} />
            </Link>
          ) : (
            <>
              <button onClick={handleSubstract}>{counter}</button>
              <div>{counter}</div>
              <button onClick={handleSubstract}>-</button>
              <button onClick={handleAddToCart}>Añadir al carrito</button>
            </>
          )}
        </div>
      )}
    </>
  );
};
export default ItemDetail;
