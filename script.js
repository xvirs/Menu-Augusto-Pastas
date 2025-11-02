// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Navigation
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');

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
        clearSearch();
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

// Menu Items
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

// Search
function initSearch() {
    createSearchContainer();
    setupSearchListeners();
}

function createSearchContainer() {
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.setAttribute('role', 'search');
    searchContainer.innerHTML = `
        <div class="search-wrapper">
            <input type="text" id="menuSearch" placeholder="Buscar en el menú..." class="search-input"
                   aria-label="Buscar platos en el menú" role="searchbox">
            <button id="clearSearch" class="clear-search" style="display: none;"
                    aria-label="Limpiar búsqueda">✕</button>
        </div>
    `;

    document.body.insertBefore(searchContainer, document.body.firstChild);
}

function setupSearchListeners() {
    const searchInput = document.getElementById('menuSearch');
    const clearButton = document.getElementById('clearSearch');
    let searchTimeout = null;

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTimeout) {
            clearTimeout(searchTimeout);
            searchTimeout = null;
        }

        if (searchTerm.length > 0) {
            clearButton.style.display = 'block';
            searchTimeout = setTimeout(() => {
                performSearch(searchTerm);
            }, 600);
        } else {
            clearButton.style.display = 'none';
            clearSearch();
        }
    });

    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        if (searchTimeout) {
            clearTimeout(searchTimeout);
            searchTimeout = null;
        }
        clearSearch();
        searchInput.focus();
    });
}

function performSearch(searchTerm) {
    const sections = document.querySelectorAll('.menu-section');
    let hasResults = false;
    let firstMatch = null;

    document.querySelectorAll('.search-first-result').forEach(item => {
        item.classList.remove('search-first-result');
    });

    sections.forEach(section => {
        const items = section.querySelectorAll('.menu-item');
        let sectionHasResults = false;

        items.forEach(item => {
            if (itemMatchesSearch(item, searchTerm)) {
                item.style.display = 'flex';
                sectionHasResults = true;
                hasResults = true;
                highlightSearchTerm(item, searchTerm);

                if (!firstMatch) {
                    firstMatch = item;
                }
            } else {
                item.style.display = 'none';
            }
        });

        updateSectionVisibilityForSearch(section, sectionHasResults);
    });

    toggleNoResultsMessage(hasResults);

    if (firstMatch) {
        firstMatch.classList.add('search-first-result');
        setTimeout(() => {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}

function itemMatchesSearch(item, searchTerm) {
    const itemName = item.querySelector('.item-name');
    const itemDescription = item.querySelector('.item-description');

    const nameText = itemName.textContent.toLowerCase();
    const descriptionText = itemDescription ? itemDescription.textContent.toLowerCase() : '';
    const combinedText = nameText + ' ' + descriptionText;

    return combinedText.includes(searchTerm);
}

function highlightSearchTerm(item, searchTerm) {
    const itemName = item.querySelector('.item-name');

    // First, remove any existing highlight wrapper
    const existingWrapper = itemName.querySelector('span[style*="inline"]');
    let text;

    if (existingWrapper) {
        // If there's already a wrapper, get the clean text from it
        text = existingWrapper.textContent.trim();
        const textNode = document.createTextNode(text);
        itemName.replaceChild(textNode, existingWrapper);
    }

    // Now get the first text node
    const firstTextNode = itemName.childNodes[0];

    if (firstTextNode && firstTextNode.nodeType === Node.TEXT_NODE) {
        text = firstTextNode.textContent.trim();
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlighted = text.replace(regex, '<span class="highlight">$1</span>');

        // Wrap in a span to keep inline
        const wrapper = document.createElement('span');
        wrapper.innerHTML = highlighted;
        wrapper.style.display = 'inline';

        itemName.replaceChild(wrapper, firstTextNode);
    }
}

function updateSectionVisibilityForSearch(section, hasResults) {
    if (hasResults) {
        section.classList.add('active');
    } else {
        section.classList.remove('active');
    }
}

function clearSearch() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.display = 'flex';
        item.classList.remove('search-first-result');
        const itemName = item.querySelector('.item-name');

        // Find wrapper span with highlights
        const wrapper = itemName.querySelector('span[style*="inline"]');
        if (wrapper) {
            const textNode = document.createTextNode(wrapper.textContent);
            itemName.replaceChild(textNode, wrapper);
        } else {
            // Fallback: remove highlight spans
            const highlights = itemName.querySelectorAll('.highlight');
            highlights.forEach(span => {
                const textNode = document.createTextNode(span.textContent);
                span.parentNode.replaceChild(textNode, span);
            });
        }

        // Normalize text nodes
        itemName.normalize();
    });

    restoreActiveSection();
    removeNoResults();
}

function restoreActiveSection() {
    // Ya no es necesario mostrar/ocultar secciones
    // Todas las secciones están siempre visibles
}

function toggleNoResultsMessage(hasResults) {
    if (!hasResults) {
        showNoResults();
    } else {
        removeNoResults();
    }
}

function showNoResults() {
    if (!document.querySelector('.no-results')) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.innerHTML = 'No se encontraron resultados para tu búsqueda.';
        document.querySelector('.main-content').appendChild(noResults);
    }
}

function removeNoResults() {
    const noResults = document.querySelector('.no-results');
    if (noResults) {
        noResults.remove();
    }
}


// Animations
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

// Initialization
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMenuItems();
    initSearch();
    initAnimations();
    initSmoothScroll();
});
