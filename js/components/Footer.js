// ===== COMPONENTE: FOOTER =====
/**
 * Componente del footer con información del restaurante
 * Componente simple sin estado
 */

class Footer {
    constructor() {
        this.element = null;
        this.config = {
            copyright: '© 2025 Augusto Pastas - COFICO',
            tagline: 'Desde el 2011 • Pastas Frescas y Comidas 100% Caseras'
        };
    }

    /**
     * Renderizar el componente
     */
    render() {
        const footer = document.createElement('footer');
        footer.className = 'footer';

        footer.innerHTML = `
            <p>${this.escapeHtml(this.config.copyright)}</p>
            <p>${this.escapeHtml(this.config.tagline)}</p>
        `;

        this.element = footer;
        return footer;
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
     * Actualizar configuración
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };

        if (this.element && this.element.parentNode) {
            const parent = this.element.parentNode;
            const newElement = this.render();
            parent.replaceChild(newElement, this.element);
        }
    }

    /**
     * Actualizar año dinámicamente
     */
    updateYear() {
        const currentYear = new Date().getFullYear();
        this.config.copyright = `© ${currentYear} Augusto Pastas - COFICO`;

        if (this.element) {
            const copyrightP = this.element.querySelector('p:first-child');
            if (copyrightP) {
                copyrightP.textContent = this.config.copyright;
            }
        }
    }

    /**
     * Destruir el componente
     */
    destroy() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
    }
}

// Exportar
window.Footer = Footer;
