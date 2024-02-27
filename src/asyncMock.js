export const products = [
  {
    id: 1,
    name: "Silla de Comedor",
    price: 5000.0,
    category: "sillas",
    img: "url_de_la_imagen_silla.jpg",
    stock: 20,
    description: "Una cómoda silla para tu hogar. Ideal para disfrutar de deliciosas comidas en familia o con amigos."
  },
  {
    id: 2,
    name: "Mesa de Comedor",
    price: 25000,
    category: "mesas",
    img: "url_de_la_imagen_mesa.jpg",
    stock: 50,
    description: "Una elegante mesa para tus comidas en familia. Con un diseño moderno que realza la decoración de tu hogar."
  },
  {
    id: 3,
    name: "Escritorio Simple",
    price: 80000,
    category: "escritorios",
    img: "url_de_la_imagen_escritorio.jpg",
    stock: 30,
    description: "Un práctico escritorio para trabajar o estudiar. Cuenta con amplio espacio y un diseño funcional para tu comodidad."
  },
  {
    id: 4,
    name: "Lámpara de Escritorio",
    price: 9000,
    category: "accesorios",
    img: "url_de_la_imagen_lampara.jpg",
    stock: 20,
    description: "Una lámpara para iluminar tu espacio de trabajo. Con un diseño moderno y ajustable, perfecta para concentrarte en tus tareas."
  },
  {
    id: 5,
    name: "Espejo Moderno",
    price: 6000,
    category: "accesorios",
    img: "url_de_la_imagen_espejo.jpg",
    stock: 30,
    description: "Un espejo moderno que añade estilo a tu espacio. Perfecto para verificar tu look antes de salir de casa."
  },
  {
    id: 6,
    name: "Mesa Ratona Redonda",
    price: 20000,
    category: "mesas",
    img: "url_de_la_imagen_mesa.jpg",
    stock: 40,
    description: "Una mesa ratona redonda que complementa tu sala de estar. Ideal para disfrutar de agradables momentos con familia y amigos."
  },
  {
    id: 7,
    name: "Escritorio Plegable",
    price: 38000,
    category: "escritorios",
    img: "url_de_la_imagen_escritorio.jpg",
    stock: 10,
    description:"Un escritorio plegable que ahorra espacio. Perfecto para ambientes más pequeños, brindando versatilidad y funcionalidad."
  },
  {
    id: 8,
    name: "Silla de Escritorio",
    price: 8000,
    category: "sillas",
    img: "url_de_la_imagen_silla.jpg",
    stock: 30,
    description: "Una silla de escritorio cómoda y ergonómica. Diseñada para brindar soporte durante largas horas de trabajo o estudio."
  },
  {
    id: 9,
    name: "Estante Flotante",
    price: 6000,
    category: "accesorios",
    img: "url_de_la_imagen_estante.jpg",
    stock: 50,
    description: "Un estante flotante que realza la decoración de tus paredes. Perfecto para exhibir libros, fotos y decoraciones."
  },
  {
    id: 10,
    name: "Escritorio de oficina",
    price: 6000,
    category: "escritorios",
    img: "url_de_la_imagen_escritorios.jpg",
    stock: 50,
    description: "Escritorio para oficina con diseño moderno y amplia superficie. Ideal para trabajar o estudiar cómodamente, ofreciendo funcionalidad y estilo."
  },
  {
    id: 11,
    name: "Silla Ejecutiva",
    price: 9500,
    category: "sillas",
    img: "url_de_la_imagen_silla_ejecutiva.jpg",
    stock: 25,
    description: "Silla ejecutiva de alta gama para tu espacio de trabajo. Con detalles de cuero y un diseño elegante, y equipada con ajustes personalizables."
  },
  {
    id: 12,
    name: "Silla de Estudio",
    price: 5500.0,
    category: "sillas",
    img: "url_de_la_imagen_silla_estudio.jpg",
    stock: 15,
    description: "Silla ergonómica diseñada para el estudio. Su estructura resistente y acabados modernos proporcionan un asiento cómodo para largas horas de trabajo."
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        products.filter(
          (product) =>
            product.category.toLowerCase() === categoryId.toLowerCase()
        )
      );
    }, 500);
  });
};
