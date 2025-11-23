// ===== APLICACIÓN PRINCIPAL =====
/**
 * Orquestador de la aplicación
 * Inicializa y coordina todos los componentes
 */

class App {
    constructor() {
        this.components = {
            header: null,
            navigation: null,
            searchBar: null,
            menu: null,
            footer: null
        };

        this.isInitialized = false;
    }

    /**
     * Inicializar la aplicación
     */
    async init() {
        if (this.isInitialized) {
            console.warn('[App] Ya está inicializada');
            return;
        }

        try {
            this.log('Iniciando aplicación...');

            // Esperar a que el DOM esté listo
            if (document.readyState === 'loading') {
                await new Promise(resolve => {
                    document.addEventListener('DOMContentLoaded', resolve);
                });
            }

            // Verificar que los componentes estén cargados
            this.checkDependencies();

            // Inicializar componentes en orden
            this.initHeader();
            this.initNavigation();
            this.initSearchBar();
            this.initMenu();
            this.initFooter();

            // Configurar navegación por teclado
            if (window.appConfig.ui.enableKeyboardNavigation) {
                this.initKeyboardNavigation();
            }

            // Smooth scroll
            this.initSmoothScroll();

            this.isInitialized = true;
            this.log('Aplicación iniciada correctamente', 'success');

            // Emitir evento de inicialización
            this.emit('app:ready');

        } catch (error) {
            console.error('[App] Error al inicializar:', error);
            this.emit('app:error', error);
        }
    }

    /**
     * Verificar dependencias
     */
    checkDependencies() {
        const required = [
            'appState',
            'appConfig',
            'Header',
            'Navigation',
            'SearchBar',
            'Menu',
            'Footer'
        ];

        const missing = required.filter(dep => !window[dep]);

        if (missing.length > 0) {
            throw new Error(`Dependencias faltantes: ${missing.join(', ')}`);
        }
    }

    /**
     * Inicializar Header
     */
    initHeader() {
        // El header ya existe en el HTML, no necesitamos renderizarlo
        // Solo creamos la instancia para posibles futuras modificaciones
        this.components.header = new Header();
        this.log('Header inicializado');
    }

    /**
     * Inicializar Navigation
     */
    initNavigation() {
        // La navegación ya existe en el HTML dentro de sticky-header-wrapper
        // Pero vamos a reemplazarla con el componente
        const existingNav = document.querySelector('.nav-menu');
        const stickyWrapper = document.querySelector('.sticky-header-wrapper');

        if (existingNav && stickyWrapper) {
            this.components.navigation = new Navigation();
            const navElement = this.components.navigation.render();

            // Reemplazar navegación existente
            existingNav.replaceWith(navElement);

            // Inicializar navegación por teclado
            this.components.navigation.initKeyboardNavigation();

            this.log('Navigation inicializado');
        } else {
            console.warn('[App] No se encontró navegación existente');
        }
    }

    /**
     * Inicializar Search Bar
     */
    initSearchBar() {
        const stickyWrapper = document.querySelector('.sticky-header-wrapper');

        if (stickyWrapper) {
            this.components.searchBar = new SearchBar();
            const searchElement = this.components.searchBar.render();

            // Agregar al sticky wrapper
            stickyWrapper.appendChild(searchElement);

            this.log('SearchBar inicializado');
        } else {
            console.warn('[App] No se encontró sticky-header-wrapper');
        }
    }

    /**
     * Inicializar Menu
     */
    initMenu() {
        this.components.menu = new Menu();
        this.components.menu.initialize();
        this.log('Menu inicializado');
    }

    /**
     * Inicializar Footer
     */
    initFooter() {
        // El footer ya existe en el HTML
        // Solo creamos la instancia para posibles futuras modificaciones
        this.components.footer = new Footer();

        // Actualizar año automáticamente
        this.components.footer.updateYear();

        this.log('Footer inicializado');
    }

    /**
     * Navegación por teclado global
     */
    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K para focus en búsqueda
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                if (this.components.searchBar) {
                    this.components.searchBar.focus();
                }
            }

            // Escape para limpiar búsqueda
            if (e.key === 'Escape') {
                if (this.components.searchBar && this.components.searchBar.getValue()) {
                    this.components.searchBar.handleClear();
                }
            }
        });

        this.log('Navegación por teclado configurada');
    }

    /**
     * Smooth scroll para anchor links
     */
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: window.appConfig.animations.scrollBehavior,
                        block: 'start'
                    });
                }
            });
        });

        this.log('Smooth scroll configurado');
    }

    /**
     * Obtener componente por nombre
     */
    getComponent(name) {
        return this.components[name] || null;
    }

    /**
     * Obtener estado global
     */
    getState(key) {
        return window.appState.getState(key);
    }

    /**
     * Actualizar estado global
     */
    setState(updates) {
        window.appState.setState(updates);
    }

    /**
     * Suscribirse a cambios de estado
     */
    subscribe(key, callback) {
        return window.appState.subscribe(key, callback);
    }

    /**
     * Emitir evento custom
     */
    emit(eventName, detail = {}) {
        const event = new CustomEvent(eventName, { detail });
        window.dispatchEvent(event);
        this.log(`Evento emitido: ${eventName}`);
    }

    /**
     * Escuchar evento custom
     */
    on(eventName, callback) {
        window.addEventListener(eventName, callback);
    }

    /**
     * Logging con control de debug
     */
    log(message, level = 'info') {
        if (!window.appConfig.debug && level === 'info') return;

        const prefix = '[App]';
        const styles = {
            info: 'color: #2196F3',
            success: 'color: #4CAF50',
            warning: 'color: #FF9800',
            error: 'color: #F44336'
        };

        console.log(`%c${prefix} ${message}`, styles[level] || styles.info);
    }

    /**
     * Reiniciar la aplicación
     */
    async restart() {
        this.destroy();
        await this.init();
    }

    /**
     * Destruir la aplicación
     */
    destroy() {
        this.log('Destruyendo aplicación...');

        Object.values(this.components).forEach(component => {
            if (component && typeof component.destroy === 'function') {
                component.destroy();
            }
        });

        this.components = {
            header: null,
            navigation: null,
            searchBar: null,
            menu: null,
            footer: null
        };

        window.appState.clearListeners();

        this.isInitialized = false;
        this.log('Aplicación destruida');
    }
}

// Crear instancia global
window.app = new App();

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app.init();
    });
} else {
    window.app.init();
}

// Exportar para uso en consola/debugging
if (window.appConfig.debug) {
    console.log('%c[App] Modo debug activado', 'color: #FF9800; font-weight: bold');
    console.log('%cComandos disponibles:', 'font-weight: bold');
    console.log('  - window.app: Instancia principal');
    console.log('  - window.appState: Estado global');
    console.log('  - window.appConfig: Configuración');
}
