// ===== COMPONENTE: CARRITO DE COMPRAS =====
/**
 * Componente del carrito de compras con funcionalidad completa
 * Permite agregar, quitar, modificar cantidades y enviar pedido por WhatsApp
 */

class Cart {
    constructor() {
        this.items = [];
        this.isOpen = false;
        this.tipPercentage = 0; // Propina en porcentaje (0, 5, 10, 15)
        this.customTip = 0; // Propina personalizada
        this.deliveryMethod = 'pickup'; // 'pickup' o 'delivery'
        this.deliveryCost = 1500; // Costo fijo de envío
        // Obtener número de WhatsApp desde la configuración
        this.whatsappNumber = restaurantConfig?.info?.social?.whatsapp?.number || '5493514000000';
        this.loadFromStorage();
        this.render();
        this.setupEventListeners();
    }

    /**
     * Renderizar el HTML del carrito
     */
    render() {
        const cartHTML = `
            <!-- Overlay -->
            <div class="cart-overlay" id="cartOverlay"></div>

            <!-- Botón flotante -->
            <button class="cart-button" id="cartButton" aria-label="Abrir carrito de compras">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                </svg>
                <span class="cart-count" id="cartCount">0</span>
            </button>

            <!-- Sidebar del carrito -->
            <div class="cart-sidebar" id="cartSidebar">
                <div class="cart-header">
                    <h2>Mi Pedido</h2>
                    <button class="cart-close" id="cartClose" aria-label="Cerrar carrito">&times;</button>
                </div>

                <div class="cart-content" id="cartContent">
                    <!-- Items del carrito se renderizan aquí -->
                </div>

                <div class="cart-footer" id="cartFooter">
                    <!-- Footer con total y botones se renderiza aquí -->
                </div>
            </div>
        `;

        // Insertar en el body
        document.body.insertAdjacentHTML('beforeend', cartHTML);

        // Actualizar la vista
        this.updateCartView();
    }

    /**
     * Configurar event listeners
     */
    setupEventListeners() {
        // Botón flotante
        document.getElementById('cartButton').addEventListener('click', () => this.toggleCart());

        // Botón cerrar
        document.getElementById('cartClose').addEventListener('click', () => this.closeCart());

        // Overlay
        document.getElementById('cartOverlay').addEventListener('click', () => this.closeCart());

        // Suscribirse a clics en items del menú
        this.setupMenuItemListeners();
    }

    /**
     * Configurar listeners en items del menú
     */
    setupMenuItemListeners() {
        document.addEventListener('click', (e) => {
            // Si se hace clic en un botón de agregar al carrito
            if (e.target.closest('.add-to-cart-btn')) {
                e.stopPropagation();
                const btn = e.target.closest('.add-to-cart-btn');
                const itemData = JSON.parse(btn.dataset.item);
                this.addItem(itemData);
                this.showAddedFeedback(btn);
            }
        });
    }

