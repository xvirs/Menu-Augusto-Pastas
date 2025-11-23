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
            primaryColor: "#d4a373", // Example color, adjust as needed based on styles.css
            backgroundColor: "#faedcd"
        }
    },
    menuSections: [
        {
            id: "entradas",
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
                    type: "list", // Special type for simple list
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
            title: "Bebidas",
            subsections: [
                {
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
                    ]
                },
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
            description: "Una selección especial de nuestros mejores fiambres artesanales y conservas caseras, perfecta para compartir entre dos personas. Una entrada ideal que combina sabores tradicionales italianos.",
            ingredients: ["Jamón crudo", "Salame de Oncativo", "Queso Holanda", "Queso Parmesano", "Hongos en escabeche", "Olivas negras", "Tomates confitados", "Pan artesanal"],
            serving: "2 personas",
            type: "Entrada para compartir",
            icon: "🍖"
        },
        "jamon-crudo": {
            name: "Jamón Crudo",
            price: "7.700",
            description: "Finas lonchas de jamón crudo de primera calidad, curado artesanalmente siguiendo la tradición italiana. Un clásico que nunca falla.",
            ingredients: ["Jamón crudo seleccionado", "Sal", "Especias italianas"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "🥓"
        },
        "lomito-horneado-ahumado": {
            name: "Lomito Horneado Ahumado",
            price: "5.500",
            description: "Lomito tierno horneado con un delicado toque ahumado. Ideal para acompañar con pan o como parte de una tabla de fiambres.",
            ingredients: ["Lomito de cerdo", "Sal marina", "Hierbas aromáticas", "Ahumado natural"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "🥩"
        },
        "salame-de-oncativo": {
            name: "Salame de Oncativo",
            price: "6.600",
            description: "Auténtico salame de Oncativo, una especialidad cordobesa. Curado artesanalmente con especias seleccionadas que le dan su característico sabor intenso.",
            ingredients: ["Carne de cerdo", "Carne vacuna", "Especias", "Ajo", "Sal"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "🥓"
        },
        "mortadela-con-pistachos": {
            name: "Mortadela con Pistachos",
            price: "7.700",
            description: "Mortadela premium con pistachos naturales. Una delicia italiana que combina suavidad y textura crujiente.",
            ingredients: ["Carne de cerdo", "Pistachos", "Especias italianas", "Sal", "Pimienta"],
            serving: "1 porción",
            type: "Fiambre",
            icon: "🥓"
        },
        "queso-holanda": {
            name: "Queso Holanda",
            price: "6.600",
            description: "Queso holanda de textura firme y sabor suave. Perfecto para acompañar con fiambres o disfrutar solo.",
            ingredients: ["Leche pasteurizada", "Cultivos lácticos", "Cuajo", "Sal"],
            serving: "1 porción",
            type: "Queso",
            icon: "🧀"
        },
        "queso-azul": {
            name: "Queso Azul",
            price: "6.300",
            description: "Queso azul de carácter intenso con vetas características. Para paladares que buscan sabores fuertes y distintivos.",
            ingredients: ["Leche", "Penicillium roqueforti", "Cultivos lácticos", "Sal"],
            serving: "1 porción",
            type: "Queso",
            icon: "🧀"
        },
        "queso-parmesano": {
            name: "Queso Parmesano",
            price: "7.800",
            description: "Queso parmesano de larga maduración. Su sabor intenso y textura granulosa lo hacen ideal para gratinar o degustar solo.",
            ingredients: ["Leche de vaca", "Cuajo", "Sal"],
            serving: "1 porción",
            type: "Queso",
            icon: "🧀"
        },
        "queso-camembert": {
            name: "Queso Camembert",
            price: "14.000",
            description: "Queso francés de pasta blanda y corteza florida. Cremoso y aromático, perfecto para una experiencia gourmet.",
            ingredients: ["Leche pasteurizada", "Cultivos de moho blanco", "Cuajo", "Sal"],
            serving: "1 porción",
            type: "Queso premium",
            icon: "🧀"
        },
        "queso-marinado-en-aceite-ahumado": {
            name: "Queso Marinado en Aceite Ahumado",
            price: "6.000",
            description: "Cubos de queso marinados en aceite de oliva con toque ahumado y hierbas aromáticas. Una explosión de sabores.",
            ingredients: ["Queso fresco", "Aceite de oliva ahumado", "Hierbas aromáticas", "Ají molido", "Ajo"],
            serving: "1 porción",
            type: "Queso marinado",
            icon: "🧀"
        },
        "hongos-en-escabeche": {
            name: "Hongos en Escabeche",
            price: "11.000",
            description: "Hongos frescos conservados en escabeche casero con vinagre y especias. Un clásico de sabor intenso y memorable.",
            ingredients: ["Hongos frescos", "Vinagre de vino", "Aceite de oliva", "Ají", "Laurel", "Orégano"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🍄"
        },
        "pepinillos-en-vinagre": {
            name: "Pepinillos en Vinagre",
            price: "4.000",
            description: "Pepinillos crujientes encurtidos en vinagre con eneldo. El acompañamiento perfecto para cualquier entrada.",
            ingredients: ["Pepinillos", "Vinagre blanco", "Eneldo", "Ajo", "Sal", "Especias"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🥒"
        },
        "olivas-negras-picantes": {
            name: "Olivas Negras Picantes",
            price: "4.000",
            description: "Aceitunas negras con un toque picante. Marinadas con ají y especias para darles ese sabor que despierta el paladar.",
            ingredients: ["Aceitunas negras", "Ají molido", "Aceite de oliva", "Orégano", "Ajo"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🫒"
        },
        "tomates-confitados-al-romero": {
            name: "Tomates Confitados al Romero",
            price: "5.000",
            description: "Tomates cherry confitados lentamente con aceite de oliva y romero fresco. Dulces, aromáticos e irresistibles.",
            ingredients: ["Tomates cherry", "Aceite de oliva", "Romero fresco", "Ajo", "Sal", "Azúcar"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🍅"
        },
        "pimientos-asados": {
            name: "Pimientos Asados",
            price: "8.000",
            description: "Pimientos rojos asados a la parrilla, pelados y marinados en aceite de oliva con ajo. Suaves y llenos de sabor.",
            ingredients: ["Pimientos rojos", "Aceite de oliva", "Ajo", "Perejil", "Sal"],
            serving: "1 porción",
            type: "Conserva",
            icon: "🫑"
        },
        "bife-de-chorizo": {
            name: "Bife de Chorizo",
            price: "18.000",
            description: "Corte premium de bife de chorizo, jugoso y tierno. Preparado a la parrilla al punto que prefieras.",
            ingredients: ["Bife de chorizo", "Sal gruesa", "Pimienta negra"],
            serving: "1 porción",
            type: "Carne a la parrilla",
            icon: "🥩"
        },

        // PASTAS
        "spaghettis": {
            name: "Spaghettis",
            price: "10.600",
            description: "Los clásicos spaghettis elaborados con nuestra receta tradicional de pasta fresca. Base perfecta para tus salsas favoritas.",
            ingredients: ["Harina 0000", "Huevos frescos", "Sal", "Agua"],
            serving: "1 porción",
            type: "Pasta larga fresca",
            icon: "🍝"
        },
        "tagliatelles": {
            name: "Tagliatelles",
            price: "10.600",
            description: "Pasta fresca en forma de cintas anchas, perfecta para salsas cremosas o con carne. Elaborada artesanalmente cada día.",
            ingredients: ["Harina 0000", "Huevos frescos", "Sal", "Aceite de oliva"],
            serving: "1 porción",
            type: "Pasta larga fresca",
            icon: "🍝"
        },
        "fetuccinis-verdes": {
            name: "Fetuccinis Verdes",
            price: "12.200",
            description: "Pasta fresca en forma de cintas, coloreada naturalmente con espinaca fresca. Un toque de color y sabor a tus platos.",
            ingredients: ["Harina 0000", "Huevos frescos", "Espinaca fresca", "Sal", "Aceite de oliva"],
            serving: "1 porción",
            type: "Pasta larga fresca",
            icon: "🍝"
        },
        "noquis": {
            name: "Ñoquis",
            price: "11.000",
            description: "Suaves y esponjosos ñoquis de papa elaborados según la tradición italiana. Perfectos con cualquier salsa.",
            ingredients: ["Papas", "Harina 0000", "Huevos", "Sal", "Nuez moscada"],
            serving: "1 porción",
            type: "Pasta fresca de papa",
            icon: "🥔"
        },
        "malfattis-de-ricota-y-espinaca": {
            name: "Malfattis de Ricota y Espinaca",
            price: "13.400",
            description: "Delicados bocados de ricota artesanal y espinaca fresca. Su nombre significa 'mal hechos' por su forma rústica, pero su sabor es excepcional.",
            ingredients: ["Ricota artesanal", "Espinaca fresca", "Harina", "Huevos", "Queso parmesano", "Nuez moscada"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "💚"
        },
        "ravioles-de-ricota-y-nuez": {
            name: "Ravioles de Ricota y Nuez",
            price: "12.200",
            description: "Ravioles elaborados con masa fresca rellenos de una suave mezcla de ricota y nueces, combinación perfecta de cremosidad y textura.",
            ingredients: ["Masa de pasta fresca", "Ricota artesanal", "Nueces", "Queso parmesano", "Sal", "Pimienta"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🥟"
        },
        "ravioles-de-ricota-y-espinaca": {
            name: "Ravioles de Ricota y Espinaca",
            price: "12.200",
            description: "Ravioles clásicos rellenos de ricota cremosa y espinaca fresca. Una combinación tradicional que nunca falla.",
            ingredients: ["Masa de pasta fresca", "Ricota artesanal", "Espinaca fresca", "Queso parmesano", "Nuez moscada", "Sal", "Pimienta"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🥟"
        },
        "ravioles-de-carne-y-verdura": {
            name: "Ravioles de Carne y Verdura",
            price: "13.200",
            description: "Ravioles rellenos de un jugoso relleno de carne vacuna y verduras frescas de estación. Sabor casero en cada bocado.",
            ingredients: ["Masa de pasta fresca", "Carne molida", "Espinaca", "Cebolla", "Zanahoria", "Especias", "Sal", "Pimienta"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🥟"
        },
        "sorrentinos-de-ricota-jamon-y-nuez": {
            name: "Sorrentinos de Ricota, Jamón y Nuez",
            price: "13.200",
            description: "Sorrentinos rellenos con una deliciosa mezcla de ricota cremosa, jamón cocido y nueces crujientes. Un equilibrio perfecto de sabores.",
            ingredients: ["Masa de pasta fresca", "Ricota artesanal", "Jamón cocido", "Nueces", "Queso parmesano", "Pimienta"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🥟"
        },
        "sorrentinos-de-jamon-y-queso": {
            name: "Sorrentinos de Jamón y Queso",
            price: "14.900",
            description: "La combinación clásica que todos aman. Sorrentinos rellenos de jamón y queso fundente, simples pero irresistibles.",
            ingredients: ["Masa de pasta fresca", "Jamón cocido", "Queso mozzarella", "Ricota", "Queso parmesano"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🥟"
        },
        "sorrentinos-caprese": {
            name: "Sorrentinos Caprese",
            price: "15.700",
            description: "Inspirados en la clásica ensalada caprese, estos sorrentinos llevan mozzarella fresca, tomate y albahaca. Una explosión de sabores mediterráneos.",
            ingredients: ["Masa de pasta fresca", "Mozzarella fresca", "Tomate", "Albahaca", "Ricota", "Aceite de oliva"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🍅"
        },
        "sorrentinos-de-cuatro-quesos": {
            name: "Sorrentinos de Cuatro Quesos",
            price: "15.700",
            description: "Para los amantes del queso, estos sorrentinos combinan cuatro variedades de quesos seleccionados en un relleno cremoso irresistible.",
            ingredients: ["Masa de pasta fresca", "Mozzarella", "Queso azul", "Queso parmesano", "Queso holanda", "Ricota"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🧀"
        },
        "sorrentinos-de-mozzarella-hongos-y-castanas-de-caju": {
            name: "Sorrentinos de Mozzarella, Hongos y Castañas de Cajú",
            price: "17.800",
            description: "Una combinación gourmet única. Mozzarella cremosa, hongos salteados y castañas de cajú tostadas en cada sorrentino.",
            ingredients: ["Masa de pasta fresca", "Mozzarella", "Hongos frescos", "Castañas de cajú", "Ricota", "Ajo", "Perejil"],
            serving: "1 porción",
            type: "Pasta rellena premium",
            icon: "🍄"
        },
        "sorrentinos-de-salmon-ricota-y-camarones": {
            name: "Sorrentinos de Salmón, Ricota y Camarones",
            price: "17.800",
            description: "Exquisitos sorrentinos de mar. Salmón ahumado, ricota suave y camarones frescos en un relleno sofisticado.",
            ingredients: ["Masa de pasta fresca", "Salmón ahumado", "Camarones", "Ricota", "Eneldo", "Limón", "Pimienta"],
            serving: "1 porción",
            type: "Pasta rellena premium",
            icon: "🦐"
        },
        "sorrentinos-de-jamon-crudo-mozzarella-olivas-negras-y-verdeo": {
            name: "Sorrentinos de Jamón Crudo, Mozzarella, Olivas Negras y Verdeo",
            price: "17.000",
            description: "Sorrentinos con sabores mediterráneos intensos. Jamón crudo, mozzarella, olivas negras y cebolla de verdeo en perfecta armonía.",
            ingredients: ["Masa de pasta fresca", "Jamón crudo", "Mozzarella", "Olivas negras", "Cebolla de verdeo", "Ricota", "Aceite de oliva"],
            serving: "1 porción",
            type: "Pasta rellena premium",
            icon: "🥟"
        },
        "combinado-de-sorrentinos": {
            name: "Combinado de Sorrentinos",
            price: "17.000",
            description: "Una selección variada de nuestros mejores sorrentinos para que pruebes diferentes sabores en un solo plato.",
            ingredients: ["Variedad de sorrentinos", "Incluye varios rellenos de la casa"],
            serving: "1 porción",
            type: "Pasta rellena variada",
            icon: "🥟"
        },
        "canelones-de-carne-y-verduras": {
            name: "Canelones de Carne y Verduras",
            price: "16.500",
            description: "Canelones rellenos con un jugoso relleno de carne molida y verduras frescas, gratinados al horno. Un clásico reconfortante.",
            ingredients: ["Masa de canelones", "Carne molida", "Espinaca", "Cebolla", "Zanahoria", "Salsa bechamel", "Queso"],
            serving: "1 porción",
            type: "Pasta rellena gratinada",
            icon: "🥘"
        },
        "canelones-de-cordero-y-espinaca": {
            name: "Canelones de Cordero y Espinaca",
            price: "19.000",
            description: "Canelones gourmet rellenos de tierna carne de cordero braseada con espinaca fresca. Un plato sofisticado y memorable.",
            ingredients: ["Masa de canelones", "Carne de cordero", "Espinaca", "Cebolla", "Vino tinto", "Salsa bechamel", "Queso parmesano"],
            serving: "1 porción",
            type: "Pasta rellena premium",
            icon: "🥘"
        },
        "canelones-de-crema-de-choclo": {
            name: "Canelones de Crema de Choclo",
            price: "16.500",
            description: "Canelones vegetarianos con un cremoso relleno de choclo fresco y queso. Dulces, suaves y deliciosos.",
            ingredients: ["Masa de canelones", "Choclo fresco", "Queso crema", "Cebolla", "Sal bechamel", "Queso mozzarella"],
            serving: "1 porción",
            type: "Pasta rellena gratinada",
            icon: "🌽"
        },
        "panzottis-rossi": {
            name: "Panzottis Rossi",
            price: "15.400",
            description: "Panzottis de masa roja rellenos de calabaza asada, queso y huevo. Una combinación dulce y salada irresistible.",
            ingredients: ["Masa de remolacha", "Calabaza asada", "Queso ricota", "Huevo", "Nuez moscada", "Queso parmesano"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🎃",
            shortDescription: "Calabaza, queso y huevo"
        },
        "panzottis-verdes": {
            name: "Panzottis Verdes",
            price: "15.400",
            description: "Panzottis de masa verde rellenos de ricota, almendras tostadas, espinacas y pimientos asados. Un festival de sabores.",
            ingredients: ["Masa de espinaca", "Ricota artesanal", "Almendras tostadas", "Espinaca", "Pimientos asados", "Ajo"],
            serving: "1 porción",
            type: "Pasta rellena fresca",
            icon: "🥟",
            shortDescription: "Ricota, almendras, espinacas y pimientos asados"
        },
        "creste-di-gallo": {
            name: "Creste di Gallo",
            price: "17.000",
            description: "Pasta rellena con forma de cresta de gallo, rellena de berenjenas ahumadas, ricota artesanal, queso parmesano y tomillo aromático.",
            ingredients: ["Masa de pasta fresca", "Berenjenas ahumadas", "Ricota artesanal", "Queso parmesano", "Tomillo", "Aceite de oliva"],
            serving: "1 porción",
            type: "Pasta rellena especial",
            icon: "🍆",
            shortDescription: "Pasta rellena con berenjenas ahumadas, ricota artesanal, queso parmesano y tomillo"
        },
        "tortellinis-de-ricota-chorizo-colorado-panceta-ahumada-queso-parmesano-y-puerro-ahumado": {
            name: "Tortellinis de Ricota, Chorizo Colorado, Panceta Ahumada, Queso Parmesano y Puerro Ahumado",
            price: "19.200",
            description: "Tortellinis premium con un relleno complejo y sabroso. Ricota, chorizo colorado, panceta ahumada, parmesano y puerro en perfecta armonía.",
            ingredients: ["Masa de pasta fresca", "Ricota", "Chorizo colorado", "Panceta ahumada", "Queso parmesano", "Puerro ahumado", "Especias"],
            serving: "1 porción",
            type: "Pasta rellena premium",
            icon: "🥟"
        },
        "lasana-tradicional": {
            name: "Lasaña Tradicional",
            price: "17.000",
            description: "La clásica lasaña italiana con capas de pasta fresca, salsa boloñesa casera, bechamel cremosa y abundante queso gratinado.",
            ingredients: ["Placas de pasta fresca", "Salsa boloñesa", "Salsa bechamel", "Queso mozzarella", "Queso parmesano"],
            serving: "1 porción",
            type: "Pasta al horno",
            icon: "🍝"
        },

        // SALSAS
        "cuatro-quesos": { name: "Cuatro Quesos", price: "2.300" },
        "salteado-de-cubos-de-tomate": { name: "Salteado de Cubos de Tomate con Aceite de Oliva Perfumado y Hierbas Frescas", price: "3.000" },
        "crema-de-puerro-y-panceta": { name: "Crema de Puerro y Panceta", price: "3.000" },
        "salsa-de-pollo-y-tomate-estofado": { name: "Salsa de Pollo y Tomate Estofado", price: "6.000" },
        "albondigas-en-salsa-de-tomate": { name: "Albóndigas en Salsa de Tomate", price: "7.000" },
        "carne-de-res-braseada-en-tomate": { name: "Carne de Res Braseada en Tomate", price: "8.200", shortDescription: "Estofado de carne" },
        "abadejo-calamar-langostinos-y-mejillones": { name: "Abadejo, Calamar, Langostinos y Mejillones", price: "9.100" },
        "crema-de-champinones-al-oporto": { name: "Crema de Champiñones al Oporto", price: "6.100" },
        "pesto": { name: "Pesto", price: "3.300", shortDescription: "Aceite de hierbas, ajo y nueces" },
        "bolonesa": { name: "Boloñesa", price: "3.900" },
        "crema": { name: "Crema", price: "3.300" },
        "adicional-de-crema": { name: "Adicional de Crema", price: "2.200" },
        "adicional-gratinado": { name: "Adicional Gratinado", price: "4.400" },
        "crema-de-cabutia-gratinada": { name: "Crema de Cabutia Gratinada", price: "4.600" },

        // POSTRES
        "flan-casero": {
            name: "Flan Casero",
            price: "5.100",
            description: "Flan tradicional elaborado con nuestra receta familiar. Cremoso, suave y con el punto justo de dulzor.",
            ingredients: ["Huevos", "Leche", "Azúcar", "Esencia de vainilla", "Caramelo"],
            serving: "1 porción",
            type: "Postre tradicional",
            icon: "🍮"
        },
        "tiramisu": {
            name: "Tiramisú",
            price: "6.900",
            description: "El clásico postre italiano con capas de bizcochos embebidos en café, crema de mascarpone y cacao. Irresistible.",
            ingredients: ["Bizcochos vainilla", "Café expresso", "Mascarpone", "Huevos", "Azúcar", "Cacao amargo"],
            serving: "1 porción",
            type: "Postre italiano",
            icon: "☕"
        },
        "bombon-escoces": {
            name: "Bombón Escocés",
            price: "7.000",
            description: "Delicioso bombón helado cubierto de chocolate. Un clásico postre helado que combina dulce de leche, helado y cobertura crocante.",
            ingredients: ["Helado de crema", "Dulce de leche", "Cobertura de chocolate", "Almendras"],
            serving: "1 porción",
            type: "Postre helado",
            icon: "🍫",
            shortDescription: "Helado"
        },
        "copa-helada": {
            name: "Copa Helada",
            price: "9.000",
            description: "Una deliciosa combinación de brownie casero, frutos secos, helado cremoso y un toque de ron. El final perfecto para tu comida.",
            ingredients: ["Brownie de chocolate", "Helado de crema", "Nueces", "Almendras", "Ron", "Crema batida", "Salsa de chocolate"],
            serving: "1 porción",
            type: "Postre helado",
            icon: "🍨",
            shortDescription: "Brownie, frutos secos, helado y ron"
        },

        // BEBIDAS
        "cinzano-soda-limon": { name: "Cinzano, Soda y Rodaja de Limón", price: "6.600" },
        "carpano-bianco-soda-limon": { name: "Carpano Bianco, Soda y Rodaja de Limón", price: "6.600" },
        "martini-bianco-tonica-limon": { name: "Martini Bianco, Tónica y Rodaja de Limón", price: "6.600" },
        "carpano-rosso-soda-naranja": { name: "Carpano Rosso, Soda y Rodaja de Naranja", price: "6.600" },
        "martini-rosso-naranja-aceituna": { name: "Martini Rosso, Piel de Naranja y Aceituna Verde", price: "6.600" },
        "vermut-ferroviario": { name: "Vermut Ferroviario", price: "6.600", shortDescription: "Vermut Rosso, fernet, soda y rodaja de limón" },
        "negroni": { name: "Negroni", price: "8.500", shortDescription: "Campari, gin, vermut Rosso y piel de naranja" },
        "aperol-champagne-naranja": { name: "Aperol, Champagne y Rodajas de Naranja", price: "8.000" },
        "cynar-pomelo-limon-menta": { name: "Cynar, Jugo de Pomelo, Jugo de Limón y Hojas de Menta", price: "8.000" },
        "fernet-branca-coca": { name: "Fernet Branca con Coca-Cola", price: "8.000" },
        "campari-naranja": { name: "Campari con Jugo de Naranja", price: "8.000" },
        "copa-espumante": { name: "Copa de Espumante", price: "5.200" },
        "whisky-johnnie-walker": { name: "Whisky Johnnie Walker Double Black", price: "17.000" },
        "cervezas-lata": { name: "Cervezas (Lata)", price: "5.000" },
        "copa-vino": { name: "Copa de Vino", price: "4.500" },
        "agua-sin-gas": { name: "Agua sin Gas", price: "3.300" },
        "agua-con-gas": { name: "Agua con Gas", price: "3.300" },
        "agua-saborizada": { name: "Agua Saborizada", price: "3.300" },
        "gaseosas": { name: "Gaseosas", price: "3.300" },
        "jarra-limonada-menta": { name: "Jarra de Limonada con Menta", price: "8.500" },
        "vaso-limonada": { name: "Vaso de Limonada", price: "4.000" }
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
