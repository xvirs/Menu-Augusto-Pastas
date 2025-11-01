// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.menu-section');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Clear search when navigating to a different section
            const searchInput = document.getElementById('menuSearch');
            if (searchInput && searchInput.value) {
                searchInput.value = '';
                const clearButton = document.getElementById('clearSearch');
                if (clearButton) {
                    clearButton.style.display = 'none';
                }
                clearSearch();
            }

            // Remove active class from all buttons
            navButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));

            // Show selected section
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');

                // Smooth scroll to top of section
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add smooth scroll behavior for better UX
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

    // Add hover effect and click functionality to menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        // Add cursor pointer
        item.style.cursor = 'pointer';

        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });

        // Add click event to navigate to detail page
        item.addEventListener('click', function() {
            const itemName = this.querySelector('.item-name');
            if (itemName) {
                const dishName = itemName.childNodes[0].textContent.trim();
                const slug = generateSlug(dishName);

                // Check if dish exists in menuData
                if (typeof menuData !== 'undefined' && menuData[slug]) {
                    window.location.href = `detalle.html?plato=${slug}`;
                }
            }
        });
    });

    // Add keyboard navigation
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

    // Add search functionality
    addSearchFeature();
});

// Search functionality
function addSearchFeature() {
    // Create search container
    const searchContainer = document.createElement('div');
    searchContainer.className = 'search-container';
    searchContainer.innerHTML = `
        <input type="text" id="menuSearch" placeholder="Buscar en el menú..." class="search-input">
        <button id="clearSearch" class="clear-search" style="display: none;">✕</button>
    `;

    // Add styles for search
    const style = document.createElement('style');
    style.textContent = `
        .search-container {
            position: relative;
            max-width: 900px;
            margin: 0 auto;
            padding: 1rem;
        }

        .search-input {
            width: 100%;
            padding: 1rem 3rem 1rem 1rem;
            font-size: 1.05rem;
            border: 2px solid var(--border-color);
            border-radius: 25px;
            outline: none;
            transition: border-color 0.3s ease;
        }

        .search-input:focus {
            border-color: var(--primary-red);
        }

        .clear-search {
            position: absolute;
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-light);
            padding: 0.5rem;
        }

        .clear-search:hover {
            color: var(--primary-red);
        }

        .highlight {
            background-color: #ffeb3b;
            padding: 2px 4px;
            border-radius: 3px;
        }

        .no-results {
            text-align: center;
            padding: 2rem;
            color: var(--text-light);
            font-style: italic;
        }

        @media (max-width: 768px) {
            .search-container {
                padding: 0.5rem;
            }

            .search-input {
                font-size: 1rem;
                padding: 1rem 2.8rem 1rem 1rem;
            }

            .clear-search {
                right: 1.5rem;
            }
        }
    `;
    document.head.appendChild(style);

    // Insert search before main content
    const mainContent = document.querySelector('.main-content');
    mainContent.parentNode.insertBefore(searchContainer, mainContent);

    const searchInput = document.getElementById('menuSearch');
    const clearButton = document.getElementById('clearSearch');

    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase().trim();

        if (searchTerm.length > 0) {
            clearButton.style.display = 'block';
            performSearch(searchTerm);
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
            const itemName = item.querySelector('.item-name');
            const text = itemName.textContent.toLowerCase();

            if (text.includes(searchTerm)) {
                item.style.display = 'flex';
                sectionHasResults = true;
                hasResults = true;

                // Highlight matching text
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                const originalHTML = itemName.innerHTML.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '');
                itemName.innerHTML = originalHTML.replace(regex, '<span class="highlight">$1</span>');
            } else {
                item.style.display = 'none';
            }
        });

        if (sectionHasResults) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });

    // Show "no results" message if needed
    if (!hasResults) {
        showNoResults();
    } else {
        removeNoResults();
    }
}

function clearSearch() {
    // Remove highlights
    document.querySelectorAll('.menu-item').forEach(item => {
        item.style.display = 'flex';
        const itemName = item.querySelector('.item-name');
        itemName.innerHTML = itemName.innerHTML.replace(/<span class="highlight">/g, '').replace(/<\/span>/g, '');
    });

    // Show only the currently active section (don't force first section)
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

    removeNoResults();
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

// Add scroll to top button
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
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    button.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });

    document.body.appendChild(button);
}

// Add fade-in animation on scroll
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

// Observe menu items for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.menu-item');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
});
