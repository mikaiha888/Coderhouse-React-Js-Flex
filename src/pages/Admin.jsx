import { products } from "../asyncMock";
import { db } from "../services/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Admin = () => {
  const productRef = collection(db, "products");
  
  const handleUpload = () => {
    products.forEach((item) => {
      delete item.id;
      addDoc(productRef, item);
    });
  };
  
  return (
    <div>
      <button onClick={handleUpload}>Subir productos</button>
    </div>
  );
};
export default Admin;
