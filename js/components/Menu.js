// ===== COMPONENTE: MENU (LISTA DE ITEMS) =====
/**
 * Componente principal del menú con funcionalidad de búsqueda y filtrado
 * Se suscribe al estado para actualizar la visualización
 */

class Menu {
    constructor() {
        this.element = null;
        this.allItems = [];
        this.originalItemStates = new Map();
        this.unsubscribes = [];
    }

    /**
     * Renderizar el componente
     * No crea el HTML desde cero, sino que usa el existente del index.html
     */
    initialize() {
        this.element = document.querySelector('.main-content');
        if (!this.element) {
            console.error('No se encontró .main-content');
            return null;
        }

        this.cacheAllItems();
        this.setupStateSubscriptions();
        this.initAnimations();
        this.setupItemClickHandlers();

        return this.element;
    }

    /**
     * Cachear todos los items del menú
     */
    cacheAllItems() {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            const itemName = item.querySelector('.item-name');
            this.allItems.push(item);

            // Guardar HTML original para restaurar después de búsqueda
            this.originalItemStates.set(item, {
                html: itemName.innerHTML,
                display: item.style.display
            });
        });

        // Guardar en el estado global
        window.appState.setState({ allItems: this.allItems });
    }

    /**
     * Configurar suscripciones al estado
     */
    setupStateSubscriptions() {
        // Suscribirse a cambios en búsqueda
        const unsubSearch = window.appState.subscribe('searchTerm', (searchTerm) => {
            if (searchTerm) {
                this.performSearch(searchTerm);
            } else {
                this.resetSearch();
            }
        });

        this.unsubscribes.push(unsubSearch);
    }

    /**
     * Realizar búsqueda
     */
    performSearch(searchTerm) {
        let matchedItems = [];
        let visibleSections = new Set();

        this.resetHighlights();

        this.allItems.forEach(item => {
            const itemName = item.querySelector('.item-name');
            const itemDescription = item.querySelector('.item-description');

            const nameText = itemName.textContent.toLowerCase();
            const descriptionText = itemDescription ? itemDescription.textContent.toLowerCase() : '';
            const fullText = nameText + ' ' + descriptionText;

            if (fullText.includes(searchTerm)) {
                matchedItems.push(item);

                const parent = item.closest('.menu-section');
                if (parent) {
                    visibleSections.add(parent);
                }

                this.highlightMatch(item, searchTerm);
            }
        });

        // Actualizar visibilidad
        this.allItems.forEach(item => {
            item.style.display = matchedItems.includes(item) ? 'flex' : 'none';
        });

        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = visibleSections.has(section) ? 'block' : 'none';
        });

        // Mostrar mensaje si no hay resultados
        if (matchedItems.length === 0) {
            this.showNoResults(searchTerm);
        } else {
            this.removeNoResults();
            // Scroll al primer resultado
            setTimeout(() => {
                matchedItems[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }

        // Actualizar estado con resultados
        window.appState.setState({ searchResults: matchedItems });
    }

    /**
     * Resaltar coincidencias en un item
     */
    highlightMatch(item, searchTerm) {
        const itemName = item.querySelector('.item-name');
        const originalState = this.originalItemStates.get(item);

        if (!originalState) return;

        const cleanDiv = document.createElement('div');
        cleanDiv.innerHTML = originalState.html;
        const plainText = cleanDiv.textContent;

        const normalizedPlainText = this.normalizeText(plainText);
        const normalizedSearchTerm = this.normalizeText(searchTerm);

        const matches = this.findMatches(normalizedPlainText, normalizedSearchTerm);

        if (matches.length === 0) {
            itemName.innerHTML = originalState.html;
            return;
        }

        const highlightedHtml = this.buildHighlightedHtml(plainText, matches);
        itemName.innerHTML = highlightedHtml;
    }

    /**
     * Normalizar texto (sin acentos)
     */
    normalizeText(text) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    /**
     * Encontrar coincidencias
     */
    findMatches(normalizedText, normalizedTerm) {
        const matches = [];
        const regex = new RegExp(`\\b${normalizedTerm}\\w*`, 'gi');
        let match;

        while ((match = regex.exec(normalizedText)) !== null) {
            matches.push({
                start: match.index,
                end: match.index + match[0].length,
                word: match[0]
            });
        }

        return matches;
    }

    /**
     * Construir HTML con highlights
     */
    buildHighlightedHtml(plainText, matches) {
        if (matches.length === 0) {
            return this.escapeHtml(plainText);
        }

        let html = '';
        let lastIndex = 0;

        matches.forEach(match => {
            if (match.start > lastIndex) {
                html += this.escapeHtml(plainText.substring(lastIndex, match.start));
            }

            const matchedText = plainText.substring(match.start, match.end);
            html += `<span class="highlight">${this.escapeHtml(matchedText)}</span>`;

            lastIndex = match.end;
        });

        if (lastIndex < plainText.length) {
            html += this.escapeHtml(plainText.substring(lastIndex));
        }

        return html;
    }

    /**
     * Escapar HTML
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Resetear highlights
     */
    resetHighlights() {
        this.allItems.forEach(item => {
            const itemName = item.querySelector('.item-name');
            const originalState = this.originalItemStates.get(item);

            if (originalState) {
                itemName.innerHTML = originalState.html;
            }
        });
    }

    /**
     * Resetear búsqueda
     */
    resetSearch() {
        this.allItems.forEach(item => {
            item.style.display = 'flex';
        });

        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = 'block';
        });

        this.resetHighlights();
        this.removeNoResults();
    }

    /**
     * Mostrar mensaje de "sin resultados"
     */
    showNoResults(searchTerm) {
        this.removeNoResults();

        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `No se encontraron resultados para "<strong>${this.escapeHtml(searchTerm)}</strong>"`;

        if (this.element) {
            this.element.appendChild(noResults);
        }
    }

    /**
     * Remover mensaje de "sin resultados"
     */
    removeNoResults() {
        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.remove();
        }
    }

    /**
     * Configurar animaciones de entrada
     */
    initAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        this.allItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    }

    /**
     * Configurar handlers de click en items
     */
    setupItemClickHandlers() {
        this.allItems.forEach(item => {
            const itemName = item.querySelector('.item-name');
            if (!itemName) return;

            const dishName = itemName.childNodes[0].textContent.trim();
            const slug = this.generateSlug(dishName);

            // Verificar si tiene página de detalle
            const menuData = window.menuData || {};
            const hasDetailPage = menuData[slug] !== undefined;

            if (hasDetailPage) {
                this.setupClickableItem(item, slug);
            } else {
                this.setupNonClickableItem(item);
            }
        });
    }

    /**
     * Configurar item clickeable (con detalle)
     */
    setupClickableItem(item, slug) {
        item.style.cursor = 'pointer';
        item.classList.add('has-detail');

        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });

        item.addEventListener('click', function() {
            window.location.href = `detalle.html?plato=${slug}`;
        });
    }

    /**
     * Configurar item no clickeable
     */
    setupNonClickableItem(item) {
        item.classList.add('no-detail');
        item.style.cursor = 'default';
    }

    /**
     * Generar slug desde nombre de plato
     */
    generateSlug(text) {
        return text
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .trim()
            .replace(/\s+/g, '-');
    }

    /**
     * Destruir el componente
     */
    destroy() {
        this.unsubscribes.forEach(unsub => unsub());
        this.unsubscribes = [];
        this.allItems = [];
        this.originalItemStates.clear();
    }
}

// Exportar
window.Menu = Menu;
