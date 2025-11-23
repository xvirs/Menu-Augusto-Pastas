// ===== CONFIGURACIÓN CENTRALIZADA =====
/**
 * Configuración global de la aplicación
 * Facilita cambios sin modificar código de componentes
 */

window.appConfig = {
    // Información del restaurante
    restaurant: {
        name: 'AUGUSTO PASTAS',
        subtitle: 'PASTAS FRESCAS Y COMIDAS 100% CASERAS',
        location: 'COFICO',
        foundedYear: 2011,
        instagram: {
            url: 'https://instagram.com/augustopastas',
            username: 'augustopastas'
        }
    },

    // Rutas de assets
    assets: {
        logo: 'img/logo.png',
        decorationLeft: 'img/dibujo2.png',
        decorationRight: 'img/dibujo1.png'
    },

    // Categorías del menú
    categories: [
        { id: 'entradas', label: 'Para Comenzar', icon: null },
        { id: 'pastas', label: 'Pastas', icon: null },
        { id: 'salsas', label: 'Salsas', icon: null },
        { id: 'postres', label: 'Postres', icon: null },
        { id: 'bebidas', label: 'Bebidas', icon: null }
    ],

    // Configuración de búsqueda
    search: {
        debounceTime: 300,
        minChars: 1,
        placeholder: 'Buscar en el menú...',
        noResultsMessage: 'No se encontraron resultados para'
    },

    // Configuración de animaciones
    animations: {
        enabled: true,
        duration: 500,
        scrollBehavior: 'smooth'
    },

    // Configuración de UI
    ui: {
        showLoadingIndicators: true,
        enableKeyboardNavigation: true,
        mobileOptimized: true
    },

    // Textos y labels
    labels: {
        backButton: '← Volver al menú',
        checkAvailability: 'Consultar Disponibilidad',
        ingredients: 'Ingredientes',
        portion: 'PORCIÓN:',
        type: 'TIPO:',
        price: 'PRECIO'
    },

    // Configuración de desarrollo
    debug: false,
    version: '2.0.0'
};

// Función helper para obtener configuración
window.getConfig = function(path) {
    const keys = path.split('.');
    let value = window.appConfig;

    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            return undefined;
        }
    }

    return value;
};

// Log de inicialización
if (window.appConfig.debug) {
    console.log('[Config] Aplicación inicializada', {
        version: window.appConfig.version,
        restaurant: window.appConfig.restaurant.name
    });
}
