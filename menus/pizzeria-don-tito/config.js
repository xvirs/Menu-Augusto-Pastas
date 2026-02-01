const restaurantConfig = {
    info: {
        name: "Pizzería Don Tito",
        location: "NUEVA CÓRDOBA",
        subtitle: "Pizza artesanal desde 1985",
        since: "1985",
        description: "Pizzas a la piedra con masa madre y ingredientes frescos. La tradición italiana en cada bocado.",
        keywords: "pizza, pizzería, artesanal, masa madre, córdoba, nueva córdoba",
        social: {
            instagram: {
                url: "https://instagram.com/pizzeriadontito",
                handle: "@pizzeriadontito"
            },
            whatsapp: {
                number: "5493515555555",
                message: "Hola! Quiero hacer un pedido."
            }
        },
        images: {
            logo: "img/logo.png",
            favicon: "img/favicon.svg",
            decorationLeft: "img/dibujo2.png",
            decorationRight: "img/dibujo1.png"
        },
        theme: {
            primaryColor: "#D84315",
            backgroundColor: "#FFF8E1",
            textColor: "#3E2723",
            accentColor: "#BF360C",
            fonts: {
                heading: "'Georgia', 'Times New Roman', Times, serif",
                body: "'Helvetica Neue', Helvetica, Arial, sans-serif"
            }
        },
        schedule: "Martes a Domingo 19 a 00hs",
        promo: {
            title: "MARTES DE MUZZA",
            description: "Todas las muzzarellas a mitad de precio.",
            note: "Solo para consumir en el local"
        }
    },
    menuSections: [
        {
            id: "pizzas-clasicas",
            title: "Pizzas Clásicas",
            items: [
                "muzzarella",
                "napolitana",
                "fugazzeta",
                "jamon-y-morrones"
            ]
        },
        {
            id: "pizzas-especiales",
            title: "Pizzas Especiales",
            items: [
                "cuatro-quesos",
                "rucula-y-jamon-crudo",
                "champinones-y-panceta",
                "vegetariana"
            ]
        },
        {
            id: "empanadas",
            title: "Empanadas",
            note: "*mínimo 3 unidades",
            items: [
                "empanada-carne",
                "empanada-jamon-queso",
                "empanada-caprese"
            ]
        },
        {
            id: "bebidas",
            title: "Bebidas",
            subsections: [
                {
                    title: "Cervezas",
                    items: [
                        "cerveza-artesanal-rubia",
                        "cerveza-artesanal-roja",
                        "cerveza-quilmes"
                    ]
                },
                {
                    title: "Sin Alcohol",
                    items: [
                        "agua-mineral",
                        "gaseosa-linea",
                        "limonada-casera"
                    ]
                }
            ]
        }
    ],
    items: {
        // PIZZAS CLÁSICAS
        "muzzarella": {
            name: "Muzzarella",
            price: "8.500",
            description: "La reina de las pizzas. Salsa de tomate casera, muzzarella fundida y orégano. Simple y perfecta.",
            ingredients: ["Masa madre", "Salsa de tomate", "Muzzarella", "Orégano"],
            allergens: "Gluten, lácteos",
            type: "Pizza clásica",
            pairing: "Cerveza Rubia: Refrescante y ligera.",
            icon: "🍕",
            image: "img/platos/muzzarella.webp"
        },
        "napolitana": {
            name: "Napolitana",
            price: "9.500",
            description: "Rodajas de tomate fresco sobre muzzarella derretida, ajo y un toque de albahaca.",
            ingredients: ["Masa madre", "Salsa de tomate", "Muzzarella", "Tomate fresco", "Ajo", "Albahaca"],
            allergens: "Gluten, lácteos",
            type: "Pizza clásica",
            pairing: "Cerveza Roja: Notas maltosas que complementan.",
            icon: "🍅",
            image: "img/platos/napolitana.webp"
        },
        "fugazzeta": {
            name: "Fugazzeta",
            price: "10.000",
            description: "Doble capa de masa rellena de muzzarella, cubierta con cebolla caramelizada. Un clásico porteño.",
            ingredients: ["Masa madre doble", "Muzzarella abundante", "Cebolla caramelizada"],
            allergens: "Gluten, lácteos",
            type: "Pizza clásica",
            icon: "🧅",
            image: "img/platos/fugazzeta.webp"
        },
        "jamon-y-morrones": {
            name: "Jamón y Morrones",
            price: "10.500",
            description: "Muzzarella, jamón cocido y morrones asados. Colorida y sabrosa.",
            ingredients: ["Masa madre", "Salsa de tomate", "Muzzarella", "Jamón cocido", "Morrones asados"],
            allergens: "Gluten, lácteos",
            type: "Pizza clásica",
            icon: "🫑",
            image: "img/platos/jamon-morrones.webp"
        },

        // PIZZAS ESPECIALES
        "cuatro-quesos": {
            name: "Cuatro Quesos",
            price: "12.500",
            description: "Muzzarella, roquefort, parmesano y provolone. Para los amantes del queso.",
            ingredients: ["Masa madre", "Muzzarella", "Roquefort", "Parmesano", "Provolone"],
            allergens: "Gluten, lácteos",
            type: "Pizza especial",
            pairing: "Cerveza Roja: Cuerpo para equilibrar los quesos.",
            icon: "🧀",
            image: "img/platos/cuatro-quesos.webp"
        },
        "rucula-y-jamon-crudo": {
            name: "Rúcula y Jamón Crudo",
            price: "14.000",
            description: "Base de muzzarella con rúcula fresca, jamón crudo y lascas de parmesano. Se hornea y se termina en frío.",
            ingredients: ["Masa madre", "Muzzarella", "Rúcula fresca", "Jamón crudo", "Parmesano en lascas"],
            allergens: "Gluten, lácteos",
            type: "Pizza especial",
            pairing: "Cerveza Rubia: Frescura para la rúcula.",
            icon: "🥬",
            image: "img/platos/rucula-jamon-crudo.webp"
        },
        "champinones-y-panceta": {
            name: "Champiñones y Panceta",
            price: "13.000",
            description: "Champiñones salteados y panceta crocante sobre muzzarella. Sabor intenso.",
            ingredients: ["Masa madre", "Salsa de tomate", "Muzzarella", "Champiñones", "Panceta"],
            allergens: "Gluten, lácteos",
            type: "Pizza especial",
            icon: "🍄",
            image: "img/platos/champinones-panceta.webp"
        },
        "vegetariana": {
            name: "Vegetariana",
            price: "11.500",
            description: "Tomate, muzzarella, berenjenas grilladas, zucchini, morrones y aceitunas negras.",
            ingredients: ["Masa madre", "Salsa de tomate", "Muzzarella", "Berenjena", "Zucchini", "Morrones", "Aceitunas"],
            allergens: "Gluten, lácteos",
            type: "Pizza especial",
            icon: "🥗",
            image: "img/platos/vegetariana.webp"
        },

        // EMPANADAS
        "empanada-carne": {
            name: "Empanada de Carne",
            price: "1.800",
            description: "Carne cortada a cuchillo, cebolla, huevo, aceituna y pasas. Receta tradicional.",
            ingredients: ["Masa casera", "Carne", "Cebolla", "Huevo", "Aceituna", "Pasas"],
            allergens: "Gluten, huevo",
            type: "Empanada",
            icon: "🥟"
        },
        "empanada-jamon-queso": {
            name: "Empanada de Jamón y Queso",
            price: "1.600",
            description: "Jamón cocido y queso cremoso. La favorita de los chicos.",
            ingredients: ["Masa casera", "Jamón cocido", "Queso cremoso"],
            allergens: "Gluten, lácteos",
            type: "Empanada",
            icon: "🥟"
        },
        "empanada-caprese": {
            name: "Empanada Caprese",
            price: "1.700",
            description: "Tomate, muzzarella y albahaca. Fresca y liviana.",
            ingredients: ["Masa casera", "Tomate", "Muzzarella", "Albahaca"],
            allergens: "Gluten, lácteos",
            type: "Empanada",
            icon: "🥟"
        },

        // BEBIDAS
        "cerveza-artesanal-rubia": {
            name: "Cerveza Artesanal Rubia",
            price: "4.500",
            description: "Cerveza rubia local, suave y refrescante. Pinta de 500ml.",
            type: "Cerveza",
            icon: "🍺"
        },
        "cerveza-artesanal-roja": {
            name: "Cerveza Artesanal Roja",
            price: "4.500",
            description: "Cerveza roja con notas maltosas y caramelo. Pinta de 500ml.",
            type: "Cerveza",
            icon: "🍺"
        },
        "cerveza-quilmes": {
            name: "Cerveza Quilmes",
            price: "3.000",
            description: "La clásica cerveza argentina. Botella 1 litro.",
            type: "Cerveza",
            icon: "🍺"
        },
        "agua-mineral": {
            name: "Agua Mineral",
            price: "2.000",
            description: "Agua mineral con o sin gas. 500ml.",
            type: "Bebida sin alcohol",
            icon: "💧"
        },
        "gaseosa-linea": {
            name: "Gaseosa Línea Coca-Cola",
            price: "2.500",
            description: "Coca-Cola, Sprite o Fanta. 500ml.",
            type: "Bebida sin alcohol",
            icon: "🥤"
        },
        "limonada-casera": {
            name: "Limonada Casera",
            price: "3.500",
            description: "Limonada exprimida al momento con menta fresca. Jarra 1 litro.",
            type: "Bebida sin alcohol",
            icon: "🍋"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
