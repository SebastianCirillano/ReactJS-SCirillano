const productos = [
    {
        id: "Hele456",
        nombre: "Helecho",
        stock: 5,
        precio: 18000,
        categoria: "exterior",
        imagen: "/img/Faitful-viveros-Plantas-Interior-Helecho-M19.jpg"
    },
    {
        id: "Mon456",
        nombre: "Monstera",
        stock: 10,
        precio: 11000,
        categoria: "interior",
        imagen: "/img/Faitful-viveros-Plantas-Interior-Monstera-M35-Eco.jpg"
    },
    {
        id: "Yucca678",
        nombre: "Yucca",
        stock: 15,
        precio: 10000,
        categoria: "exterior",
        imagen: "/img/Faitful-viveros-Plantas-Exterior-Yucca-E15.jpg"
    },
    {
        id: "Palm123",
        nombre: "Palmera Areca",
        stock: 4,
        precio: 17500,
        categoria: "interior",
        imagen: "/img/Faitful-viveros-Plantas-Interior-Palmito-M35.jpg"
    },
    {
        id: "Robu345",
        nombre: "Robusta",
        stock: 10,
        precio: 15000,
        categoria: "exterior",
        imagen: "/img/Faitful-viveros-Plantas-Exterior-Robusta-E5.jpg"
    },
    {
        id: "Lata987",
        nombre: "Latania",
        stock: 12,
        precio: 19000,
        categoria: "interior",
        imagen: "/img/Faitful-viveros-Plantas-Interior-Latania-M22-Eco.jpg"
    },
    {
        id: "Gris123",
        nombre: "Maceta Ceramica Gris",
        stock: 12,
        precio: 8000,
        categoria: "macetas",
        imagen: "/img/Faitful-viveros-maceta-ceramica-cono-fleur-gris-mate-1.jpg"
    },
    {
        id: "Azul123",
        nombre: "Maceta Ceramica Azul",
        stock: 12,
        precio: 8000,
        categoria: "macetas",
        imagen: "/img/Faitful-viveros-maceta-ceramica-cono-fleur-azul-1.jpg"
    },
    {
        id: "Negro123",
        nombre: "Maceta Ceramica Negra",
        stock: 12,
        precio: 8000,
        categoria: "macetas",
        imagen: "/img/Faitful-viveros-maceta-ceramica-cono-fleur-negro-mate-1.jpg"
    },
];

const obtenerProductos = new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
        resolve(productos);
    }, 1000);
});

export default obtenerProductos