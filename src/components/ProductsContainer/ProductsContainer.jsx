import "./ProductsContainer.css";
import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const ProductsContainer = () => {
  const { cart, removeItem } = useContext(CartContext);
  return (
    <div className="products-container">
      <h2>Tu Carrito</h2>
      <ul className="flex">
        <li className="flex1">Producto</li>
        <li className="flex2">Unidad</li>
        <li className="flex3">Cantidad</li>
        <li className="flex4">Precio total</li>
        <li className="flex5"></li>
      </ul>

      {cart.length ? (
        cart.map((item) => (
          <React.Fragment key={item.name}>
            <hr />
            <div className="flex">
              <div className="flex1">
                <img src="item.img" alt="item.name" />
                <h4>{item.name}</h4>
                <span>Categoría {item.category}</span>
              </div>
              <span className="flex2">${item.price}</span>
              <span className="flex3">{item.quantity}</span>
              <span className="flex4">${item.price * item.quantity}</span>
              <button className="flex5" onClick={() => removeItem(item.id)}>
                X
              </button>
            </div>
          </React.Fragment>
        ))
      ) : (
        <>
            <hr />
            <p className="empty-cart">Tu carrito está vacío</p>
        </>
      )}
    </div>
  );
};
export default ProductsContainer;
