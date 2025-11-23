const restaurantConfig = {
    info: {
        name: "La Veredita de Augusto",
        location: "COFICO",
        subtitle: "Con sabor a barrio",
        since: "2011",
        description: "Tapas italianas, vermuts y aperitivos. Un espacio para disfrutar el ritual del aperitivo italiano.",
        keywords: "tapas, vermut, spritz, italiano, cofico, aperitivo",
        social: {
            instagram: {
                url: "https://instagram.com/augustopastas",
                handle: "@augustopastas"
            },
            whatsapp: {
                number: "5493514000000",
                message: "Hola! Me interesa reservar en La Veredita."
            }
        },
        images: {
            logo: "img/logo.png",
            favicon: "img/favicon.svg",
            decorationLeft: "img/dibujo2.png",
            decorationRight: "img/dibujo1.png"
        },
        theme: {
            primaryColor: "#C62828", // Rojo de la marca
            backgroundColor: "#F9F5EA", // Crema del sitio web
            textColor: "#1A1A1A", // Negro suave
            accentColor: "#B32D2D",
            fonts: {
                heading: "'Courier New', Courier, monospace",
                body: "'Courier New', Courier, monospace"
            }
        },
        schedule: "Open - 18 a 21 hs",
        promo: {
            title: "¡PROMO FELICE!",
            description: "Elegí una tapa + una bebida y obtené 10% de descuento en el combo.",
            note: "¡IDEAL PARA COMPARTIR EL APERITIVO PERFECTO!"
        }
    },
    menuSections: [
        {
            id: "tapas-calientes",
            title: "Tapas Calientes",
            items: [
                "papas-bravas",
                "entrepanes-de-focaccia",
                "lomito-ahumado-queso-firmo-morrones-en-conserva-y-pesto-de-albahaca",
                "langostinos-al-oporto",
                "duo-de-tortellinis-y-cresta-di-gallo-gratinados",
                "mejillones-media-valva-al-vino-blanco",
                "camembert-graten-y-tomates-confitados"
            ]
        },
        {
            id: "tapas-frias",
            title: "Tapas Frías",
            items: [
                "olivas-negras-picantes",
                "champinones-en-escabeche",
                "plato-de-jamon-crudo",
                "salame-de-oncativo-y-focaccia",
                "queso-marinado-y-tomates-cherrys",
                "duo-de-bruschettas",
                "parmesano-con-pesto-de-albahaca"
            ]
        },
        {
            id: "bebidas",
            title: "Bebidas",
            note: "*por copa",
            subsections: [
                {
                    title: "Vinos Sugeridos",
                    items: [
                        "malbec-joven",
                        "cabernet",
                        "sauvignon-blanc",
                        "espumante-rosado"
                    ]
                },
                {
                    title: "Vermuts",
                    items: [
                        "rosso-clasico-con-soda-y-piel-de-naranja",
                        "bianco-seco-con-oliva-y-romero",
                        "rosado-con-pomelo-y-menta",
                        "bianco-con-tonica-y-limon"
                    ]
                },
                {
                    title: "Spritz",
                    items: [
                        "aperol-spritz",
                        "campari-spritz",
                        "cynar-spritz",
                        "bianco-spritz"
                    ]
                },
                {
                    title: "Bebidas Refrescantes s/ Alcohol",
                    items: [
                        "limonada-con-menta",
                        "jugos-de-frutas",
                        "aguas-saborizadas",
                        "gaseosas"
                    ]
                }
            ]
        }
    ],
    items: {
        // TAPAS CALIENTES
        "papas-bravas": {
            name: "Papas Bravas",
            price: "6.500",
            description: "Papas crujientes con salsa brava picante.",
            type: "Tapa caliente",
            icon: "🥔"
        },
        "entrepanes-de-focaccia": {
            name: "Entrepanes de Focaccia",
            description: "Jamón crudo, oliva, tomates cherry, queso holanda y queso crema con hierbas",
            price: "7.400",
            type: "Tapa caliente",
            icon: "🥖"
        },
        "lomito-ahumado-queso-firmo-morrones-en-conserva-y-pesto-de-albahaca": {
            name: "Lomito Ahumado, Queso Firmo, Morrones en Conserva y Pesto de Albahaca",
            price: "7.400",
            description: "Combinación de lomito ahumado con quesos y vegetales.",
            type: "Tapa caliente",
            icon: "🥩"
        },
        "langostinos-al-oporto": {
            name: "Langostinos al Oporto",
            price: "15.000",
            description: "Langostinos salteados en salsa de oporto.",
            type: "Tapa caliente premium",
            icon: "🦐"
        },
        "duo-de-tortellinis-y-cresta-di-gallo-gratinados": {
            name: "Dúo de Tortellinis y Cresta di Gallo Gratinados",
            price: "8.800",
            description: "Pasta rellena gratinada al horno.",
            type: "Tapa caliente",
            icon: "🍝"
        },
        "mejillones-media-valva-al-vino-blanco": {
            name: "Mejillones Media Valva al Vino Blanco",
            price: "12.000",
            description: "Mejillones frescos cocidos en vino blanco.",
            type: "Tapa caliente",
            icon: "🦪"
        },
        "camembert-graten-y-tomates-confitados": {
            name: "Camembert Gratén y Tomates Confitados",
            price: "12.000",
            description: "Queso camembert gratinado con tomates confitados.",
            type: "Tapa caliente",
            icon: "🧀"
        },

        // TAPAS FRÍAS
        "olivas-negras-picantes": {
            name: "Olivas Negras Picantes",
            price: "4.000",
            description: "Aceitunas negras con un toque picante.",
            type: "Tapa fría",
            icon: "🫒"
        },
        "champinones-en-escabeche": {
            name: "Champiñones en Escabeche",
            price: "7.000",
            description: "Champiñones marinados en escabeche casero.",
            type: "Tapa fría",
            icon: "🍄"
        },
        "plato-de-jamon-crudo": {
            name: "Plato de Jamón Crudo",
            price: "7.000",
            description: "Finas lonchas de jamón crudo italiano.",
            type: "Tapa fría",
            icon: "🥓"
        },
        "salame-de-oncativo-y-focaccia": {
            name: "Salame de Oncativo y Focaccia",
            price: "5.600",
            description: "Salame artesanal con pan focaccia.",
            type: "Tapa fría",
            icon: "🥖"
        },
        "queso-marinado-y-tomates-cherrys": {
            name: "Queso Marinado y Tomates Cherrys",
            price: "5.600",
            description: "Cubos de queso marinado con tomates cherry.",
            type: "Tapa fría",
            icon: "🧀"
        },
        "duo-de-bruschettas": {
            name: "Dúo de Bruschettas",
            description: "Jamón crudo y escabeche de mar",
            price: "6.500",
            type: "Tapa fría",
            icon: "🍞"
        },
        "parmesano-con-pesto-de-albahaca": {
            name: "Parmesano con Pesto de Albahaca",
            price: "9.000",
            description: "Queso parmesano con pesto casero.",
            type: "Tapa fría",
            icon: "🧀"
        },

        // VINOS
        "malbec-joven": {
            name: "Malbec Joven",
            description: "(Suave y frutado)",
            price: "4.500",
            type: "Vino tinto",
            icon: "🍷"
        },
        "cabernet": {
            name: "Cabernet",
            description: "(Estructurado y aterciopelado)",
            price: "4.500",
            type: "Vino tinto",
            icon: "🍷"
        },
        "sauvignon-blanc": {
            name: "Sauvignon Blanc",
            description: "(Aromático y fresco)",
            price: "4.500",
            type: "Vino blanco",
            icon: "🍷"
        },
        "espumante-rosado": {
            name: "Espumante Rosado",
            description: "(Elegante y refrescante)",
            price: "4.500",
            type: "Espumante",
            icon: "🥂"
        },

        // VERMUTS
        "rosso-clasico-con-soda-y-piel-de-naranja": {
            name: "Rosso Clásico con Soda y Piel de Naranja",
            price: "6.600",
            type: "Vermut",
            icon: "🍹"
        },
        "bianco-seco-con-oliva-y-romero": {
            name: "Bianco Seco con Oliva y Romero",
            price: "6.600",
            type: "Vermut",
            icon: "🍹"
        },
        "rosado-con-pomelo-y-menta": {
            name: "Rosado con Pomelo y Menta",
            price: "6.600",
            type: "Vermut",
            icon: "🍹"
        },
        "bianco-con-tonica-y-limon": {
            name: "Bianco con Tónica y Limón",
            price: "6.600",
            type: "Vermut",
            icon: "🍹"
        },

        // SPRITZ
        "aperol-spritz": {
            name: "Aperol Spritz",
            price: "8.000",
            type: "Spritz",
            icon: "🍊"
        },
        "campari-spritz": {
            name: "Campari Spritz",
            price: "8.000",
            type: "Spritz",
            icon: "🍹"
        },
        "cynar-spritz": {
            name: "Cynar Spritz",
            price: "8.000",
            type: "Spritz",
            icon: "🍹"
        },
        "bianco-spritz": {
            name: "Bianco Spritz",
            price: "8.000",
            type: "Spritz",
            icon: "🍹"
        },

        // BEBIDAS SIN ALCOHOL
        "limonada-con-menta": {
            name: "Limonada con Menta",
            price: "4.000",
            type: "Bebida refrescante",
            icon: "🍋"
        },
        "jugos-de-frutas": {
            name: "Jugos de Frutas",
            price: "4.000",
            type: "Bebida refrescante",
            icon: "🧃"
        },
        "aguas-saborizadas": {
            name: "Aguas Saborizadas",
            price: "3.300",
            type: "Bebida refrescante",
            icon: "💧"
        },
        "gaseosas": {
            name: "Gaseosas",
            price: "3.300",
            type: "Bebida refrescante",
            icon: "🥤"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
