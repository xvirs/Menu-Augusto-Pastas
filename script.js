// ===== UTILITIES =====
function generateSlug(name) {
    return name
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Eliminar acentos
        .replace(/[^a-z0-9ñ\s-]/g, '') // Eliminar caracteres especiales (preserva ñ)
        .trim()
        .replace(/\s+/g, '-'); // Reemplazar espacios por guiones
}

// ===== RENDERING ENGINE =====
const App = {
    init() {
        if (typeof restaurantConfig === 'undefined') {
            console.error('Configuration file not loaded');
            return;
        }
        this.applyTheme();
        this.renderHead();
        this.renderHeader();
        this.renderNav();
        this.renderMenu();
        this.renderFooter();

        // Initialize interactive features after rendering
        this.initInteractiveFeatures();
    },

    applyTheme() {
        const theme = restaurantConfig.info.theme;
        if (theme) {
            const root = document.documentElement;
            if (theme.primaryColor) root.style.setProperty('--primary-color', theme.primaryColor);
            if (theme.backgroundColor) {
                root.style.setProperty('--background-color', theme.backgroundColor);
                // Simple dark mode check
                const isDark = theme.backgroundColor.toLowerCase() === '#121212' || theme.backgroundColor.toLowerCase() === '#000000';
                if (isDark) {
                    root.style.setProperty('--bg-light', '#1E1E1E');
                    root.style.setProperty('--border-color', '#333333');
                    root.style.setProperty('--text-light', '#AAAAAA');
                }
            }
            if (theme.textColor) root.style.setProperty('--text-color', theme.textColor);
            if (theme.accentColor) root.style.setProperty('--secondary-color', theme.accentColor);
        }
    },

    renderHead() {
        const info = restaurantConfig.info;
        document.title = `${info.name} - ${info.location} | Menú Digital`;

        // Update meta tags
        this.setMeta('description', info.description);
        this.setMeta('keywords', info.keywords);

        // Update OG tags
        this.setMetaProperty('og:title', `${info.name} - ${info.location} | Menú Digital`);
        this.setMetaProperty('og:description', info.description);
        this.setMetaProperty('og:image', info.images.logo);

        // Update Favicon
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) favicon.href = info.images.favicon;
    },

    setMeta(name, content) {
        let element = document.querySelector(`meta[name="${name}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.name = name;
            document.head.appendChild(element);
        }
        element.content = content;
    },

    setMetaProperty(property, content) {
        let element = document.querySelector(`meta[property="${property}"]`);
        if (!element) {
            element = document.createElement('meta');
            element.setAttribute('property', property);
            document.head.appendChild(element);
        }
        element.content = content;
    },

    renderHeader() {
        const info = restaurantConfig.info;
        const header = document.getElementById('mainHeader');

        header.innerHTML = `
            <div class="header-decoration header-decoration-left">
                <img src="${info.images.decorationLeft}" alt="Decoración izquierda" class="decoration-img">
            </div>
            <div class="header-decoration header-decoration-right">
                <img src="${info.images.decorationRight}" alt="Decoración derecha" class="decoration-img">
            </div>
            <div class="header-content">
                <img src="${info.images.logo}" alt="${info.name} Logo" class="logo">
                <h1>${info.name.toUpperCase()}</h1>
                <p class="subtitle">${info.subtitle}</p>
                ${this.renderSocialLink(info.social.instagram)}
            </div>
        `;
    },

    renderSocialLink(instagram) {
        if (!instagram) return '';
        return `
            <a href="${instagram.url}" target="_blank" class="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                ${instagram.handle.replace('@', '')}
            </a>
        `;
    },

    renderNav() {
        const nav = document.getElementById('navMenu');
        const sections = restaurantConfig.menuSections;

        nav.innerHTML = sections.map((section, index) => `
            <button class="nav-btn ${index === 0 ? 'active' : ''}" 
                    data-section="${section.id}" 
                    aria-pressed="${index === 0}" 
                    aria-controls="${section.id}">
                ${section.title}
            </button>
        `).join('');
    },

    renderMenu() {
        const main = document.getElementById('mainContent');
        const sections = restaurantConfig.menuSections;

        main.innerHTML = sections.map((section, index) => `
            <section id="${section.id}" class="menu-section ${index === 0 ? 'active' : ''}">
                <h2 class="section-title">
                    ${section.title} 
                    ${section.note ? `<span class="note">${section.note}</span>` : ''}
                </h2>
                ${section.banner ? `
                    <div class="info-banner">
                        <p>${section.banner}</p>
                    </div>
                ` : ''}
                ${section.description ? `<p class="aperitivo-desc">${section.description}</p>` : ''}
                
                ${this.renderSectionItems(section.items)}
                
                ${section.subsections ? section.subsections.map(sub => `
                    <h3 class="subsection-title">
                        ${sub.title}
                        ${sub.note ? `<span class="note">${sub.note}</span>` : ''}
                    </h3>
                    ${sub.description ? `<p class="aperitivo-desc">${sub.description}</p>` : ''}
                    ${sub.type === 'list' ? this.renderSimpleList(sub.items) : this.renderSectionItems(sub.items)}
                `).join('') : ''}
            </section>
        `).join('');
    },

    renderSectionItems(itemIds) {
        if (!itemIds || itemIds.length === 0) return '';

        return `<div class="menu-items">
            ${itemIds.map(id => {
            const item = restaurantConfig.items[id];
            if (!item) return '';

            return `
                    <div class="menu-item">
                        <span class="item-name">
                            ${item.name}
                            ${item.shortDescription ? `<span class="item-description">${item.shortDescription}</span>` : ''}
                        </span>
                        <span class="item-price">$${item.price}</span>
                    </div>
                `;
        }).join('')}
        </div>`;
    },

    renderSimpleList(items) {
        return `<div class="basic-sauces">
            ${items.map(item => `<span class="sauce-item">${item}</span>`).join('')}
        </div>`;
    },

    renderFooter() {
        const info = restaurantConfig.info;
        const footer = document.getElementById('mainFooter');
        const currentYear = new Date().getFullYear();

        footer.innerHTML = `
            <p>&copy; ${currentYear} ${info.name} - ${info.location}</p>
            <p>Desde el ${info.since} • ${info.subtitle}</p>
        `;
    },

    initInteractiveFeatures() {
        initKeyboardHandling();
        window.menuSearch = new MenuSearch();
        initNavigation();
        initMenuItems();
        initAnimations();
        initSmoothScroll();
    }
};

// ===== INTERACTIVE FEATURES (Adapted from original script.js) =====

// Keyboard Handling
function initKeyboardHandling() {
    const searchInput = document.getElementById('menuSearch');
    if (!searchInput) return;

    searchInput.addEventListener('focus', function () {
        setTimeout(() => {
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    });
}

// Search System
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
        // Check if already exists
        if (document.querySelector('.search-container')) return;

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

        const stickyWrapper = document.querySelector('.sticky-header-wrapper');
        if (stickyWrapper) {
            stickyWrapper.appendChild(searchContainer);
        } else {
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
            this.originalItemStates.set(item, {
                html: itemName.innerHTML,
                display: item.style.display
            });
        });
    }

    setupListeners() {
        if (this.searchInput) {
            this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        }
        if (this.clearButton) {
            this.clearButton.addEventListener('click', () => this.handleClear());
        }
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

            const nameText = this.normalizeText(itemName.textContent.toLowerCase());
            const descriptionText = itemDescription ? this.normalizeText(itemDescription.textContent.toLowerCase()) : '';
            const fullText = nameText + ' ' + descriptionText;
            const normalizedSearchTerm = this.normalizeText(searchTerm);

            if (fullText.includes(normalizedSearchTerm)) {
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

    normalizeText(text) {
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

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

// Navigation
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function () {
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
    document.addEventListener('keydown', function (e) {
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

// Menu Items Logic
function initMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        const itemName = item.querySelector('.item-name');
        if (!itemName) return;

        // Get the text content, removing any nested elements like .item-description
        const clone = itemName.cloneNode(true);
        const description = clone.querySelector('.item-description');
        if (description) description.remove();
        const dishName = clone.textContent.trim();

        const slug = generateSlug(dishName);

        // Find item in config by slug
        const hasDetailPage = restaurantConfig.items[slug];

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

    item.addEventListener('mouseenter', function () {
        this.style.transform = 'translateX(5px)';
    });

    item.addEventListener('mouseleave', function () {
        this.style.transform = 'translateX(0)';
    });

    item.addEventListener('click', function () {
        window.location.href = `detalle.html?plato=${slug}`;
    });
}

function setupNonClickableItem(item) {
    item.classList.add('no-detail');
    item.style.cursor = 'default';
}

// Animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
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
        anchor.addEventListener('click', function (e) {
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

// Initialize Application
document.addEventListener('DOMContentLoaded', function () {
    App.init();
});