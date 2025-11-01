// Cargar datos del plato desde URL
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el slug del plato desde la URL
    const urlParams = new URLSearchParams(window.location.search);
    const dishSlug = urlParams.get('plato');

    if (!dishSlug) {
        // Si no hay slug, redirigir al menú principal
        window.location.href = 'index.html';
        return;
    }

    // Cargar los datos del plato
    loadDishDetails(dishSlug);
});

function loadDishDetails(slug) {
    const dish = menuData[slug];

    if (!dish) {
        // Si no se encuentra el plato, mostrar error
        showErrorMessage();
        return;
    }

    // Actualizar el título de la página
    document.title = `${dish.name} - Augusto Pastas`;

    // Rellenar los datos en la página
    document.getElementById('dishName').textContent = dish.name;
    document.getElementById('dishCategory').textContent = dish.category;
    document.getElementById('dishPrice').textContent = `$${dish.price}`;
    document.getElementById('dishDescription').innerHTML = `<p>${dish.description}</p>`;
    document.getElementById('dishServing').textContent = dish.serving;
    document.getElementById('dishType').textContent = dish.type;

    // Actualizar el icono
    const imageIcon = document.querySelector('.image-icon');
    if (imageIcon && dish.icon) {
        imageIcon.textContent = dish.icon;
    }

    // Rellenar la lista de ingredientes
    const ingredientsList = document.getElementById('ingredientsList');
    ingredientsList.innerHTML = '';
    dish.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    // Agregar animación de entrada
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
            <p class="error-hint">Es posible que este plato no tenga información detallada disponible en este momento.</p>
            <button class="back-button" onclick="window.location.href='index.html'">
                <span>←</span> Volver al Menú
            </button>
        </div>
    `;
}

// Funcionalidad del botón de consultar disponibilidad
document.addEventListener('DOMContentLoaded', function() {
    const orderButton = document.querySelector('.order-button');
    if (orderButton) {
        orderButton.addEventListener('click', function() {
            const dishName = document.getElementById('dishName').textContent;
            const message = `Hola! Me interesa consultar sobre: ${dishName}`;
            const whatsappUrl = `https://wa.me/5493514000000?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }
});
