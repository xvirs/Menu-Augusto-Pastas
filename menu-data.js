// Estructura de datos para los platos del menú
const menuData = {
    // PARA COMENZAR
    "combinado-de-fiambres-y-conservas-x-2-pers": {
        name: "Combinado de Fiambres y Conservas x 2 Pers.",
        category: "Para Comenzar",
        price: "23.000",
        description: "Una selección especial de nuestros mejores fiambres artesanales y conservas caseras, perfecta para compartir entre dos personas. Una entrada ideal que combina sabores tradicionales italianos.",
        ingredients: ["Jamón crudo", "Salame de Oncativo", "Queso Holanda", "Queso Parmesano", "Hongos en escabeche", "Olivas negras", "Tomates confitados", "Pan artesanal"],
        serving: "2 personas",
        type: "Entrada para compartir",
        icon: "🍖"
    },
    "jamon-crudo": {
        name: "Jamón Crudo",
        category: "Para Comenzar",
        price: "7.700",
        description: "Finas lonchas de jamón crudo de primera calidad, curado artesanalmente siguiendo la tradición italiana. Un clásico que nunca falla.",
        ingredients: ["Jamón crudo seleccionado", "Sal", "Especias italianas"],
        serving: "1 porción",
        type: "Fiambre",
        icon: "🥓"
    },
    "lomito-horneado-ahumado": {
        name: "Lomito Horneado Ahumado",
        category: "Para Comenzar",
        price: "5.500",
        description: "Lomito tierno horneado con un delicado toque ahumado. Ideal para acompañar con pan o como parte de una tabla de fiambres.",
        ingredients: ["Lomito de cerdo", "Sal marina", "Hierbas aromáticas", "Ahumado natural"],
        serving: "1 porción",
        type: "Fiambre",
        icon: "🥩"
    },
    "salame-de-oncativo": {
        name: "Salame de Oncativo",
        category: "Para Comenzar",
        price: "6.600",
        description: "Auténtico salame de Oncativo, una especialidad cordobesa. Curado artesanalmente con especias seleccionadas que le dan su característico sabor intenso.",
        ingredients: ["Carne de cerdo", "Carne vacuna", "Especias", "Ajo", "Sal"],
        serving: "1 porción",
        type: "Fiambre",
        icon: "🥓"
    },
    "mortadela-con-pistachos": {
        name: "Mortadela con Pistachos",
        category: "Para Comenzar",
        price: "7.700",
        description: "Mortadela premium con pistachos naturales. Una delicia italiana que combina suavidad y textura crujiente.",
        ingredients: ["Carne de cerdo", "Pistachos", "Especias italianas", "Sal", "Pimienta"],
        serving: "1 porción",
        type: "Fiambre",
        icon: "🥓"
    },
    "queso-holanda": {
        name: "Queso Holanda",
        category: "Para Comenzar",
        price: "6.600",
        description: "Queso holanda de textura firme y sabor suave. Perfecto para acompañar con fiambres o disfrutar solo.",
        ingredients: ["Leche pasteurizada", "Cultivos lácticos", "Cuajo", "Sal"],
        serving: "1 porción",
        type: "Queso",
        icon: "🧀"
    },
    "queso-azul": {
        name: "Queso Azul",
        category: "Para Comenzar",
        price: "6.300",
        description: "Queso azul de carácter intenso con vetas características. Para paladares que buscan sabores fuertes y distintivos.",
        ingredients: ["Leche", "Penicillium roqueforti", "Cultivos lácticos", "Sal"],
        serving: "1 porción",
        type: "Queso",
        icon: "🧀"
    },
    "queso-parmesano": {
        name: "Queso Parmesano",
        category: "Para Comenzar",
        price: "7.800",
        description: "Queso parmesano de larga maduración. Su sabor intenso y textura granulosa lo hacen ideal para gratinar o degustar solo.",
        ingredients: ["Leche de vaca", "Cuajo", "Sal"],
        serving: "1 porción",
        type: "Queso",
        icon: "🧀"
    },
    "queso-camembert": {
        name: "Queso Camembert",
        category: "Para Comenzar",
        price: "14.000",
        description: "Queso francés de pasta blanda y corteza florida. Cremoso y aromático, perfecto para una experiencia gourmet.",
        ingredients: ["Leche pasteurizada", "Cultivos de moho blanco", "Cuajo", "Sal"],
        serving: "1 porción",
        type: "Queso premium",
        icon: "🧀"
    },
    "queso-marinado-en-aceite-ahumado": {
        name: "Queso Marinado en Aceite Ahumado",
        category: "Para Comenzar",
        price: "6.000",
        description: "Cubos de queso marinados en aceite de oliva con toque ahumado y hierbas aromáticas. Una explosión de sabores.",
        ingredients: ["Queso fresco", "Aceite de oliva ahumado", "Hierbas aromáticas", "Ají molido", "Ajo"],
        serving: "1 porción",
        type: "Queso marinado",
        icon: "🧀"
    },
    "hongos-en-escabeche": {
        name: "Hongos en Escabeche",
        category: "Para Comenzar",
        price: "11.000",
        description: "Hongos frescos conservados en escabeche casero con vinagre y especias. Un clásico de sabor intenso y memorable.",
        ingredients: ["Hongos frescos", "Vinagre de vino", "Aceite de oliva", "Ají", "Laurel", "Orégano"],
        serving: "1 porción",
        type: "Conserva",
        icon: "🍄"
    },
    "pepinillos-en-vinagre": {
        name: "Pepinillos en Vinagre",
        category: "Para Comenzar",
        price: "4.000",
        description: "Pepinillos crujientes encurtidos en vinagre con eneldo. El acompañamiento perfecto para cualquier entrada.",
        ingredients: ["Pepinillos", "Vinagre blanco", "Eneldo", "Ajo", "Sal", "Especias"],
        serving: "1 porción",
        type: "Conserva",
        icon: "🥒"
    },
    "olivas-negras-picantes": {
        name: "Olivas Negras Picantes",
        category: "Para Comenzar",
        price: "4.000",
        description: "Aceitunas negras con un toque picante. Marinadas con ají y especias para darles ese sabor que despierta el paladar.",
        ingredients: ["Aceitunas negras", "Ají molido", "Aceite de oliva", "Orégano", "Ajo"],
        serving: "1 porción",
        type: "Conserva",
        icon: "🫒"
    },
    "tomates-confitados-al-romero": {
        name: "Tomates Confitados al Romero",
        category: "Para Comenzar",
        price: "5.000",
        description: "Tomates cherry confitados lentamente con aceite de oliva y romero fresco. Dulces, aromáticos e irresistibles.",
        ingredients: ["Tomates cherry", "Aceite de oliva", "Romero fresco", "Ajo", "Sal", "Azúcar"],
        serving: "1 porción",
        type: "Conserva",
        icon: "🍅"
    },
    "pimientos-asados": {
        name: "Pimientos Asados",
        category: "Para Comenzar",
        price: "8.000",
        description: "Pimientos rojos asados a la parrilla, pelados y marinados en aceite de oliva con ajo. Suaves y llenos de sabor.",
        ingredients: ["Pimientos rojos", "Aceite de oliva", "Ajo", "Perejil", "Sal"],
        serving: "1 porción",
        type: "Conserva",
        icon: "🫑"
    },
    "bife-de-chorizo": {
        name: "Bife de Chorizo",
        category: "Opción de Carne",
        price: "18.000",
        description: "Corte premium de bife de chorizo, jugoso y tierno. Preparado a la parrilla al punto que prefieras.",
        ingredients: ["Bife de chorizo", "Sal gruesa", "Pimienta negra"],
        serving: "1 porción",
        type: "Carne a la parrilla",
        icon: "🥩"
    },
    "spaghettis": {
        name: "Spaghettis",
        category: "Pastas",
        price: "10.600",
        description: "Los clásicos spaghettis elaborados con nuestra receta tradicional de pasta fresca. Base perfecta para tus salsas favoritas.",
        ingredients: ["Harina 0000", "Huevos frescos", "Sal", "Agua"],
        serving: "1 porción",
        type: "Pasta larga fresca",
        icon: "🍝"
    },
    "tagliatelles": {
        name: "Tagliatelles",
        category: "Pastas",
        price: "10.600",
        description: "Pasta fresca en forma de cintas anchas, perfecta para salsas cremosas o con carne. Elaborada artesanalmente cada día.",
        ingredients: ["Harina 0000", "Huevos frescos", "Sal", "Aceite de oliva"],
        serving: "1 porción",
        type: "Pasta larga fresca",
        icon: "🍝"
    },
    "fetuccinis-verdes": {
        name: "Fetuccinis Verdes",
        category: "Pastas",
        price: "12.200",
        description: "Pasta fresca en forma de cintas, coloreada naturalmente con espinaca fresca. Un toque de color y sabor a tus platos.",
        ingredients: ["Harina 0000", "Huevos frescos", "Espinaca fresca", "Sal", "Aceite de oliva"],
        serving: "1 porción",
        type: "Pasta larga fresca",
        icon: "🍝"
    },
    "noquis": {
        name: "Ñoquis",
        category: "Pastas",
        price: "11.000",
        description: "Suaves y esponjosos ñoquis de papa elaborados según la tradición italiana. Perfectos con cualquier salsa.",
        ingredients: ["Papas", "Harina 0000", "Huevos", "Sal", "Nuez moscada"],
        serving: "1 porción",
        type: "Pasta fresca de papa",
        icon: "🥔"
    },
    "malfattis-de-ricota-y-espinaca": {
        name: "Malfattis de Ricota y Espinaca",
        category: "Pastas",
        price: "13.400",
        description: "Delicados bocados de ricota artesanal y espinaca fresca. Su nombre significa 'mal hechos' por su forma rústica, pero su sabor es excepcional.",
        ingredients: ["Ricota artesanal", "Espinaca fresca", "Harina", "Huevos", "Queso parmesano", "Nuez moscada"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "💚"
    },
    "ravioles-de-ricota-y-nuez": {
        name: "Ravioles de Ricota y Nuez",
        category: "Pastas",
        price: "12.200",
        description: "Ravioles elaborados con masa fresca rellenos de una suave mezcla de ricota y nueces, combinación perfecta de cremosidad y textura.",
        ingredients: ["Masa de pasta fresca", "Ricota artesanal", "Nueces", "Queso parmesano", "Sal", "Pimienta"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🥟"
    },
    "ravioles-de-ricota-y-espinaca": {
        name: "Ravioles de Ricota y Espinaca",
        category: "Pastas",
        price: "12.200",
        description: "Ravioles clásicos rellenos de ricota cremosa y espinaca fresca. Una combinación tradicional que nunca falla.",
        ingredients: ["Masa de pasta fresca", "Ricota artesanal", "Espinaca fresca", "Queso parmesano", "Nuez moscada", "Sal", "Pimienta"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🥟"
    },
    "ravioles-de-carne-y-verdura": {
        name: "Ravioles de Carne y Verdura",
        category: "Pastas",
        price: "13.200",
        description: "Ravioles rellenos de un jugoso relleno de carne vacuna y verduras frescas de estación. Sabor casero en cada bocado.",
        ingredients: ["Masa de pasta fresca", "Carne molida", "Espinaca", "Cebolla", "Zanahoria", "Especias", "Sal", "Pimienta"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🥟"
    },
    "sorrentinos-de-ricota-jamon-y-nuez": {
        name: "Sorrentinos de Ricota, Jamón y Nuez",
        category: "Pastas",
        price: "13.200",
        description: "Sorrentinos rellenos con una deliciosa mezcla de ricota cremosa, jamón cocido y nueces crujientes. Un equilibrio perfecto de sabores.",
        ingredients: ["Masa de pasta fresca", "Ricota artesanal", "Jamón cocido", "Nueces", "Queso parmesano", "Pimienta"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🥟"
    },
    "sorrentinos-de-jamon-y-queso": {
        name: "Sorrentinos de Jamón y Queso",
        category: "Pastas",
        price: "14.900",
        description: "La combinación clásica que todos aman. Sorrentinos rellenos de jamón y queso fundente, simples pero irresistibles.",
        ingredients: ["Masa de pasta fresca", "Jamón cocido", "Queso mozzarella", "Ricota", "Queso parmesano"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🥟"
    },
    "sorrentinos-caprese": {
        name: "Sorrentinos Caprese",
        category: "Pastas",
        price: "15.700",
        description: "Inspirados en la clásica ensalada caprese, estos sorrentinos llevan mozzarella fresca, tomate y albahaca. Una explosión de sabores mediterráneos.",
        ingredients: ["Masa de pasta fresca", "Mozzarella fresca", "Tomate", "Albahaca", "Ricota", "Aceite de oliva"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🍅"
    },
    "sorrentinos-de-cuatro-quesos": {
        name: "Sorrentinos de Cuatro Quesos",
        category: "Pastas",
        price: "15.700",
        description: "Para los amantes del queso, estos sorrentinos combinan cuatro variedades de quesos seleccionados en un relleno cremoso irresistible.",
        ingredients: ["Masa de pasta fresca", "Mozzarella", "Queso azul", "Queso parmesano", "Queso holanda", "Ricota"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🧀"
    },
    "sorrentinos-de-mozzarella-hongos-y-castanas-de-caju": {
        name: "Sorrentinos de Mozzarella, Hongos y Castañas de Cajú",
        category: "Pastas",
        price: "17.800",
        description: "Una combinación gourmet única. Mozzarella cremosa, hongos salteados y castañas de cajú tostadas en cada sorrentino.",
        ingredients: ["Masa de pasta fresca", "Mozzarella", "Hongos frescos", "Castañas de cajú", "Ricota", "Ajo", "Perejil"],
        serving: "1 porción",
        type: "Pasta rellena premium",
        icon: "🍄"
    },
    "sorrentinos-de-salmon-ricota-y-camarones": {
        name: "Sorrentinos de Salmón, Ricota y Camarones",
        category: "Pastas",
        price: "17.800",
        description: "Exquisitos sorrentinos de mar. Salmón ahumado, ricota suave y camarones frescos en un relleno sofisticado.",
        ingredients: ["Masa de pasta fresca", "Salmón ahumado", "Camarones", "Ricota", "Eneldo", "Limón", "Pimienta"],
        serving: "1 porción",
        type: "Pasta rellena premium",
        icon: "🦐"
    },
    "sorrentinos-de-jamon-crudo-mozzarella-olivas-negras-y-verdeo": {
        name: "Sorrentinos de Jamón Crudo, Mozzarella, Olivas Negras y Verdeo",
        category: "Pastas",
        price: "17.000",
        description: "Sorrentinos con sabores mediterráneos intensos. Jamón crudo, mozzarella, olivas negras y cebolla de verdeo en perfecta armonía.",
        ingredients: ["Masa de pasta fresca", "Jamón crudo", "Mozzarella", "Olivas negras", "Cebolla de verdeo", "Ricota", "Aceite de oliva"],
        serving: "1 porción",
        type: "Pasta rellena premium",
        icon: "🥟"
    },
    "combinado-de-sorrentinos": {
        name: "Combinado de Sorrentinos",
        category: "Pastas",
        price: "17.000",
        description: "Una selección variada de nuestros mejores sorrentinos para que pruebes diferentes sabores en un solo plato.",
        ingredients: ["Variedad de sorrentinos", "Incluye varios rellenos de la casa"],
        serving: "1 porción",
        type: "Pasta rellena variada",
        icon: "🥟"
    },
    "canelones-de-carne-y-verduras": {
        name: "Canelones de Carne y Verduras",
        category: "Pastas",
        price: "16.500",
        description: "Canelones rellenos con un jugoso relleno de carne molida y verduras frescas, gratinados al horno. Un clásico reconfortante.",
        ingredients: ["Masa de canelones", "Carne molida", "Espinaca", "Cebolla", "Zanahoria", "Salsa bechamel", "Queso"],
        serving: "1 porción",
        type: "Pasta rellena gratinada",
        icon: "🥘"
    },
    "canelones-de-cordero-y-espinaca": {
        name: "Canelones de Cordero y Espinaca",
        category: "Pastas",
        price: "19.000",
        description: "Canelones gourmet rellenos de tierna carne de cordero braseada con espinaca fresca. Un plato sofisticado y memorable.",
        ingredients: ["Masa de canelones", "Carne de cordero", "Espinaca", "Cebolla", "Vino tinto", "Salsa bechamel", "Queso parmesano"],
        serving: "1 porción",
        type: "Pasta rellena premium",
        icon: "🥘"
    },
    "canelones-de-crema-de-choclo": {
        name: "Canelones de Crema de Choclo",
        category: "Pastas",
        price: "16.500",
        description: "Canelones vegetarianos con un cremoso relleno de choclo fresco y queso. Dulces, suaves y deliciosos.",
        ingredients: ["Masa de canelones", "Choclo fresco", "Queso crema", "Cebolla", "Sal bechamel", "Queso mozzarella"],
        serving: "1 porción",
        type: "Pasta rellena gratinada",
        icon: "🌽"
    },
    "panzottis-rossi": {
        name: "Panzottis Rossi",
        category: "Pastas",
        price: "15.400",
        description: "Panzottis de masa roja rellenos de calabaza asada, queso y huevo. Una combinación dulce y salada irresistible.",
        ingredients: ["Masa de remolacha", "Calabaza asada", "Queso ricota", "Huevo", "Nuez moscada", "Queso parmesano"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🎃"
    },
    "panzottis-verdes": {
        name: "Panzottis Verdes",
        category: "Pastas",
        price: "15.400",
        description: "Panzottis de masa verde rellenos de ricota, almendras tostadas, espinacas y pimientos asados. Un festival de sabores.",
        ingredients: ["Masa de espinaca", "Ricota artesanal", "Almendras tostadas", "Espinaca", "Pimientos asados", "Ajo"],
        serving: "1 porción",
        type: "Pasta rellena fresca",
        icon: "🥟"
    },
    "creste-di-gallo": {
        name: "Creste di Gallo",
        category: "Pastas",
        price: "17.000",
        description: "Pasta rellena con forma de cresta de gallo, rellena de berenjenas ahumadas, ricota artesanal, queso parmesano y tomillo aromático.",
        ingredients: ["Masa de pasta fresca", "Berenjenas ahumadas", "Ricota artesanal", "Queso parmesano", "Tomillo", "Aceite de oliva"],
        serving: "1 porción",
        type: "Pasta rellena especial",
        icon: "🍆"
    },
    "tortellinis-de-ricota-chorizo-colorado-panceta-ahumada-queso-parmesano-y-puerro-ahumado": {
        name: "Tortellinis de Ricota, Chorizo Colorado, Panceta Ahumada, Queso Parmesano y Puerro Ahumado",
        category: "Pastas",
        price: "19.200",
        description: "Tortellinis premium con un relleno complejo y sabroso. Ricota, chorizo colorado, panceta ahumada, parmesano y puerro en perfecta armonía.",
        ingredients: ["Masa de pasta fresca", "Ricota", "Chorizo colorado", "Panceta ahumada", "Queso parmesano", "Puerro ahumado", "Especias"],
        serving: "1 porción",
        type: "Pasta rellena premium",
        icon: "🥟"
    },
    "lasana-tradicional": {
        name: "Lasaña Tradicional",
        category: "Pastas",
        price: "17.000",
        description: "La clásica lasaña italiana con capas de pasta fresca, salsa boloñesa casera, bechamel cremosa y abundante queso gratinado.",
        ingredients: ["Placas de pasta fresca", "Salsa boloñesa", "Salsa bechamel", "Queso mozzarella", "Queso parmesano"],
        serving: "1 porción",
        type: "Pasta al horno",
        icon: "🍝"
    },
    "flan-casero": {
        name: "Flan Casero",
        category: "Postres",
        price: "5.100",
        description: "Flan tradicional elaborado con nuestra receta familiar. Cremoso, suave y con el punto justo de dulzor.",
        ingredients: ["Huevos", "Leche", "Azúcar", "Esencia de vainilla", "Caramelo"],
        serving: "1 porción",
        type: "Postre tradicional",
        icon: "🍮"
    },
    "tiramisu": {
        name: "Tiramisú",
        category: "Postres",
        price: "6.900",
        description: "El clásico postre italiano con capas de bizcochos embebidos en café, crema de mascarpone y cacao. Irresistible.",
        ingredients: ["Bizcochos vainilla", "Café expresso", "Mascarpone", "Huevos", "Azúcar", "Cacao amargo"],
        serving: "1 porción",
        type: "Postre italiano",
        icon: "☕"
    },
    "bombon-escoces": {
        name: "Bombón Escocés",
        category: "Postres",
        price: "7.000",
        description: "Delicioso bombón helado cubierto de chocolate. Un clásico postre helado que combina dulce de leche, helado y cobertura crocante.",
        ingredients: ["Helado de crema", "Dulce de leche", "Cobertura de chocolate", "Almendras"],
        serving: "1 porción",
        type: "Postre helado",
        icon: "🍫"
    },
    "copa-helada": {
        name: "Copa Helada",
        category: "Postres",
        price: "9.000",
        description: "Una deliciosa combinación de brownie casero, frutos secos, helado cremoso y un toque de ron. El final perfecto para tu comida.",
        ingredients: ["Brownie de chocolate", "Helado de crema", "Nueces", "Almendras", "Ron", "Crema batida", "Salsa de chocolate"],
        serving: "1 porción",
        type: "Postre helado",
        icon: "🍨"
    }
};

// Función para generar el slug a partir del nombre
function generateSlug(name) {
    return name
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .replace(/[^a-z0-9\s-]/g, '') // Eliminar caracteres especiales
        .trim()
        .replace(/\s+/g, '-'); // Reemplazar espacios por guiones
}

// Función para obtener datos de un plato por su slug
function getDishBySlug(slug) {
    return menuData[slug] || null;
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { menuData, generateSlug, getDishBySlug };
}