    /**
     * Mostrar feedback visual al agregar item
     */
    showAddedFeedback(button) {
        const originalText = button.innerHTML;
        button.innerHTML = '✓ Agregado';
        button.style.background = '#4CAF50';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
        }, 1000);
    }

    /**
     * Agregar item al carrito
     */
    addItem(item) {
        const existingItem = this.items.find(i => i.id === item.id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            this.items.push({
                ...item,
                quantity: 1
            });
        }

        this.saveToStorage();
        this.updateCartView();
        this.animateCartButton();
    }

    /**
     * Remover item del carrito
     */
    removeItem(itemId) {
        // Animar salida antes de remover
        const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
        if (cartItem) {
            cartItem.style.animation = 'slideOut 0.3s ease';
            cartItem.style.opacity = '0';
            cartItem.style.transform = 'translateX(-20px)';

            setTimeout(() => {
                this.items = this.items.filter(item => item.id !== itemId);
                this.saveToStorage();
                this.updateCartView();
            }, 300);
        } else {
            this.items = this.items.filter(item => item.id !== itemId);
            this.saveToStorage();
            this.updateCartView();
        }
    }

    /**
     * Actualizar cantidad de un item
     */
    updateQuantity(itemId, change) {
        const item = this.items.find(i => i.id === itemId);
        if (!item) return;

        item.quantity += change;

        if (item.quantity <= 0) {
            this.removeItem(itemId);
        } else {
            this.saveToStorage();
            this.updateCartView();
            // Animar el valor de cantidad
            this.animateQuantityChange(itemId);
        }
    }

    /**
     * Animar cambio de cantidad
     */
    animateQuantityChange(itemId) {
        // Esperar a que el DOM se actualice
        setTimeout(() => {
            const cartItem = document.querySelector(`[data-item-id="${itemId}"]`);
            if (cartItem) {
                const quantityValue = cartItem.querySelector('.quantity-value');
                if (quantityValue) {
                    quantityValue.classList.add('pulse');
                    setTimeout(() => {
                        quantityValue.classList.remove('pulse');
                    }, 400);
                }
            }
        }, 10);
    }

    /**
     * Limpiar carrito
     */
    clearCart() {
        if (confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
            this.items = [];
            this.saveToStorage();
            this.updateCartView();
            // Cerrar el carrito automáticamente después de vaciarlo
            setTimeout(() => {
                this.closeCart();
            }, 500);
        }
    }

    /**
     * Abrir carrito
     */
    openCart() {
        this.isOpen = true;
        document.getElementById('cartSidebar').classList.add('open');
        document.getElementById('cartOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    /**
     * Cerrar carrito
     */
    closeCart() {
        this.isOpen = false;
        document.getElementById('cartSidebar').classList.remove('open');
        document.getElementById('cartOverlay').classList.remove('active');
        document.body.style.overflow = '';
    }

    /**
     * Toggle carrito
     */
    toggleCart() {
        if (this.isOpen) {
            this.closeCart();
        } else {
            this.openCart();
        }
    }

    /**
     * Animar botón del carrito
     */
    animateCartButton() {
        const btn = document.getElementById('cartButton');
        btn.style.animation = 'none';
        setTimeout(() => {
            btn.style.animation = '';
        }, 10);
    }

    /**
     * Actualizar vista del carrito
     */
    updateCartView() {
        this.updateCartCount();
        this.renderCartContent();
        this.renderCartFooter();
    }

    /**
     * Actualizar contador del botón
     */
    updateCartCount() {
        const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
        const countElement = document.getElementById('cartCount');
        if (countElement) {
            countElement.textContent = count;
            countElement.style.display = count > 0 ? 'flex' : 'none';
        }
    }

    /**
     * Renderizar contenido del carrito
     */
    renderCartContent() {
        const content = document.getElementById('cartContent');

        if (this.items.length === 0) {
            content.innerHTML = `
                <div class="cart-empty">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                    <p>Tu carrito está vacío</p>
                    <p style="font-size: 0.9rem;">Agrega platos del menú para comenzar tu pedido</p>
                    <button class="back-to-menu-btn" onclick="window.location.href='index.html'">
                        <span>←</span> Volver al Menú
                    </button>
                </div>
            `;
        } else {
            content.innerHTML = `
                <div class="cart-items">
                    ${this.items.map(item => this.renderCartItem(item)).join('')}
                </div>
            `;

            // Agregar event listeners para los botones
            this.setupCartItemListeners();
        }
    }

    /**
     * Renderizar un item del carrito
     */
    renderCartItem(item) {
        const total = (parseFloat(item.price.replace('.', '')) * item.quantity).toLocaleString('es-AR');

        return `
            <div class="cart-item" data-item-id="${item.id}">
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price} c/u</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn quantity-decrease" data-item-id="${item.id}">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn quantity-increase" data-item-id="${item.id}">+</button>
                </div>
                <button class="cart-item-remove" data-item-id="${item.id}" aria-label="Eliminar item">✕</button>
            </div>
        `;
    }

    /**
     * Configurar listeners de items del carrito
     */
    setupCartItemListeners() {
        // Botones de cantidad
        document.querySelectorAll('.quantity-decrease').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.dataset.itemId;
                this.updateQuantity(itemId, -1);
            });
        });

        document.querySelectorAll('.quantity-increase').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.dataset.itemId;
                this.updateQuantity(itemId, 1);
            });
        });

        // Botones de eliminar
        document.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const itemId = e.target.dataset.itemId;
                this.removeItem(itemId);
            });
        });
    }

    /**
     * Renderizar footer del carrito
     */
    renderCartFooter() {
        const footer = document.getElementById('cartFooter');

        if (this.items.length === 0) {
            footer.style.display = 'none';
        } else {
            footer.style.display = 'block';
            const subtotal = this.calculateSubtotal();
            const tipAmount = this.calculateTipAmount();
            const deliveryCost = this.deliveryMethod === 'delivery' ? this.deliveryCost : 0;
            const total = subtotal + tipAmount + deliveryCost;

            footer.innerHTML = `
                <!-- Método de entrega -->
                <div class="delivery-section">
                    <h4 class="delivery-title">Método de entrega</h4>
                    <div class="delivery-options">
                        <button class="delivery-btn ${this.deliveryMethod === 'pickup' ? 'active' : ''}" data-method="pickup">
                            🏪 Retiro en Local
                        </button>
                        <button class="delivery-btn ${this.deliveryMethod === 'delivery' ? 'active' : ''}" data-method="delivery">
                            🚚 Envío ($1.500)
                        </button>
                    </div>
                </div>

                <!-- Sección de propinas -->
                <div class="tip-section">
                    <h4 class="tip-title">¿Propina? 😊</h4>
                    <div class="tip-options">
                        <button class="tip-btn ${this.tipPercentage === 0 ? 'active' : ''}" data-tip="0">0%</button>
                        <button class="tip-btn ${this.tipPercentage === 5 ? 'active' : ''}" data-tip="5">5%</button>
                        <button class="tip-btn ${this.tipPercentage === 10 ? 'active' : ''}" data-tip="10">10%</button>
                        <button class="tip-btn ${this.tipPercentage === 15 ? 'active' : ''}" data-tip="15">15%</button>
                    </div>
                </div>

                <!-- Desglose de totales -->
                <div class="cart-totals">
                    <div class="total-row">
                        <span>Subtotal:</span>
                        <span>$${subtotal.toLocaleString('es-AR')}</span>
                    </div>
                    <div class="total-row">
                        <span>Propina ${tipAmount > 0 ? `(${this.tipPercentage}%)` : ''}:</span>
                        <span>$${tipAmount.toLocaleString('es-AR')}</span>
                    </div>
                    <div class="total-row">
                        <span>${deliveryCost > 0 ? 'Envío' : 'Retiro en local'}:</span>
                        <span>$${deliveryCost.toLocaleString('es-AR')}</span>
                    </div>
                    <div class="cart-total">
                        <span class="cart-total-label">Total:</span>
                        <span class="cart-total-amount">$${total.toLocaleString('es-AR')}</span>
                    </div>
                </div>

                <div class="cart-actions">
                    <button class="btn-clear-cart" id="btnClearCart">Vaciar</button>
                    <button class="btn-whatsapp" id="btnWhatsApp">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Enviar por WhatsApp
                    </button>
                </div>
            `;

            // Event listeners para método de entrega
            document.querySelectorAll('.delivery-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const method = e.target.dataset.method;
                    this.setDeliveryMethod(method);
                });
            });

            // Event listeners para botones de propina
            document.querySelectorAll('.tip-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const tipValue = parseInt(e.target.dataset.tip);
                    this.setTip(tipValue);
                });
            });

            // Event listeners para otros botones
            document.getElementById('btnWhatsApp').addEventListener('click', () => this.sendWhatsApp());
            document.getElementById('btnClearCart').addEventListener('click', () => this.clearCart());
        }
    }

    /**
     * Calcular subtotal del carrito (sin propina)
     */
    calculateSubtotal() {
        return this.items.reduce((sum, item) => {
            const price = parseFloat(item.price.replace('.', ''));
            return sum + (price * item.quantity);
        }, 0);
    }

    /**
     * Calcular monto de la propina
     */
    calculateTipAmount() {
        if (this.customTip > 0) {
            return this.customTip;
        }
        if (this.tipPercentage > 0) {
            return Math.round(this.calculateSubtotal() * (this.tipPercentage / 100));
        }
        return 0;
    }

    /**
     * Calcular total del carrito (con propina)
     */
    calculateTotal() {
        return this.calculateSubtotal() + this.calculateTipAmount();
    }

    /**
     * Establecer propina por porcentaje
     */
    setTip(percentage) {
        this.tipPercentage = percentage;
        this.customTip = 0;
        this.saveToStorage();
        this.renderCartFooter();
    }

    /**
     * Establecer método de entrega
     */
    setDeliveryMethod(method) {
        this.deliveryMethod = method;
        this.saveToStorage();
        this.renderCartFooter();
    }

    /**
     * Enviar pedido por WhatsApp
     */
    sendWhatsApp() {
        if (this.items.length === 0) {
            alert('El carrito está vacío');
            return;
        }

        // Construir mensaje
        let message = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';

        this.items.forEach(item => {
            const total = parseFloat(item.price.replace('.', '')) * item.quantity;
            message += `• ${item.name}\n`;
            message += `  Cantidad: ${item.quantity}\n`;
            message += `  Precio: $${item.price} c/u\n`;
            message += `  Subtotal: $${total.toLocaleString('es-AR')}\n\n`;
        });

        const subtotal = this.calculateSubtotal();
        const tipAmount = this.calculateTipAmount();
        const deliveryCost = this.deliveryMethod === 'delivery' ? this.deliveryCost : 0;
        const total = this.calculateTotal();

        message += `*SUBTOTAL: $${subtotal.toLocaleString('es-AR')}*\n`;

        if (tipAmount > 0) {
            message += `*PROPINA (${this.tipPercentage}%): $${tipAmount.toLocaleString('es-AR')}*\n`;
        }

        if (deliveryCost > 0) {
            message += `*ENVÍO A DOMICILIO: $${deliveryCost.toLocaleString('es-AR')}*\n`;
        } else {
            message += `*RETIRO EN LOCAL*\n`;
        }

        message += `\n*TOTAL: $${total.toLocaleString('es-AR')}*`;

        // Codificar mensaje para URL
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;

        // Abrir WhatsApp
        window.open(whatsappURL, '_blank');
    }

    /**
     * Guardar carrito en localStorage
     */
    saveToStorage() {
        try {
            const data = {
                items: this.items,
                tipPercentage: this.tipPercentage,
                customTip: this.customTip,
                deliveryMethod: this.deliveryMethod
            };
            localStorage.setItem('cart', JSON.stringify(data));
        } catch (e) {
            console.error('Error al guardar carrito:', e);
        }
    }

    /**
     * Cargar carrito desde localStorage
     */
    loadFromStorage() {
        try {
            const saved = localStorage.getItem('cart');
            if (saved) {
                const data = JSON.parse(saved);
                // Compatibilidad con versión anterior
                if (Array.isArray(data)) {
                    this.items = data;
                    this.tipPercentage = 0;
                    this.customTip = 0;
                    this.deliveryMethod = 'pickup';
                } else {
                    this.items = data.items || [];
                    this.tipPercentage = data.tipPercentage || 0;
                    this.customTip = data.customTip || 0;
                    this.deliveryMethod = data.deliveryMethod || 'pickup';
                }
            }
        } catch (e) {
            console.error('Error al cargar carrito:', e);
            this.items = [];
            this.tipPercentage = 0;
            this.customTip = 0;
            this.deliveryMethod = 'pickup';
        }
    }

}

// Exportar
window.Cart = Cart;
