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
