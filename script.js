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
    const sections = document.querySelectorAll('.menu-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleNavigation(this, navButtons, sections);
        });
    });

    initKeyboardNavigation(navButtons);
}

function handleNavigation(clickedButton, allButtons, allSections) {
    clearSearchOnNavigation();
    updateButtonStates(allButtons, clickedButton);
    updateSectionVisibility(allSections, clickedButton);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

function updateSectionVisibility(sections, activeButton) {
    sections.forEach(section => section.classList.remove('active'));

    const sectionId = activeButton.getAttribute('data-section');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
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
        <input type="text" id="menuSearch" placeholder="Buscar en el menú..." class="search-input"
               aria-label="Buscar platos en el menú" role="searchbox">
        <button id="clearSearch" class="clear-search" style="display: none;"
                aria-label="Limpiar búsqueda">✕</button>
    `;

    const mainContent = document.querySelector('.main-content');
    mainContent.parentNode.insertBefore(searchContainer, mainContent);
}

function setupSearchListeners() {
    const searchInput = document.getElementById('menuSearch');
    const clearButton = document.getElementById('clearSearch');

    const debouncedSearch = debounce((searchTerm) => {
        performSearch(searchTerm);
    }, 300);

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm.length > 0) {
            clearButton.style.display = 'block';
            debouncedSearch(searchTerm);
        } else {
            clearButton.style.display = 'none';
            clearSearch();
        }
    });

    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        clearButton.style.display = 'none';
        clearSearch();
        searchInput.focus();
    });
}

function performSearch(searchTerm) {
    const sections = document.querySelectorAll('.menu-section');
    let hasResults = false;

    sections.forEach(section => {
        const items = section.querySelectorAll('.menu-item');
        let sectionHasResults = false;

        items.forEach(item => {
            if (itemMatchesSearch(item, searchTerm)) {
                item.style.display = 'flex';
                sectionHasResults = true;
                hasResults = true;
                highlightSearchTerm(item, searchTerm);
            } else {
                item.style.display = 'none';
            }
        });

        updateSectionVisibilityForSearch(section, sectionHasResults);
    });

    toggleNoResultsMessage(hasResults);
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
    const firstTextNode = itemName.childNodes[0];

    if (firstTextNode && firstTextNode.nodeType === Node.TEXT_NODE) {
        const text = firstTextNode.textContent;
        const regex = new RegExp(`(${searchTerm})`, 'gi');
        const highlighted = text.replace(regex, '<span class="highlight">$1</span>');

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = highlighted;

        while (tempDiv.firstChild) {
            itemName.insertBefore(tempDiv.firstChild, firstTextNode);
        }
        itemName.removeChild(firstTextNode);
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
        const itemName = item.querySelector('.item-name');

        // Remove all highlight spans
        const highlights = itemName.querySelectorAll('.highlight');
        highlights.forEach(span => {
            const textNode = document.createTextNode(span.textContent);
            span.parentNode.replaceChild(textNode, span);
        });

        // Normalize text nodes
        itemName.normalize();
    });

    restoreActiveSection();
    removeNoResults();
}

function restoreActiveSection() {
    const activeButton = document.querySelector('.nav-btn.active');
    if (activeButton) {
        const sectionId = activeButton.getAttribute('data-section');
        const sections = document.querySelectorAll('.menu-section');
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    }
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

// Scroll to top button
function initScrollToTop() {
    window.addEventListener('scroll', function() {
        const scrollButton = document.getElementById('scrollToTop');
        if (!scrollButton) {
            createScrollButton();
        }

        const button = document.getElementById('scrollToTop');
        if (window.pageYOffset > 300) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}

function createScrollButton() {
    const button = document.createElement('button');
    button.id = 'scrollToTop';
    button.innerHTML = '↑';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--primary-red);
        color: white;
        border: none;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
    `;

    button.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    document.body.appendChild(button);
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
    initScrollToTop();
    initAnimations();
    initSmoothScroll();
});
