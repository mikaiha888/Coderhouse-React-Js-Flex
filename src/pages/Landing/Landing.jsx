import "./Landing.css";
import { useRef } from "react";

import itemSillon from "../../assets/item-sillon.png";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Landing = () => {
  const myElementRef = useRef(null);

  const handleScrollToElement = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="landing">
      <div className="row">
        <div className="col-1">
          <h2>
            Tu hogar{" "}
            <span>
              <br />
              con estilo
            </span>
          </h2>
          <p>
            Descubre nuestra exclusiva colección de muebles que fusionan
            elegancia y funcionalidad. Encuentra la armonía perfecta para tu
            espacio en nuestro catálogo único de diseño y confort.
          </p>
          <button onClick={handleScrollToElement}>Ver productos</button>
        </div>
        <div className="col-2">
          <img src={itemSillon} alt="sillon-nordico" />
        </div>
      </div>
      <hr />
      <ItemListContainer greeting="Bienvenidos" myElementRef={myElementRef} />
    </div>
  );
};
export default Landing;
