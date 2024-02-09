import "./ItemList.css";

import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="ItemList">
      {products.length ? (
        products.map((product) => <Item key={product.id} {...product} />)
      ) : (
        <span>Cargar de nuevo</span>
      )}
    </div>
  );
};
export default ItemList;
