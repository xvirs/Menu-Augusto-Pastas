// ===== SISTEMA DE GESTIÓN DE ESTADO CENTRALIZADO =====
/**
 * Sistema reactivo simple para manejar el estado de la aplicación
 * Permite que los componentes se suscriban a cambios de estado
 */

class AppState {
    constructor() {
        this.state = {
            currentSection: 'entradas',
            searchTerm: '',
            searchResults: [],
            isSearching: false,
            selectedItem: null,
            menuData: {},
            allItems: []
        };

        this.listeners = new Map();
    }

    /**
     * Obtener el estado actual completo o una propiedad específica
     */
    getState(key) {
        return key ? this.state[key] : { ...this.state };
    }

    /**
     * Actualizar el estado y notificar a los oyentes
     */
    setState(updates) {
        const prevState = { ...this.state };
        this.state = { ...this.state, ...updates };

        // Notificar a los listeners de los cambios
        Object.keys(updates).forEach(key => {
            if (this.listeners.has(key)) {
                this.listeners.get(key).forEach(callback => {
                    callback(this.state[key], prevState[key]);
                });
            }
        });

        // Notificar a listeners globales
        if (this.listeners.has('*')) {
            this.listeners.get('*').forEach(callback => {
                callback(this.state, prevState);
            });
        }
    }

    /**
     * Suscribirse a cambios en una propiedad específica del estado
     */
    subscribe(key, callback) {
        if (!this.listeners.has(key)) {
            this.listeners.set(key, []);
        }
        this.listeners.get(key).push(callback);

        // Retornar función de desuscripción
        return () => {
            const callbacks = this.listeners.get(key);
            const index = callbacks.indexOf(callback);
            if (index > -1) {
                callbacks.splice(index, 1);
            }
        };
    }

    /**
     * Limpiar todos los listeners
     */
    clearListeners() {
        this.listeners.clear();
    }
}

// Exportar instancia única del estado
window.appState = new AppState();
