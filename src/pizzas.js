// pizzas.js - Datos estáticos de las pizzas y del carrito de ejemplo
// Este archivo se usa como respaldo en caso de que la API no esté disponible
// y también para inicializar el carrito con algunos productos de muestra

// Array con todas las pizzas disponibles en la pizzería
export const pizzas = [
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes frescos, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P001",
    img: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-pizza-napolitana-pizza-napolitana-receta-pizza-2.jpg",
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    name: "napolitana",
    price: 5950,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes frescos, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P002",
    img: "https://img-global.cpcdn.com/recipes/c8a84ffca7fcb1ab/680x781cq80/pizza-espanola-foto-principal.jpg",
    ingredients: ["mozzarella", "tomates", "jamón", "choricillo"],
    name: "española",
    price: 7250,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes frescos, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P003",
    img: "https://www.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg",
    ingredients: ["mozzarella", "tomates", "salame", "orégano"],
    name: "salame",
    price: 5990,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes frescos, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P004",
    img: "https://recetasconsazon.com/wp-content/uploads/2024/02/Pizza-entera.jpg",
    ingredients: ["mozzarella", "salame", "aceitunas", "champiñones"],
    name: "cuatro estaciones",
    price: 9590,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes frescos, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P005",
    img: "https://cdn3.myrealfood.app/s3-myrealfood/recipes/ZY142L1nGS5HznNbgSfm/main_0_1697840364485.jpg",
    ingredients: ["mozzarella", "tomates cherry", "bacon", "orégano"],
    name: "bacon",
    price: 6450,
  },
  {
    desc: "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes frescos, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
    id: "P006",
    img: "https://salsatabasco.mx/img/recetas/_1200x630_crop_center-center_82_none/pollo-pizza.jpg?mtime=1519943166",
    ingredients: ["mozzarella", "pimientos", "pollo grillé", "orégano"],
    name: "pollo picante",
    price: 8500,
  },
];

// Simulación de un carrito de compras con algunas pizzas de ejemplo
// Se usa para inicializar el estado del carrito en App.jsx
export const pizzaCart = [
  {
    id: "P001",
    name: "napolitana",
    price: 5950,
    count: 1,
    img: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-receta-pizza-napolitana-pizza-napolitana-receta-pizza-2.jpg",
  },
  {
    id: "P002",
    name: "española",
    price: 7250,
    count: 1,
    img: "https://img-global.cpcdn.com/recipes/c8a84ffca7fcb1ab/680x781cq80/pizza-espanola-foto-principal.jpg",
  },
  {
    id: "P003",
    name: "salame",
    price: 5990,
    count: 1,
    img: "https://www.paulinacocina.net/wp-content/uploads/2024/10/receta-pizza-de-pepperoni-facil-1729847335.jpg",
  },
];
