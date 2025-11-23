// ===== COMPONENTE: NAVIGATION (FILTROS) =====
/**
 * Componente de navegación sticky con filtros de categorías
 * Se suscribe al estado para mantener sincronización
 */

class Navigation {
    constructor() {
        this.element = null;
        this.buttons = [];
        this.sections = [
            { id: 'entradas', label: 'Para Comenzar' },
            { id: 'pastas', label: 'Pastas' },
            { id: 'salsas', label: 'Salsas' },
            { id: 'postres', label: 'Postres' },
            { id: 'bebidas', label: 'Bebidas' }
        ];

        // Suscribirse a cambios en currentSection
        this.unsubscribe = null;
    }

    /**
     * Renderizar el componente
     */
    render() {
        const nav = document.createElement('nav');
        nav.className = 'nav-menu';
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Navegación del menú');

        this.sections.forEach((section, index) => {
            const button = document.createElement('button');
            button.className = 'nav-btn';
            button.setAttribute('data-section', section.id);
            button.setAttribute('aria-pressed', 'false');
            button.setAttribute('aria-controls', section.id);
            button.textContent = section.label;

            // Establecer primer botón como activo
            if (index === 0) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            }

            button.addEventListener('click', () => this.handleNavigation(section.id));
            nav.appendChild(button);
            this.buttons.push(button);
        });

        this.element = nav;
        this.setupStateSubscription();
        return nav;
    }

    /**
     * Manejar click en navegación
     */
    handleNavigation(sectionId) {
        // Limpiar búsqueda cuando se navega
        window.appState.setState({
            currentSection: sectionId,
            searchTerm: '',
            isSearching: false
        });

        // Scroll a la sección
        this.scrollToSection(sectionId);
    }

    /**
     * Scroll suave a una sección
     */
    scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    /**
     * Actualizar estado visual de botones
     */
    updateActiveButton(activeSectionId) {
        this.buttons.forEach(button => {
            const sectionId = button.getAttribute('data-section');
            if (sectionId === activeSectionId) {
                button.classList.add('active');
                button.setAttribute('aria-pressed', 'true');
            } else {
                button.classList.remove('active');
                button.setAttribute('aria-pressed', 'false');
            }
        });
    }

    /**
     * Configurar suscripción al estado
     */
    setupStateSubscription() {
        this.unsubscribe = window.appState.subscribe('currentSection', (newSection) => {
            this.updateActiveButton(newSection);
        });
    }

    /**
     * Navegación con teclado (flechas)
     */
    initKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const currentSection = window.appState.getState('currentSection');
                const currentIndex = this.sections.findIndex(s => s.id === currentSection);

                let nextIndex;
                if (e.key === 'ArrowRight') {
                    nextIndex = (currentIndex + 1) % this.sections.length;
                } else {
                    nextIndex = (currentIndex - 1 + this.sections.length) % this.sections.length;
                }

                this.handleNavigation(this.sections[nextIndex].id);
            }
        });
    }

    /**
     * Destruir el componente
     */
    destroy() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
        this.buttons = [];
    }
}

// Exportar
window.Navigation = Navigation;
