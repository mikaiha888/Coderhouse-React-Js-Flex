import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productRef = doc(db, "products", id);
    
    getDoc(productRef)
      .then((snapshot) => {
        const data = snapshot.data();
        const productFormatted = { id: snapshot.id, ...data };
        setProduct(productFormatted);
      })
      .catch((err) => {
        console.log(err);
      });

    // getProductById(id).then(res => setProducto(res))
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail {...product} />
    </div>
  );
};
export default ItemDetailContainer;
