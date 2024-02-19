import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const productRef = doc(db, "products", id);
    const fetchData = async () => {
      try {
        const snapshot = await getDoc(productRef);
        const productFormatted = { id: snapshot.id, ...snapshot.data() };
        setProduct(productFormatted);
      } catch (error) {
        console.log(err);
      }
    };
    fetchData()
  }, [id]);

  return (
    <div className="ItemDetailContainer">
      <ItemDetail product={product} />
    </div>
  );
};
export default ItemDetailContainer;
