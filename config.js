const restaurantConfig = {
    info: {
        name: "Augusto Pastas",
        location: "COFICO",
        subtitle: "PASTAS FRESCAS Y COMIDAS 100% CASERAS",
        since: "2011",
        description: "Pastas frescas y comidas 100% caseras desde 2011. Fiambres, pastas artesanales, salsas y postres.",
        keywords: "pastas frescas, comida casera, fiambres, salsas, postres, Córdoba, COFICO",
        social: {
            instagram: {
                url: "https://instagram.com/augustopastas",
                handle: "@augustopastas"
            },
            whatsapp: {
                number: "5493514000000",
                message: "Hola! Me interesa consultar sobre: "
            }
        },
        images: {
            logo: "img/logo.png",
            favicon: "img/favicon.svg",
            decorationLeft: "img/dibujo2.png",
            decorationRight: "img/dibujo1.png"
        },
        theme: {
            primaryColor: "#D32F2F", // Rojo intenso del menú
            backgroundColor: "#FFF8F0", // Crema muy suave/Blanco
            textColor: "#2C2C2C",
            accentColor: "#B32D2D"
        }
    },
    menuSections: [
        {
            id: "para-comenzar",
            title: "Para Comenzar",
            note: "*(La porción)",
            items: [
                "combinado-de-fiambres-y-conservas-x-2-pers",
                "jamon-crudo",
                "lomito-horneado-ahumado",
                "salame-de-oncativo",
                "mortadela-con-pistachos",
                "queso-holanda",
                "queso-azul",
                "queso-parmesano",
                "queso-camembert",
                "queso-marinado-en-aceite-ahumado",
                "hongos-en-escabeche",
                "pepinillos-en-vinagre",
                "olivas-negras-picantes",
                "tomates-confitados-al-romero",
                "pimientos-asados"
            ],
            subsections: [
                {
                    title: "Opción de Carne",
                    items: ["bife-de-chorizo"]
                }
            ]
        },
        {
            id: "pastas",
            title: "Pastas",
            banner: "Cubiertos para compartir: $4.000",
            items: [
                "spaghettis",
                "tagliatelles",
                "fetuccinis-verdes",
                "noquis",
                "malfattis-de-ricota-y-espinaca",
                "ravioles-de-ricota-y-nuez",
                "ravioles-de-ricota-y-espinaca",
                "ravioles-de-carne-y-verdura",
                "sorrentinos-de-ricota-jamon-y-nuez",
                "sorrentinos-de-jamon-y-queso",
                "sorrentinos-caprese",
                "sorrentinos-de-cuatro-quesos",
                "sorrentinos-de-mozzarella-hongos-y-castanas-de-caju",
                "sorrentinos-de-salmon-ricota-y-camarones",
                "sorrentinos-de-jamon-crudo-mozzarella-olivas-negras-y-verdeo",
                "combinado-de-sorrentinos",
                "canelones-de-carne-y-verduras",
                "canelones-de-cordero-y-espinaca",
                "canelones-de-crema-de-choclo",
                "panzottis-rossi",
                "panzottis-verdes",
                "creste-di-gallo",
                "tortellinis-de-ricota-chorizo-colorado-panceta-ahumada-queso-parmesano-y-puerro-ahumado",
                "lasana-tradicional"
            ]
        },
        {
            id: "salsas",
            title: "Salsas",
            subsections: [
                {
                    title: "Salsas Básicas",
                    note: "(Incluidas en el precio)",
                    type: "list",
                    items: ["Salsa Filetto", "Salsa Mixta", "Salsa Blanca"]
                },
                {
                    title: "Salsas Especiales",
                    items: [
                        "cuatro-quesos",
                        "salteado-de-cubos-de-tomate",
                        "crema-de-puerro-y-panceta",
                        "salsa-de-pollo-y-tomate-estofado",
                        "albondigas-en-salsa-de-tomate",
                        "carne-de-res-braseada-en-tomate",
                        "abadejo-calamar-langostinos-y-mejillones",
                        "crema-de-champinones-al-oporto",
                        "pesto",
                        "bolonesa",
                        "crema",
                        "adicional-de-crema",
                        "adicional-gratinado",
                        "crema-de-cabutia-gratinada"
                    ]
                }
            ]
        },
        {
            id: "postres",
            title: "Postres",
            items: [
                "flan-casero",
                "tiramisu",
                "bombon-escoces",
                "copa-helada"
            ]
        },
        {
            id: "bebidas",
            title: "Aperitivos",
            description: "Una copa tradicional, servida para abrir el apetito y preparar tu paladar antes de los deliciosos sabores que estás a punto de disfrutar.",
            items: [
                "cinzano-soda-limon",
                "carpano-bianco-soda-limon",
                "martini-bianco-tonica-limon",
                "carpano-rosso-soda-naranja",
                "martini-rosso-naranja-aceituna",
                "vermut-ferroviario",
                "negroni",
                "aperol-champagne-naranja",
                "cynar-pomelo-limon-menta",
                "fernet-branca-coca",
                "campari-naranja",
                "copa-espumante",
                "whisky-johnnie-walker",
                "cervezas-lata",
                "copa-vino"
            ],
            subsections: [
                {
                    title: "Bebidas sin Alcohol",
                    items: [
                        "agua-sin-gas",
                        "agua-con-gas",
                        "agua-saborizada",
                        "gaseosas",
                        "jarra-limonada-menta",
                        "vaso-limonada"
                    ]
                }
            ]
        }
    ],
    items: {
        // PARA COMENZAR
        "combinado-de-fiambres-y-conservas-x-2-pers": {
            name: "Combinado de Fiambres y Conservas x 2 Pers.",
            price: "23.000",
            description: "Una selección especial de nuestros mejores fiambres artesanales y conservas caseras, perfecta para compartir entre dos personas.",
            ingredients: ["Jamón crudo", "Salame de Oncativo", "Queso Holanda", "Queso Parmesano", "Hongos en escabeche", "Olivas negras", "Tomates confitados", "Pan artesanal"],
            serving: "2 personas",
            type: "Entrada para compartir",
            icon: "🍖"
        },
        "jamon-crudo": {
            name: "Jamón Crudo",
            price: "7.700",
            description: "Finas lonchas de jamón crudo de primera calidad.",
            ingredients: ["Jamón crudo seleccionado"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "�"
        },
        "lomito-horneado-ahumado": {
            name: "Lomito Horneado Ahumado",
            price: "5.500",
            description: "Lomito tierno horneado con un delicado toque ahumado.",
            ingredients: ["Lomito de cerdo", "Ahumado natural"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "🥩"
        },
        "salame-de-oncativo": {
            name: "Salame de Oncativo",
            price: "6.600",
            description: "Auténtico salame de Oncativo, una especialidad cordobesa.",
            ingredients: ["Carne de cerdo", "Especias"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "�"
        },
        "mortadela-con-pistachos": {
            name: "Mortadela con Pistachos",
            price: "7.700",
            description: "Mortadela premium con pistachos naturales.",
            ingredients: ["Carne de cerdo", "Pistachos"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "�"
        },
        "queso-holanda": {
            name: "Queso Holanda",
            price: "6.600",
            description: "Queso holanda de textura firme y sabor suave.",
            ingredients: ["Queso holanda"],
            serving: "1 porción",
            type: "Queso",
            icon: "🧀"
        },
        "queso-azul": {
            name: "Queso Azul",
            price: "6.300",
            description: "Queso azul de carácter intenso.",
            ingredients: ["Queso azul"],
            serving: "1 porción",
            type: "Queso",
            icon: "🧀"
        },
        "queso-parmesano": {
            name: "Queso Parmesano",
            price: "7.800",
            description: "Queso parmesano de larga maduración.",
            ingredients: ["Queso parmesano"],
            serving: "1 porción",
            type: "Queso",
            icon: "🧀"
        },
        "queso-camembert": {
            name: "Queso Camembert",
            price: "14.000",
            description: "Queso francés de pasta blanda y corteza florida.",
            ingredients: ["Queso camembert"],
            serving: "1 porción",
            type: "Queso premium",
            icon: "�"
        },
        "queso-marinado-en-aceite-ahumado": {
            name: "Queso Marinado en Aceite Ahumado",
            price: "6.000",
            description: "Cubos de queso marinados en aceite de oliva con toque ahumado.",
            ingredients: ["Queso", "Aceite ahumado", "Hierbas"],
            serving: "1 porción",
            type: "Queso marinado",
            icon: "�"
        },
        "hongos-en-escabeche": {
            name: "Hongos en Escabeche",
            price: "11.000",
            description: "Hongos frescos conservados en escabeche casero.",
            ingredients: ["Hongos", "Vinagre", "Especias"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🍄"
        },
        "pepinillos-en-vinagre": {
            name: "Pepinillos en Vinagre",
            price: "4.000",
            description: "Pepinillos crujientes encurtidos en vinagre.",
            ingredients: ["Pepinillos", "Vinagre"],
            serving: "1 porción",
            type: "Conserva",
            icon: "�"
        },
        "olivas-negras-picantes": {
            name: "Olivas Negras Picantes",
            price: "4.000",
            description: "Aceitunas negras con un toque picante.",
            ingredients: ["Aceitunas negras", "Ají"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🫒"
        },
        "tomates-confitados-al-romero": {
            name: "Tomates Confitados al Romero",
            price: "5.000",
            description: "Tomates cherry confitados lentamente con romero.",
            ingredients: ["Tomates cherry", "Romero", "Aceite de oliva"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🍅"
        },
        "pimientos-asados": {
            name: "Pimientos Asados",
            price: "8.000",
            description: "Pimientos rojos asados y marinados.",
            ingredients: ["Pimientos", "Ajo", "Aceite"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🫑"
        },
        "bife-de-chorizo": {
            name: "Bife de Chorizo",
            price: "18.000",
            description: "Corte premium de bife de chorizo a la parrilla.",
            ingredients: ["Bife de chorizo"],
            serving: "1 porción",
            type: "Carne",
            icon: "�"
        },

        // PASTAS
        "spaghettis": {
            name: "Spaghettis",
            price: "10.600",
            description: "Los clásicos spaghettis de pasta fresca.",
            type: "Pasta larga",
            icon: "🍝"
        },
        "tagliatelles": {
            name: "Tagliatelles",
            price: "10.600",
            description: "Cintas anchas de pasta fresca.",
            type: "Pasta larga",
            icon: "🍝"
        },
        "fetuccinis-verdes": {
            name: "Fetuccinis Verdes",
            price: "12.200",
            description: "Cintas de pasta fresca con espinaca.",
            type: "Pasta larga",
            icon: "🍝"
        },
        "noquis": {
            name: "Ñoquis",
            price: "11.000",
            description: "Ñoquis de papa caseros.",
            type: "Pasta de papa",
            icon: "🥔"
        },
        "malfattis-de-ricota-y-espinaca": {
            name: "Malfattis de Ricota y Espinaca",
            price: "13.400",
            description: "Bocados de ricota y espinaca sin masa.",
            type: "Pasta rellena",
            icon: "💚"
        },
        "ravioles-de-ricota-y-nuez": {
            name: "Ravioles de Ricota y Nuez",
            price: "12.200",
            description: "Ravioles rellenos de ricota y nuez.",
            type: "Pasta rellena",
            icon: "�"
        },
        "ravioles-de-ricota-y-espinaca": {
            name: "Ravioles de Ricota y Espinaca",
            price: "12.200",
            description: "Ravioles rellenos de ricota y espinaca.",
            type: "Pasta rellena",
            icon: "🥟"
        },
        "ravioles-de-carne-y-verdura": {
            name: "Ravioles de Carne y Verdura",
            price: "13.200",
            description: "Ravioles rellenos de carne y verdura.",
            type: "Pasta rellena",
            icon: "🥟"
        },
        "sorrentinos-de-ricota-jamon-y-nuez": {
            name: "Sorrentinos de Ricota, Jamón y Nuez",
            price: "13.200",
            description: "Sorrentinos rellenos de ricota, jamón y nuez.",
            type: "Pasta rellena",
            icon: "🥟"
        },
        "sorrentinos-de-jamon-y-queso": {
            name: "Sorrentinos de Jamón y Queso",
            price: "14.900",
            description: "Sorrentinos clásicos de jamón y queso.",
            type: "Pasta rellena",
            icon: "🥟"
        },
        "sorrentinos-caprese": {
            name: "Sorrentinos Caprese",
            price: "15.700",
            description: "Sorrentinos de mozzarella, tomate y albahaca.",
            type: "Pasta rellena",
            icon: "🍅"
        },
        "sorrentinos-de-cuatro-quesos": {
            name: "Sorrentinos de Cuatro Quesos",
            price: "15.700",
            description: "Sorrentinos rellenos de cuatro quesos.",
            type: "Pasta rellena",
            icon: "🧀"
        },
        "sorrentinos-de-mozzarella-hongos-y-castanas-de-caju": {
            name: "Sorrentinos de Mozzarella, Hongos y Castañas",
            price: "17.800",
            description: "Relleno gourmet de hongos y castañas.",
            type: "Pasta rellena premium",
            icon: "🍄"
        },
        "sorrentinos-de-salmon-ricota-y-camarones": {
            name: "Sorrentinos de Salmón, Ricota y Camarones",
            price: "17.800",
            description: "Relleno de frutos de mar.",
            type: "Pasta rellena premium",
            icon: "🦐"
        },
        "sorrentinos-de-jamon-crudo-mozzarella-olivas-negras-y-verdeo": {
            name: "Sorrentinos de Jamón Crudo y Olivas",
            price: "17.000",
            description: "Relleno de jamón crudo, mozzarella y olivas negras.",
            type: "Pasta rellena premium",
            icon: "🥟"
        },
        "combinado-de-sorrentinos": {
            name: "Combinado de Sorrentinos",
            price: "17.000",
            description: "Selección variada de sorrentinos.",
            type: "Pasta rellena variada",
            icon: "�"
        },
        "canelones-de-carne-y-verduras": {
            name: "Canelones de Carne y Verduras",
            price: "16.500",
            description: "Canelones gratinados de carne y verdura.",
            type: "Pasta al horno",
            icon: "🥘"
        },
        "canelones-de-cordero-y-espinaca": {
            name: "Canelones de Cordero y Espinaca",
            price: "19.000",
            description: "Canelones rellenos de cordero braseado.",
            type: "Pasta al horno premium",
            icon: "🥘"
        },
        "canelones-de-crema-de-choclo": {
            name: "Canelones de Crema de Choclo",
            price: "16.500",
            description: "Canelones vegetarianos de choclo.",
            type: "Pasta al horno",
            icon: "🌽"
        },
        "panzottis-rossi": {
            name: "Panzottis Rossi",
            price: "15.400",
            description: "Masa roja, relleno de calabaza y queso.",
            type: "Pasta rellena",
            icon: "🎃"
        },
        "panzottis-verdes": {
            name: "Panzottis Verdes",
            price: "15.400",
            description: "Masa verde, relleno de espinaca y ricota.",
            type: "Pasta rellena",
            icon: "🥟"
        },
        "creste-di-gallo": {
            name: "Creste di Gallo",
            price: "17.000",
            description: "Pasta con forma de cresta, rellena de berenjena.",
            type: "Pasta rellena especial",
            icon: "�"
        },
        "tortellinis-de-ricota-chorizo-colorado-panceta-ahumada-queso-parmesano-y-puerro-ahumado": {
            name: "Tortellinis Especiales",
            price: "19.200",
            description: "Relleno complejo de chorizo, panceta y quesos.",
            type: "Pasta rellena premium",
            icon: "�"
        },
        "lasana-tradicional": {
            name: "Lasaña Tradicional",
            price: "17.000",
            description: "Lasaña de carne, salsa blanca y queso.",
            type: "Pasta al horno",
            icon: "🥘"
        },

        // SALSAS
        "cuatro-quesos": { name: "Cuatro Quesos", price: "2.300" },
        "salteado-de-cubos-de-tomate": { name: "Salteado de Tomate y Hierbas", price: "3.000" },
        "crema-de-puerro-y-panceta": { name: "Crema de Puerro y Panceta", price: "3.000" },
        "salsa-de-pollo-y-tomate-estofado": { name: "Pollo y Tomate Estofado", price: "6.000" },
        "albondigas-en-salsa-de-tomate": { name: "Albóndigas en Salsa", price: "7.000" },
        "carne-de-res-braseada-en-tomate": { name: "Carne Braseada en Tomate", price: "8.200" },
        "abadejo-calamar-langostinos-y-mejillones": { name: "Frutos de Mar", price: "9.100" },
        "crema-de-champinones-al-oporto": { name: "Crema de Champiñones", price: "6.100" },
        "pesto": { name: "Pesto", price: "3.300" },
        "bolonesa": { name: "Boloñesa", price: "3.900" },
        "crema": { name: "Crema", price: "3.300" },
        "adicional-de-crema": { name: "Adicional Crema", price: "2.200" },
        "adicional-gratinado": { name: "Adicional Gratinado", price: "4.400" },
        "crema-de-cabutia-gratinada": { name: "Crema de Cabutia", price: "4.600" },

        // POSTRES
        "flan-casero": {
            name: "Flan Casero",
            price: "5.100",
            description: "Flan casero con dulce de leche o crema.",
            type: "Postre",
            icon: "🍮"
        },
        "tiramisu": {
            name: "Tiramisú",
            price: "6.900",
            description: "Postre italiano de café y mascarpone.",
            type: "Postre",
            icon: "☕"
        },
        "bombon-escoces": {
            name: "Bombón Escocés",
            price: "7.000",
            description: "Bombón helado con chocolate.",
            type: "Postre helado",
            icon: "�"
        },
        "copa-helada": {
            name: "Copa Helada",
            price: "9.000",
            description: "Helado con brownie y frutos secos.",
            type: "Postre helado",
            icon: "�"
        },

        // BEBIDAS
        "cinzano-soda-limon": { name: "Cinzano, Soda y Limón", price: "6.600" },
        "carpano-bianco-soda-limon": { name: "Carpano Bianco, Soda y Limón", price: "6.600" },
        "martini-bianco-tonica-limon": { name: "Martini Bianco, Tónica y Limón", price: "6.600" },
        "carpano-rosso-soda-naranja": { name: "Carpano Rosso, Soda y Naranja", price: "6.600" },
        "martini-rosso-naranja-aceituna": { name: "Martini Rosso, Naranja y Aceituna", price: "6.600" },
        "vermut-ferroviario": { name: "Vermut Ferroviario", price: "6.600" },
        "negroni": { name: "Negroni", price: "8.500" },
        "aperol-champagne-naranja": { name: "Aperol Spritz", price: "8.000" },
        "cynar-pomelo-limon-menta": { name: "Cynar Julep", price: "8.000" },
        "fernet-branca-coca": { name: "Fernet con Coca", price: "8.000" },
        "campari-naranja": { name: "Campari con Naranja", price: "8.000" },
        "copa-espumante": { name: "Copa Espumante", price: "5.200" },
        "whisky-johnnie-walker": { name: "Whisky Johnnie Walker", price: "17.000" },
        "cervezas-lata": { name: "Cerveza (Lata)", price: "5.000" },
        "copa-vino": { name: "Copa de Vino", price: "4.500" },
        "agua-sin-gas": { name: "Agua sin Gas", price: "3.300" },
        "agua-con-gas": { name: "Agua con Gas", price: "3.300" },
        "agua-saborizada": { name: "Agua Saborizada", price: "3.300" },
        "gaseosas": { name: "Gaseosa", price: "3.300" },
        "jarra-limonada-menta": { name: "Jarra Limonada", price: "8.500" },
        "vaso-limonada": { name: "Vaso Limonada", price: "4.000" }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
