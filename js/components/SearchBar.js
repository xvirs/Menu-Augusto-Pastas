// ===== COMPONENTE: SEARCH BAR =====
/**
 * Componente de búsqueda con funcionalidad de resaltado
 * Maneja su propio estado local y actualiza el estado global
 */

class SearchBar {
    constructor() {
        this.element = null;
        this.searchInput = null;
        this.clearButton = null;
        this.searchTimeout = null;
        this.debounceTime = 300;

        this.unsubscribe = null;
    }

    /**
     * Renderizar el componente
     */
    render() {
        const container = document.createElement('div');
        container.className = 'search-container';
        container.setAttribute('role', 'search');

        container.innerHTML = `
            <div class="search-wrapper">
                <input type="text"
                       id="menuSearch"
                       placeholder="Buscar en el menú..."
                       class="search-input"
                       aria-label="Buscar platos en el menú"
                       role="searchbox"
                       autocomplete="off">
                <button id="clearSearch"
                        class="clear-search"
                        style="display: none;"
                        aria-label="Limpiar búsqueda">✕</button>
            </div>
        `;

        this.element = container;
        this.searchInput = container.querySelector('#menuSearch');
        this.clearButton = container.querySelector('#clearSearch');

        this.setupEventListeners();
        this.setupStateSubscription();

        return container;
    }

    /**
     * Configurar event listeners
     */
    setupEventListeners() {
        // Input event con debounce
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));

        // Clear button
        this.clearButton.addEventListener('click', () => this.handleClear());

        // Focus event para móvil
        this.searchInput.addEventListener('focus', () => {
            setTimeout(() => {
                this.searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        });
    }

    /**
     * Manejar búsqueda con debounce
     */
    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        // Limpiar timeout anterior
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        // Mostrar/ocultar botón de limpiar
        this.clearButton.style.display = searchTerm.length > 0 ? 'block' : 'none';

        // Si está vacío, resetear búsqueda inmediatamente
        if (searchTerm.length === 0) {
            window.appState.setState({
                searchTerm: '',
                isSearching: false,
                searchResults: []
            });
            return;
        }

        // Aplicar debounce para búsquedas
        this.searchTimeout = setTimeout(() => {
            window.appState.setState({
                searchTerm: searchTerm,
                isSearching: true
            });
        }, this.debounceTime);
    }

    /**
     * Limpiar búsqueda
     */
    handleClear() {
        this.searchInput.value = '';
        this.clearButton.style.display = 'none';

        window.appState.setState({
            searchTerm: '',
            isSearching: false,
            searchResults: []
        });

        this.searchInput.focus();
    }

    /**
     * Configurar suscripción al estado
     * Sincroniza el input si el estado cambia externamente
     */
    setupStateSubscription() {
        this.unsubscribe = window.appState.subscribe('searchTerm', (newTerm) => {
            if (this.searchInput.value.toLowerCase().trim() !== newTerm) {
                this.searchInput.value = newTerm;
                this.clearButton.style.display = newTerm.length > 0 ? 'block' : 'none';
            }
        });
    }

    /**
     * Actualizar configuración del debounce
     */
    setDebounceTime(ms) {
        this.debounceTime = ms;
    }

    /**
     * Obtener valor actual
     */
    getValue() {
        return this.searchInput ? this.searchInput.value : '';
    }

    /**
     * Establecer valor programáticamente
     */
    setValue(value) {
        if (this.searchInput) {
            this.searchInput.value = value;
            this.handleSearch({ target: this.searchInput });
        }
    }

    /**
     * Focus en el input
     */
    focus() {
        if (this.searchInput) {
            this.searchInput.focus();
        }
    }

    /**
     * Destruir el componente
     */
    destroy() {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
        this.searchInput = null;
        this.clearButton = null;
    }
}

// Exportar
window.SearchBar = SearchBar;
