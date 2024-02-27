import "./ItemListContainer.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, query, where, collection } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";

import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting, myElementRef }) => {
  const { category } = useParams();
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productRef = category
        ? query(collection(db, "products"), where("category", "==", category))
        : collection(db, "products");
        
        const snapshot = await getDocs(productRef);

        const productsFormatted = snapshot.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });

        setProducts(productsFormatted);

        if (products.length > 0) {
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div ref={myElementRef} className="ItemListContainer">
      <h2>{greeting}</h2>
      {loading ? <div>Cargando..... </div> : <ItemList products={products} />}
    </div>
  );
};
export default ItemListContainer;
