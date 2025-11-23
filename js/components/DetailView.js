// ===== COMPONENTE: DETAIL VIEW =====
/**
 * Componente para mostrar detalles de un plato específico
 * Usado en la página detalle.html
 */

class DetailView {
    constructor() {
        this.element = null;
        this.dishData = null;
        this.slug = null;
    }

    /**
     * Inicializar con slug del plato
     */
    initialize(slug) {
        this.slug = slug;
        this.dishData = this.getDishData(slug);

        if (!this.dishData) {
            console.error(`No se encontró información para: ${slug}`);
            return null;
        }

        return this.render();
    }

    /**
     * Obtener datos del plato desde menuData
     */
    getDishData(slug) {
        if (typeof window.menuData === 'undefined') {
            console.error('menuData no está cargado');
            return null;
        }

        return window.menuData[slug] || null;
    }

    /**
     * Renderizar el componente
     */
    render() {
        const container = document.createElement('div');
        container.className = 'detail-view';

        container.innerHTML = `
            <div class="detail-header">
                <button class="back-button" onclick="window.history.back()">
                    ← Volver al menú
                </button>
                <h1 class="detail-title">${this.escapeHtml(this.dishData.nombre)}</h1>
                ${this.dishData.categoria ? `<span class="detail-category">${this.escapeHtml(this.dishData.categoria)}</span>` : ''}
            </div>

            ${this.dishData.imagen ? this.renderImage() : ''}

            <div class="detail-content">
                ${this.dishData.descripcion ? this.renderDescription() : ''}
                ${this.dishData.ingredientes ? this.renderIngredients() : ''}
                ${this.dishData.porcion || this.dishData.tipo ? this.renderInfo() : ''}
            </div>

            <div class="detail-footer">
                <div class="detail-price">
                    <span class="price-label">PRECIO</span>
                    <span class="price-value">${this.dishData.precio || 'Consultar'}</span>
                </div>
                ${this.renderActions()}
            </div>
        `;

        this.element = container;
        return container;
    }

    /**
     * Renderizar imagen
     */
    renderImage() {
        return `
            <div class="detail-image-container">
                <img src="${this.dishData.imagen}"
                     alt="${this.escapeHtml(this.dishData.nombre)}"
                     class="detail-image">
            </div>
        `;
    }

    /**
     * Renderizar descripción
     */
    renderDescription() {
        return `
            <div class="detail-description">
                <p>${this.escapeHtml(this.dishData.descripcion)}</p>
            </div>
        `;
    }

    /**
     * Renderizar ingredientes
     */
    renderIngredients() {
        if (!Array.isArray(this.dishData.ingredientes)) {
            return '';
        }

        const ingredientsList = this.dishData.ingredientes
            .map(ing => `<li><span class="check-icon">✓</span> ${this.escapeHtml(ing)}</li>`)
            .join('');

        return `
            <div class="detail-ingredients">
                <h2>Ingredientes</h2>
                <ul class="ingredients-list">
                    ${ingredientsList}
                </ul>
            </div>
        `;
    }

    /**
     * Renderizar información adicional
     */
    renderInfo() {
        return `
            <div class="detail-info">
                ${this.dishData.porcion ? `
                    <div class="info-item">
                        <span class="info-label">PORCIÓN:</span>
                        <span class="info-value">${this.escapeHtml(this.dishData.porcion)}</span>
                    </div>
                ` : ''}
                ${this.dishData.tipo ? `
                    <div class="info-item">
                        <span class="info-label">TIPO:</span>
                        <span class="info-value">${this.escapeHtml(this.dishData.tipo)}</span>
                    </div>
                ` : ''}
            </div>
        `;
    }

    /**
     * Renderizar botones de acción
     */
    renderActions() {
        return `
            <button class="action-button primary">
                Consultar Disponibilidad
            </button>
        `;
    }

    /**
     * Escapar HTML
     */
    escapeHtml(text) {
        if (!text) return '';
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return String(text).replace(/[&<>"']/g, m => map[m]);
    }

    /**
     * Actualizar datos del plato
     */
    updateDish(slug) {
        this.slug = slug;
        this.dishData = this.getDishData(slug);

        if (!this.dishData) {
            return false;
        }

        if (this.element && this.element.parentNode) {
            const parent = this.element.parentNode;
            const newElement = this.render();
            parent.replaceChild(newElement, this.element);
        }

        return true;
    }

    /**
     * Obtener datos actuales
     */
    getData() {
        return this.dishData;
    }

    /**
     * Destruir el componente
     */
    destroy() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
        this.dishData = null;
        this.slug = null;
    }
}

// Exportar
window.DetailView = DetailView;
