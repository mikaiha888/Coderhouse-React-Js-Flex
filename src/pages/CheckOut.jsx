import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Navigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

const CheckOut = () => {
  const { cart, clearCart, getTotal } = useContext(CartContext);
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    name: "",
    adress: "",
    email: "",
  });

  const orderRef = collection(db, "orders");

  const order = {
    cart,
    client: values,
    time: new Date(),
    total: getTotal(),
  };

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: [e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.name.length < 3) {
      alert("El nombre es muy corto");
      return;
    }
    if (values.adress.length < 6) {
      alert("La dirección es muy corta");
      return;
    }
    if (values.email.length < 3) {
      alert("El email es muy corto");
      return;
    }
  };

  addDoc(orderRef, order)
    .then((doc) => {
      setOrderId(doc.id);
    })
    .catch((err) => console.log(err));

  cart.forEach((item) => {
    const docRef = doc(db, "products", item.id);

    getDoc(docRef).then((doc) => {
      let stock = doc.data().stock;
      if (stock - item.cantidad >= 0) {
        updateDoc(docRef, { stock: stock - item.cantidad });
      } else {
        alert(`No hay stock de ${doc.data().name}`);
      }
    });
  });

  if (orderId)
    <div>
      <h3>Tu orden se generó correctamente</h3>
      <p>
        Guardá el número de orden <strong>{orderId}</strong>
      </p>
    </div>;

  if (cart.length === 0) <Navigate to={"/"} />;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleInputChange}
          required
          placeholder="Nombre"
        />
        <input
          type="text"
          name="adress"
          onChange={handleInputChange}
          required
          placeholder="Dirección"
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          required
          placeholder="Email"
        />
        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  );
};
export default CheckOut;
