import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="Item">
          <img src={img} alt={name}/>
          <h3>{name}</h3>
          <p>Precio: ${price}</p>
          <p>Stock disponible: {stock}</p>
          <Link to={`/item/${id}`}>Ver detalle</Link>
    </article>
  )
}
export default Item