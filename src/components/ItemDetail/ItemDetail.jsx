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
        <>
          <div className="product-img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-content">
            <span><Link to="/products">products</Link> / <Link to="/products/escritorios">{product.category}</Link></span>
            <h3>{product.name}</h3>
            <h4>${product.price}</h4>
            <h4>Descripción</h4>
            <hr />
            <p>{product.description}</p>
            {product.stock <= 10 && product.stock > 1 && (
              <span>Quedan {product.stock} unidades disponibles</span>
            )}
            {product.stock === 1 && <p>¡Última unidad disponible!</p>}
            {isInCart(product.id) ? (
              <Link to="/cart">
                <button>Ir al Carrito</button>
              </Link>
            ) : (
              <ItemCount stock={product.stock} product={product} />
            )}
          </div>
        </>
      )}
    </>
  );
};
export default ItemDetail;
