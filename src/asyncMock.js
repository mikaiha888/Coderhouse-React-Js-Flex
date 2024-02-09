export const products = [
  {
    id: 1,
    name: "Silla",
    price: 5000.0,
    category: "Sillas",
    img: "url_de_la_imagen_silla.jpg",
    stock: 100,
    description: "Una cómoda silla para tu hogar.",
  },
  {
    id: 2,
    name: "Mesa de Comedor",
    price: 25000,
    category: "Mesas",
    img: "url_de_la_imagen_mesa.jpg",
    stock: 50,
    description: "Una elegante mesa para tus comidas en familia.",
  },
  {
    id: 3,
    name: "Escritorio",
    price: 80000,
    category: "Escritorios",
    img: "url_de_la_imagen_escritorio.jpg",
    stock: 30,
    description: "Un práctico escritorio para trabajar o estudiar.",
  },
  {
    id: 4,
    name: "Lámpara de Escritorio",
    price: 9000,
    category: "Accesorios",
    img: "url_de_la_imagen_lampara.jpg",
    stock: 50,
    description: "Una lámpara para iluminar tu espacio de trabajo.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id == productId));
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
