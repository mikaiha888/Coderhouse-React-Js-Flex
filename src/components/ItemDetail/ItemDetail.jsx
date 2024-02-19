import "./ItemDetail.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { isInCart } = useContext(CartContext);
  return (
    <>
      {product && (
        <div className="ItemDetail">
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Categoría: {product.category}</p>
          <p>Precio: ${product.price}</p>
          <p>Stock disponible: {product.stock}</p>
          <p>Descripción: {product.description}</p>
          <ItemCount stock={product.stock} product={product} />
          {isInCart(product.id) && (
            <Link to="/cart">
              <button>Ir al Carrito</button>
            </Link>
          )}
        </div>
      )}
    </>
  );
};
export default ItemDetail;
