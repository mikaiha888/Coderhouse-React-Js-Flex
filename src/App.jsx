import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

import Admin from "./pages/Admin";
import Cart from "./pages/Cart/Cart";
import Landing from "./pages/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="container">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/products"
            element={<ItemListContainer greeting="Bienvenidos" />}
          />
          <Route
            path="/category/:category"
            element={<ItemListContainer greeting="Bienvenidos" />}
          />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
