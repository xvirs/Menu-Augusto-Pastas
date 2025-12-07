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
                heading: "'Georgia', 'Times New Roman', Times, serif",
                body: "'Helvetica Neue', Helvetica, Arial, sans-serif"
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
            description: "Papas doradas y crujientes bañadas en nuestra salsa brava artesanal, con un toque picante que despierta el paladar.",
            ingredients: ["Papas", "Salsa brava picante", "Aceite de oliva", "Pimentón"],
            allergens: "Puede contener trazas de gluten",
            type: "Tapa caliente",
            pairing: "Vermut Rosso: El dulzor equilibra el picante.",
            icon: "🥔",
            image: "img/platos/papas-bravas.webp"
        },
        "entrepanes-de-focaccia": {
            name: "Entrepanes de Focaccia",
            description: "Nuestra focaccia casera rellena. Elegí tu variedad: 1) Jamón Crudo, Queso Holanda, Aceitunas y Cherrys. 2) Lomito Ahumado, Queso Fynbo, Morrones y Pesto.",
            ingredients: ["Focaccia artesanal", "Opción A: Jamón Crudo + Queso Holanda", "Opción B: Lomito Ahumado + Queso Fynbo"],
            allergens: "Gluten, lácteos, frutos secos (opción pesto)",
            price: "7.400",
            type: "Tapa caliente",
            pairing: "Aperol Spritz (Ideal para ambas opciones) o Cabernet (Sugerido para Lomito).",
            icon: "🥖",
            image: "img/platos/entrepanes-de-focaccia.webp"
        },

        "langostinos-al-oporto": {
            name: "Langostinos al Oporto",
            price: "15.000",
            description: "Un plato premium que celebra los sabores del mar con una exquisita reducción de vino oporto que realza la dulzura natural de los langostinos.",
            ingredients: ["Langostinos frescos", "Vino oporto", "Manteca", "Ajo", "Perejil"],
            allergens: "Crustáceos, lácteos, sulfitos (vino)",
            portion: "Porción generosa",
            type: "Tapa caliente premium",
            pairing: "Sauvignon Blanc: Acidez ideal para mariscos.",
            icon: "🦐",
            image: "img/platos/langostinos-al-oporto.webp"
        },
        "duo-de-tortellinis-y-cresta-di-gallo-gratinados": {
            name: "Dúo de Tortellinis y Cresta di Gallo Gratinados",
            price: "8.800",
            description: "Nuestras pastas artesanales rellenas, gratinadas al horno hasta lograr una textura dorada irresistible. La esencia de la tradición familiar.",
            ingredients: ["Tortellinis caseros", "Cresta di gallo", "Salsa bechamel", "Quesos gratinados", "Nuez moscada"],
            allergens: "Gluten, lácteos, huevo",
            type: "Tapa caliente",
            pairing: "Malbec Joven: Frutado, corta la gratina.",
            icon: "🍝",
            image: "img/platos/duo-de-tortellinis-y-cresta-di-gallo-gratinados.webp"
        },
        "mejillones-media-valva-al-vino-blanco": {
            name: "Mejillones Media Valva al Vino Blanco",
            price: "12.000",
            description: "Un clásico del aperitivo italiano que transporta al Mediterráneo con cada bocado. Cocidos suavemente para preservar su sabor marino.",
            ingredients: ["Mejillones frescos", "Vino blanco", "Ajo", "Perejil", "Aceite de oliva", "Limón"],
            allergens: "Moluscos, sulfitos (vino)",
            type: "Tapa caliente",
            pairing: "Bianco Spritz: Notas cítricas que resaltan el mar.",
            icon: "🦪",
            image: "img/platos/mejillones-media-valva-al-vino-blanco.webp"
        },
        "camembert-graten-y-tomates-confitados": {
            name: "Camembert Gratén y Tomates Confitados",
            price: "12.000",
            description: "La cremosidad del camembert gratinado se encuentra con la dulzura de los tomates confitados en una experiencia sensorial única.",
            ingredients: ["Queso camembert", "Tomates confitados", "Aceite de oliva", "Tomillo", "Romero", "Ajo"],
            allergens: "Lácteos",
            type: "Tapa caliente",
            pairing: "Espumante Rosado: Burbujas limpian la cremosidad.",
            icon: "🧀",
            image: "img/platos/camembert-graten-y-tomates-confitados.webp"
        },

        // TAPAS FRÍAS
        "olivas-negras-picantes": {
            name: "Olivas Negras Picantes",
            price: "4.000",
            description: "Aceitunas negras seleccionadas, marinadas con especias y un toque picante que realza su sabor mediterráneo. Perfectas para comenzar el aperitivo.",
            ingredients: ["Aceitunas negras", "Aceite de oliva", "Ají", "Hierbas aromáticas"],
            allergens: "Ninguno",
            type: "Tapa fría",
            pairing: "Vermut Rosso: Clásico maridaje por contraste.",
            icon: "🫒",
            image: "img/platos/olivas-negras-picantes.webp"
        },
        "champinones-en-escabeche": {
            name: "Champiñones en Escabeche",
            price: "7.000",
            description: "Champiñones frescos marinados en nuestro escabeche casero, con el balance perfecto entre acidez y especias. Una receta de tradición familiar.",
            ingredients: ["Champiñones frescos", "Vinagre", "Aceite de oliva", "Ajo", "Laurel", "Pimentón"],
            allergens: "Ninguno",
            type: "Tapa fría",
            pairing: "Bianco con Tónica: Frescura herbal complementaria.",
            icon: "🍄",
            image: "img/platos/champinones-escabeche.webp"
        },
        "plato-de-jamon-crudo": {
            name: "Plato de Jamón Crudo",
            price: "7.000",
            description: "Finas lonchas de jamón crudo italiano, curado con maestría. Un clásico del aperitivo que nunca falla, simple y exquisito.",
            ingredients: ["Jamón crudo italiano premium"],
            allergens: "Ninguno",
            portion: "Porción generosa",
            type: "Tapa fría",
            pairing: "Malbec Joven: Taninos suaves para la curación.",
            icon: "🥓",
            image: "img/platos/jamon-crudo.webp"
        },
        "salame-de-oncativo-y-focaccia": {
            name: "Salame de Oncativo y Focaccia",
            price: "5.600",
            description: "Salame artesanal de Oncativo, elaborado con tradición cordobesa, acompañado de nuestra focaccia casera recién horneada. Sabor local con alma italiana.",
            ingredients: ["Salame de Oncativo artesanal", "Focaccia casera"],
            allergens: "Gluten",
            type: "Tapa fría",
            pairing: "Vermut Rosso con Soda: Corta la grasa del embutido.",
            icon: "🥖",
            image: "img/platos/salame-focaccia.webp"
        },
        "queso-marinado-y-tomates-cherrys": {
            name: "Queso Marinado y Tomates Cherrys",
            price: "5.600",
            description: "Cubos de queso marinado en aceite de oliva con hierbas, acompañados de tomates cherry frescos. Una combinación fresca y colorida.",
            ingredients: ["Queso en cubos", "Aceite de oliva", "Hierbas aromáticas", "Tomates cherry"],
            allergens: "Lácteos",
            type: "Tapa fría",
            pairing: "Sauvignon Blanc: Realza las hierbas y acidez.",
            icon: "🧀",
            image: "img/platos/queso-marinado.webp"
        },
        "duo-de-bruschettas": {
            name: "Dúo de Bruschettas",
            description: "Dos versiones irresistibles sobre pan artesanal tostado: una con jamón crudo italiano y otra con escabeche de mar. El aperitivo perfecto.",
            ingredients: ["Pan artesanal tostado", "Jamón crudo", "Escabeche de mar", "Aceite de oliva", "Ajo"],
            allergens: "Gluten, pescado/mariscos",
            price: "6.500",
            type: "Tapa fría",
            pairing: "Campari Spritz: Amargor que limpia el paladar.",
            icon: "🍞",
            image: "img/platos/bruschettas.webp"
        },
        "parmesano-con-pesto-de-albahaca": {
            name: "Parmesano con Pesto de Albahaca",
            price: "9.000",
            description: "Lascas de queso parmesano reggiano acompañadas de nuestro pesto de albahaca casero. Elaborado con amor y tradición, como en las cocinas italianas.",
            ingredients: ["Queso parmesano reggiano", "Pesto de albahaca casero", "Piñones", "Aceite de oliva extra virgen"],
            allergens: "Lácteos, frutos secos (piñones)",
            type: "Tapa fría",
            pairing: "Bianco Seco: Notas secas para el queso intenso.",
            icon: "🧀",
            image: "img/platos/parmesano-pesto.webp"
        },

        // VINOS
        "malbec-joven": {
            name: "Malbec Joven",
            description: "(Suave y frutado)",
            price: "4.500",
            type: "Vino tinto",
            icon: "🍷",
            image: "img/platos/malbec-joven.webp"
        },
        "cabernet": {
            name: "Cabernet",
            description: "(Estructurado y aterciopelado)",
            price: "4.500",
            type: "Vino tinto",
            icon: "🍷",
            image: "img/platos/cabernet.webp"
        },
        "sauvignon-blanc": {
            name: "Sauvignon Blanc",
            description: "(Aromático y fresco)",
            price: "4.500",
            type: "Vino blanco",
            icon: "🍷",
            image: "img/platos/sauvignon-blanc.webp"
        },
        "espumante-rosado": {
            name: "Espumante Rosado",
            description: "(Elegante y refrescante)",
            price: "4.500",
            type: "Espumante",
            icon: "🥂",
            image: "img/platos/espumante-rosado.webp"
        },

        // VERMUTS
        "rosso-clasico-con-soda-y-piel-de-naranja": {
            name: "Rosso Clásico con Soda y Piel de Naranja",
            price: "6.600",
            description: "El vermut tradicional italiano, con su color rubí intenso, soda y una espiral de piel de naranja fresca.",
            ingredients: ["Vermut rosso", "Soda", "Piel de naranja", "Hielo"],
            type: "Vermut",
            icon: "🍹",
            image: "img/platos/rosso-clasico.webp"
        },
        "bianco-seco-con-oliva-y-romero": {
            name: "Bianco Seco con Oliva y Romero",
            price: "6.600",
            description: "Vermut blanco seco servido con aceitunas verdes y una ramita de romero. Un perfil aromático y sofisticado.",
            ingredients: ["Vermut bianco", "Aceitunas verdes", "Romero fresco", "Hielo"],
            type: "Vermut",
            icon: "🍸",
            image: "img/platos/bianco-seco.webp"
        },
        "rosado-con-pomelo-y-menta": {
            name: "Rosado con Pomelo y Menta",
            price: "6.600",
            description: "La frescura del vermut rosado combinada con el cítrico del pomelo y el aroma de la menta. Vibrante y delicioso.",
            ingredients: ["Vermut rosado", "Rodaja de pomelo", "Menta fresca", "Hielo"],
            type: "Vermut",
            icon: "🍹",
            image: "img/platos/rosado-pomelo.webp"
        },
        "bianco-con-tonica-limon-y-pepino": {
            name: "Bianco con Tónica, Limón y Pepino",
            price: "6.600",
            description: "Un twist refrescante: vermut blanco, agua tónica, rodajas de limón y láminas de pepino. Ideal para días de calor.",
            ingredients: ["Vermut bianco", "Agua tónica", "Limón", "Pepino", "Hielo"],
            type: "Vermut",
            icon: "🍸",
            image: "img/platos/bianco-tonica.webp"
        },

        // SPRITZ
        "aperol-spritz": {
            name: "Aperol Spritz",
            price: "8.000",
            description: "El clásico italiano por excelencia: Aperol, prosecco y soda, con su característico color naranja vibrante.",
            ingredients: ["Aperol", "Prosecco", "Soda", "Naranja", "Hielo"],
            type: "Spritz",
            icon: "🍊"
        },
        "campari-spritz": {
            name: "Campari Spritz",
            price: "8.000",
            description: "Versión más intensa con Campari, para quienes buscan un sabor más amargo y sofisticado.",
            ingredients: ["Campari", "Prosecco", "Soda", "Naranja", "Hielo"],
            type: "Spritz",
            icon: "🍹"
        },
        "cynar-spritz": {
            name: "Cynar Spritz",
            price: "8.000",
            description: "Spritz con Cynar, el licor de alcachofa italiano, una opción única y aromática.",
            ingredients: ["Cynar", "Prosecco", "Soda", "Naranja", "Hielo"],
            type: "Spritz",
            icon: "🍹"
        },
        "bianco-spritz": {
            name: "Bianco Spritz",
            price: "8.000",
            description: "Versión suave y delicada con vermut blanco, ideal para paladares que prefieren sabores más sutiles.",
            ingredients: ["Vermut bianco", "Prosecco", "Soda", "Limón", "Hielo"],
            type: "Spritz",
            icon: "🍹"
        },

        // BEBIDAS SIN ALCOHOL
        "limonada-con-menta": {
            name: "Limonada con Menta",
            price: "4.000",
            description: "Limonada casera refrescante con hojas de menta fresca, perfecta para acompañar el aperitivo.",
            ingredients: ["Limón", "Menta fresca", "Azúcar", "Agua", "Hielo"],
            type: "Bebida refrescante",
            icon: "🍋"
        },
        "jugos-de-frutas": {
            name: "Jugos de Frutas",
            price: "4.000",
            description: "Jugos naturales de frutas frescas de estación.",
            ingredients: ["Frutas frescas de estación"],
            type: "Bebida refrescante",
            icon: "🧃"
        },
        "aguas-saborizadas": {
            name: "Aguas Saborizadas",
            price: "3.300",
            description: "Aguas saborizadas refrescantes, opciones variadas.",
            type: "Bebida refrescante",
            icon: "💧"
        },
        "gaseosas": {
            name: "Gaseosas",
            price: "3.300",
            description: "Gaseosas clásicas para acompañar.",
            type: "Bebida refrescante",
            icon: "🥤"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
