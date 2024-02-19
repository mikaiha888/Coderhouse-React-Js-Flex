import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import { db } from "../services/firebaseConfig";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";

import Form from "../components/Form/Form";

const CheckOut = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    adress: "",
    email: "",
  });

  const orderRef = collection(db, "orders");

  const order = {
    cart,
    client: userData,
    time: new Date(),
    total: getTotal(),
  };

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(orderRef, order);
      setOrderId(docRef.id);

      for (const item of cart) {
        const productDocRef = doc(db, "products", item.id);
        const productDoc = await getDoc(productDocRef);
        const stock = productDoc.data().stock;

        if (stock - item.quantity >= 0) {
          await updateDoc(productDocRef, { stock: stock - item.quantity });
        } else {
          alert(`No hay stock de ${productDoc.data().name}`);
        }
      }

      clearCart();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {orderId && (
        <div>
          <h3>Tu orden se generó correctamente</h3>
          <p>
            Guardá el número de orden <strong>{orderId}</strong>
          </p>
        </div>
      )}
      {cart.length === 0 && <Navigate to={"/"} />}
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        userData={userData}
      />
    </>
  );
};
export default CheckOut;
