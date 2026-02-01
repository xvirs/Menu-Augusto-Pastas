/**
 * TEMPLATE DE CONFIGURACIÓN PARA NUEVO CLIENTE
 *
 * Instrucciones:
 * 1. Copiar este archivo y renombrarlo como: nombrecliente.js
 * 2. Llenar todos los datos del cliente
 * 3. Crear carpeta /nombrecliente/index.html con redirect (copiar de /augusto/)
 * 4. Subir imágenes a /img/platos/ (o crear subcarpeta /img/nombrecliente/)
 *
 * URL final: tudominio.com/nombrecliente o tudominio.com/?cliente=nombrecliente
 */

const restaurantConfig = {
    info: {
        name: "Nombre del Local",
        location: "UBICACIÓN",
        subtitle: "Eslogan o subtítulo",
        since: "2020",
        description: "Descripción corta del local para SEO.",
        keywords: "palabras, clave, separadas, por, comas",
        social: {
            instagram: {
                url: "https://instagram.com/usuario",
                handle: "@usuario"
            },
            whatsapp: {
                number: "5493510000000",
                message: "Hola! Me interesa hacer una reserva."
            }
        },
        images: {
            logo: "img/logo.png",
            favicon: "img/favicon.svg",
            decorationLeft: "img/dibujo2.png",
            decorationRight: "img/dibujo1.png"
        },
        theme: {
            primaryColor: "#C62828",      // Color principal
            backgroundColor: "#F9F5EA",   // Color de fondo
            textColor: "#1A1A1A",         // Color del texto
            accentColor: "#B32D2D",       // Color de acento
            fonts: {
                heading: "'Georgia', 'Times New Roman', Times, serif",
                body: "'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
        },
        schedule: "Lunes a Viernes 12-22hs",
        promo: {
            title: "PROMO DEL DÍA",
            description: "Descripción de la promo.",
            note: "Nota adicional opcional"
        }
    },
    menuSections: [
        {
            id: "seccion-1",
            title: "Primera Sección",
            items: [
                "plato-1",
                "plato-2"
            ]
        },
        {
            id: "seccion-2",
            title: "Segunda Sección",
            note: "*nota opcional",
            items: [
                "plato-3"
            ]
        },
        {
            id: "bebidas",
            title: "Bebidas",
            subsections: [
                {
                    title: "Vinos",
                    items: ["vino-1", "vino-2"]
                },
                {
                    title: "Sin Alcohol",
                    items: ["bebida-1"]
                }
            ]
        }
    ],
    items: {
        "plato-1": {
            name: "Nombre del Plato",
            price: "5.000",
            description: "Descripción detallada del plato.",
            ingredients: ["Ingrediente 1", "Ingrediente 2", "Ingrediente 3"],
            allergens: "Gluten, lácteos",
            type: "Tipo de plato",
            pairing: "Sugerencia de maridaje con vino.",
            icon: "🍕",
            image: "img/platos/plato-1.webp"
        },
        "plato-2": {
            name: "Otro Plato",
            price: "7.500",
            description: "Otra descripción.",
            ingredients: ["Ingrediente A", "Ingrediente B"],
            type: "Tipo",
            icon: "🍝"
        },
        "plato-3": {
            name: "Tercer Plato",
            price: "4.000",
            description: "Descripción breve.",
            type: "Tipo",
            icon: "🥗"
        },
        "vino-1": {
            name: "Vino Tinto",
            price: "4.500",
            description: "Descripción del vino.",
            type: "Vino tinto",
            icon: "🍷"
        },
        "vino-2": {
            name: "Vino Blanco",
            price: "4.500",
            description: "Descripción del vino.",
            type: "Vino blanco",
            icon: "🍷"
        },
        "bebida-1": {
            name: "Limonada",
            price: "2.500",
            description: "Limonada casera.",
            type: "Bebida refrescante",
            icon: "🍋"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
