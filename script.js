// ===== KEYBOARD HANDLING - Optimized for mobile =====
function initKeyboardHandling() {
    const searchInput = document.getElementById('menuSearch');
    if (!searchInput) return;

    // Smooth scroll cuando el input obtiene focus
    searchInput.addEventListener('focus', function() {
        setTimeout(() => {
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
}

// ===== SEARCH SYSTEM - SIMPLE & ROBUST =====
class MenuSearch {
    constructor() {
        this.searchInput = null;
        this.clearButton = null;
        this.searchTimeout = null;
        this.allItems = [];
        this.originalItemStates = new Map();
        this.init();
    }

    init() {
        this.createSearchContainer();
        this.cacheAllItems();
        this.setupListeners();
    }

    createSearchContainer() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        searchContainer.setAttribute('role', 'search');
        searchContainer.innerHTML = `
            <div class="search-wrapper">
                <input type="text" id="menuSearch"
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

        // Insertar dentro del sticky-header-wrapper
        const stickyWrapper = document.querySelector('.sticky-header-wrapper');
        if (stickyWrapper) {
            stickyWrapper.appendChild(searchContainer);
        } else {
            // Fallback: insertar después del nav-menu si no existe el wrapper
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.parentNode) {
                navMenu.parentNode.insertBefore(searchContainer, navMenu.nextSibling);
            } else {
                document.body.appendChild(searchContainer);
            }
        }

        this.searchInput = document.getElementById('menuSearch');
        this.clearButton = document.getElementById('clearSearch');
    }

    cacheAllItems() {
        const items = document.querySelectorAll('.menu-item');
        items.forEach(item => {
            const itemName = item.querySelector('.item-name');
            this.allItems.push(item);
            // Guardar el HTML original sin procesamiento
            this.originalItemStates.set(item, {
                html: itemName.innerHTML,
                display: item.style.display
            });
        });
    }

    setupListeners() {
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        this.clearButton.addEventListener('click', () => this.handleClear());
    }

    handleSearch(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        if (searchTerm.length === 0) {
            this.clearButton.style.display = 'none';
            this.resetSearch();
            return;
        }

        this.clearButton.style.display = 'block';

        this.searchTimeout = setTimeout(() => {
            this.performSearch(searchTerm);
        }, 300);
    }

    handleClear() {
        this.searchInput.value = '';
        this.clearButton.style.display = 'none';
        this.resetSearch();
        this.searchInput.focus();
    }

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
                
                let parent = item.closest('.menu-section');
                if (parent) {
                    visibleSections.add(parent);
                }

                this.highlightMatch(item, searchTerm);
            }
        });

        this.allItems.forEach(item => {
            item.style.display = matchedItems.includes(item) ? 'flex' : 'none';
        });

        document.querySelectorAll('.menu-section').forEach(section => {
            section.style.display = visibleSections.has(section) ? 'block' : 'none';
        });

        if (matchedItems.length === 0) {
            this.showNoResults(searchTerm);
        } else {
            this.removeNoResults();
            setTimeout(() => {
                matchedItems[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 100);
        }
    }

    /**
     * Busca y resalta coincidencias en el elemento sin partir palabras
     * Maneja correctamente acentos y caracteres especiales
     */
    highlightMatch(item, searchTerm) {
        const itemName = item.querySelector('.item-name');
        const originalState = this.originalItemStates.get(item);
        
        if (!originalState) return;

        // Obtener el texto original sin procesar
        const cleanDiv = document.createElement('div');
        cleanDiv.innerHTML = originalState.html;
        const plainText = cleanDiv.textContent;

        // Crear una versión normalizada para la búsqueda (sin acentos)
        const normalizedPlainText = this.normalizeText(plainText);
        const normalizedSearchTerm = this.normalizeText(searchTerm);

        // Encontrar coincidencias en el texto normalizado
        const matches = this.findMatches(normalizedPlainText, normalizedSearchTerm);

        if (matches.length === 0) {
            itemName.innerHTML = originalState.html;
            return;
        }

        // Construir el HTML resaltado utilizando los índices correctos
        const highlightedHtml = this.buildHighlightedHtml(plainText, matches);
        itemName.innerHTML = highlightedHtml;
    }

    /**
     * Normaliza texto removiendo acentos para comparación
     */
    normalizeText(text) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    /**
     * Encuentra todas las coincidencias de un término en el texto
     * Retorna array de objetos {start, end, word}
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
     * Construye el HTML con las partes resaltadas
     * Utiliza los índices del texto normalizado pero aplica al texto original
     */
    buildHighlightedHtml(plainText, matches) {
        if (matches.length === 0) {
            return this.escapeHtml(plainText);
        }

        let html = '';
        let lastIndex = 0;

        matches.forEach(match => {
            // Agregar texto antes del match
            if (match.start > lastIndex) {
                html += this.escapeHtml(plainText.substring(lastIndex, match.start));
            }

            // Agregar el match resaltado
            const matchedText = plainText.substring(match.start, match.end);
            html += `<span class="highlight">${this.escapeHtml(matchedText)}</span>`;

            lastIndex = match.end;
        });

        // Agregar texto restante
        if (lastIndex < plainText.length) {
            html += this.escapeHtml(plainText.substring(lastIndex));
        }

        return html;
    }

    /**
     * Escapa caracteres HTML para evitar inyecciones
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

    resetHighlights() {
        this.allItems.forEach(item => {
            const itemName = item.querySelector('.item-name');
            const originalState = this.originalItemStates.get(item);
            
            if (originalState) {
                itemName.innerHTML = originalState.html;
            }
        });
    }

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

    showNoResults(searchTerm) {
        this.removeNoResults();
        
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = `No se encontraron resultados para "<strong>${this.escapeHtml(searchTerm)}</strong>"`;
        
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
            mainContent.appendChild(noResults);
        }
    }

    removeNoResults() {
        const noResults = document.querySelector('.no-results');
        if (noResults) {
            noResults.remove();
        }
    }
}

// ===== NAVIGATION =====
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    // Set first button as active
    if (navButtons.length > 0) {
        navButtons[0].classList.add('active');
        navButtons[0].setAttribute('aria-pressed', 'true');
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleNavigation(this, navButtons);
        });
    });

    initKeyboardNavigation(navButtons);
}

function handleNavigation(clickedButton, allButtons) {
    clearSearchOnNavigation();
    updateButtonStates(allButtons, clickedButton);
    scrollToSection(clickedButton);
}

function clearSearchOnNavigation() {
    const searchInput = document.getElementById('menuSearch');
    if (searchInput && searchInput.value) {
        searchInput.value = '';
        const clearButton = document.getElementById('clearSearch');
        if (clearButton) {
            clearButton.style.display = 'none';
        }
        if (window.menuSearch) {
            window.menuSearch.resetSearch();
        }
    }
}

function updateButtonStates(buttons, activeButton) {
    buttons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    activeButton.classList.add('active');
    activeButton.setAttribute('aria-pressed', 'true');
}

function scrollToSection(button) {
    const sectionId = button.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function initKeyboardNavigation(navButtons) {
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
            const activeButton = document.querySelector('.nav-btn.active');
            const buttons = Array.from(navButtons);
            const currentIndex = buttons.indexOf(activeButton);

            let nextIndex;
            if (e.key === 'ArrowRight') {
                nextIndex = (currentIndex + 1) % buttons.length;
            } else {
                nextIndex = (currentIndex - 1 + buttons.length) % buttons.length;
            }

            buttons[nextIndex].click();
        }
    });
}

// ===== MENU ITEMS =====
function initMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('.item-name');
        if (!itemName) return;

        const dishName = itemName.childNodes[0].textContent.trim();
        const slug = generateSlug(dishName);
        const hasDetailPage = typeof menuData !== 'undefined' && menuData[slug];

        if (hasDetailPage) {
            setupClickableItem(item, slug);
        } else {
            setupNonClickableItem(item);
        }
    });
}

function setupClickableItem(item, slug) {
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

function setupNonClickableItem(item) {
    item.classList.add('no-detail');
    item.style.cursor = 'default';
}

// ===== ANIMATIONS =====
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    initKeyboardHandling();
    window.menuSearch = new MenuSearch();
    initNavigation();
    initMenuItems();
    initAnimations();
    initSmoothScroll();
});