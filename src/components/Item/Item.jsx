import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="Item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <p>Precio: ${price}</p>
        <p>Stock disponible: {stock}</p>
        <Link to={`/item/${id}`}>Ver detalle</Link>
      </div>
    </article>
  );
};
export default Item;
