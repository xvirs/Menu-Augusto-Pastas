document.addEventListener('DOMContentLoaded', function () {
    if (typeof restaurantConfig === 'undefined') {
        console.error('Configuration file not loaded');
        return;
    }

    // Render Header and Footer
    renderHeader();
    renderFooter();
    applyTheme();

    // Load Dish Details
    const urlParams = new URLSearchParams(window.location.search);
    const dishSlug = urlParams.get('plato');

    if (!dishSlug) {
        window.location.href = 'index.html';
        return;
    }

    loadDishDetails(dishSlug);
});

function applyTheme() {
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
        if (theme.fonts) {
            if (theme.fonts.heading) root.style.setProperty('--font-heading', theme.fonts.heading);
            if (theme.fonts.body) root.style.setProperty('--font-body', theme.fonts.body);
        }
    }
}

function renderHeader() {
    const info = restaurantConfig.info;
    const header = document.getElementById('detailHeader');
    if (!header) return;

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
            ${renderSocialLink(info.social.instagram)}
        </div>
    `;
}

function renderSocialLink(instagram) {
    if (!instagram) return '';
    return `
        <a href="${instagram.url}" target="_blank" class="instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            ${instagram.handle.replace('@', '')}
        </a>
    `;
}

function renderFooter() {
    const info = restaurantConfig.info;
    const footer = document.getElementById('detailFooter');
    if (!footer) return;

    const currentYear = new Date().getFullYear();
    footer.innerHTML = `
        <p>&copy; ${currentYear} ${info.name} - ${info.location}</p>
        <p>Desde el ${info.since} • ${info.subtitle}</p>
    `;
}

function loadDishDetails(slug) {
    const dish = restaurantConfig.items[slug];

    if (!dish) {
        showErrorMessage();
        return;
    }

    // Update page title
    document.title = `${dish.name} - ${restaurantConfig.info.name}`;

    // Fill data
    document.getElementById('dishName').textContent = dish.name;

    // Find category
    let category = '';
    for (const section of restaurantConfig.menuSections) {
        if (section.items.includes(slug)) {
            category = section.title;
            break;
        }
        if (section.subsections) {
            for (const sub of section.subsections) {
                if (sub.items.includes(slug)) {
                    category = section.title + ' - ' + sub.title;
                    break;
                }
            }
        }
    }
    document.getElementById('dishCategory').textContent = category;

    document.getElementById('dishPrice').textContent = `$${dish.price}`;
    document.getElementById('dishDescription').innerHTML = `<p>${dish.description || ''}</p>`;
    document.getElementById('dishServing').textContent = dish.serving || '1 porción';
    document.getElementById('dishType').textContent = dish.type || 'Plato';

    const imagePlaceholder = document.getElementById('dishImage');
    const imageIcon = document.querySelector('.image-icon');

    // Reset classes and content
    imagePlaceholder.className = 'dish-image-placeholder';
    imageIcon.style.display = 'block';
    imageIcon.textContent = '';
    imagePlaceholder.style.backgroundImage = 'none';

    if (dish.image) {
        imagePlaceholder.classList.add('has-image');
        imagePlaceholder.style.backgroundImage = `url('${dish.image}')`;
        imageIcon.style.display = 'none';
    } else if (dish.icon) {
        imageIcon.textContent = dish.icon;
    }

    const ingredientsList = document.getElementById('ingredientsList');
    if (ingredientsList) {
        ingredientsList.innerHTML = '';
        if (dish.ingredients && dish.ingredients.length > 0) {
            dish.ingredients.forEach(ingredient => {
                const li = document.createElement('li');
                li.textContent = ingredient;
                ingredientsList.appendChild(li);
            });
        } else {
            document.querySelector('.dish-ingredients').style.display = 'none';
        }
    }

    // Animation
    const detailCard = document.querySelector('.detail-card');
    detailCard.style.opacity = '0';
    detailCard.style.transform = 'translateY(20px)';

    setTimeout(() => {
        detailCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        detailCard.style.opacity = '1';
        detailCard.style.transform = 'translateY(0)';
    }, 100);
}

function showErrorMessage() {
    const detailContainer = document.querySelector('.detail-container');
    detailContainer.innerHTML = `
        <div class="error-message">
            <div class="error-icon">🍝</div>
            <h2>Plato no encontrado</h2>
            <p>Lo sentimos, no pudimos encontrar el plato que estás buscando.</p>
            <button class="back-button" onclick="window.location.href='index.html'">
                <span>←</span> Volver al Menú
            </button>
        </div>
    `;
}
