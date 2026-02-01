# Sistema de Menús Digitales Multi-Cliente

Sistema de menús digitales estáticos que permite gestionar múltiples clientes/restaurantes desde un único repositorio.

## Estructura Final

```
/
├── index.html              ← Landing page con lista de clientes
├── menus/                  ← CARPETA DE CLIENTES
│   ├── augusto/
│   │   ├── index.html      ← Menú de Augusto
│   │   └── detalle.html    ← Detalle de platos
│   └── pizzeria-don-tito/
│       ├── index.html      ← Menú de Don Tito
│       └── detalle.html    ← Detalle de platos
├── configs/                ← CONFIGURACIONES
│   ├── augusto.js
│   ├── pizzeria-don-tito.js
│   └── _template.js
├── img/
│   └── platos/
├── styles.css
├── search-styles.css
├── detalle-styles.css
├── script.js
└── detalle.js
```

## URLs de Acceso

| Cliente | URL |
|---------|-----|
| Landing | `tudominio.com/` |
| Augusto | `tudominio.com/menus/augusto/` |
| Don Tito | `tudominio.com/menus/pizzeria-don-tito/` |

Cada cliente tiene su URL limpia y permanente. No hay redirects.

---

# INSTRUCCIONES PARA IA (Claude)

## Al Crear un Nuevo Cliente

### Paso 1: Crear configuración

Archivo: `configs/nombrecliente.js`

```javascript
const restaurantConfig = {
    info: {
        name: "Nombre del Local",
        location: "UBICACIÓN",
        subtitle: "Eslogan",
        since: "2020",
        description: "Descripción SEO",
        keywords: "palabra1, palabra2",
        social: {
            instagram: { url: "https://instagram.com/usuario", handle: "@usuario" },
            whatsapp: { number: "5493510000000", message: "Hola!" }
        },
        images: {
            logo: "img/logo.png",
            favicon: "img/favicon.svg",
            decorationLeft: "img/dibujo2.png",
            decorationRight: "img/dibujo1.png"
        },
        theme: {
            primaryColor: "#HEX",
            backgroundColor: "#HEX",
            textColor: "#HEX",
            accentColor: "#HEX",
            fonts: {
                heading: "'Georgia', serif",
                body: "'Helvetica Neue', sans-serif"
            }
        },
        schedule: "Horarios",
        promo: { title: "PROMO", description: "Desc", note: "Nota" }
    },
    menuSections: [
        { id: "seccion-slug", title: "Título", items: ["plato-1", "plato-2"] }
    ],
    items: {
        "plato-1": {
            name: "Nombre",
            price: "5.000",
            description: "Descripción",
            ingredients: ["Ing1", "Ing2"],
            type: "Tipo",
            icon: "🍕",
            image: "img/platos/plato-1.webp"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
```

### Paso 2: Crear carpeta del cliente

Crear: `menus/nombrecliente/`

#### index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Cargando... | Menú Digital</title>
    <meta name="description" content="Menú digital">
    <meta property="og:type" content="website">
    <link rel="icon" type="image/svg+xml" href="">
    <link rel="stylesheet" href="../../styles.css">
    <link rel="stylesheet" href="../../search-styles.css">
</head>
<body>
    <header class="header" id="mainHeader"></header>
    <div class="sticky-header-wrapper">
        <nav class="nav-menu" id="navMenu" role="navigation"></nav>
    </div>
    <main class="main-content" id="mainContent"></main>
    <footer class="footer" id="mainFooter"></footer>

    <script>
        window.CURRENT_CLIENT = 'nombrecliente';
        window.BASE_PATH = '../../';
    </script>
    <script src="../../configs/nombrecliente.js"></script>
    <script src="../../script.js"></script>
</body>
</html>
```

#### detalle.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detalle del Plato | Menú Digital</title>
    <link rel="icon" type="image/svg+xml" href="">
    <link rel="stylesheet" href="../../styles.css">
    <link rel="stylesheet" href="../../detalle-styles.css">
</head>
<body>
    <header class="header" id="detailHeader"></header>
    <main class="detail-content">
        <div class="detail-container">
            <button class="back-button" onclick="window.history.back()"><span>←</span></button>
            <div class="detail-card">
                <div class="detail-header">
                    <h1 class="dish-name" id="dishName">Nombre del Plato</h1>
                    <span class="dish-category" id="dishCategory">Categoría</span>
                </div>
                <div class="detail-body">
                    <div class="dish-image-placeholder" id="dishImage">
                        <span class="image-icon">🍝</span>
                    </div>
                    <div class="dish-description" id="dishDescription"></div>
                    <div class="dish-ingredients" id="dishIngredients">
                        <h3>Ingredientes</h3>
                        <ul id="ingredientsList"></ul>
                    </div>
                    <div class="dish-info">
                        <div class="info-item">
                            <span class="info-label">Porción:</span>
                            <span class="info-value" id="dishServing">1 persona</span>
                        </div>
                        <div class="info-item">
                            <span class="info-label">Tipo:</span>
                            <span class="info-value" id="dishType">Plato</span>
                        </div>
                    </div>
                </div>
                <div class="detail-footer">
                    <div class="price-section">
                        <span class="price-label">Precio</span>
                        <span class="price-value" id="dishPrice">$0.000</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <footer class="footer" id="detailFooter"></footer>

    <script>
        window.CURRENT_CLIENT = 'nombrecliente';
        window.BASE_PATH = '../../';
    </script>
    <script src="../../configs/nombrecliente.js"></script>
    <script src="../../detalle.js"></script>
</body>
</html>
```

### Paso 3: Agregar a landing page

Editar `index.html` raíz, agregar en `.clients`:

```html
<a href="menus/nombrecliente/" class="client-card">
    <div class="client-name">Nombre del Local</div>
    <div class="client-location">UBICACIÓN - Tipo de comida</div>
</a>
```

## Reglas Importantes

1. **NO modificar** `script.js`, `detalle.js` ni estilos CSS
2. **SOLO crear** archivos en `/configs/` y `/menus/nombrecliente/`
3. El slug del cliente debe ser **lowercase con guiones**
4. Los precios van como **string** con formato "X.XXX"
5. Cambiar `nombrecliente` por el slug real en los 4 lugares:
   - `window.CURRENT_CLIENT`
   - `<script src="../../configs/nombrecliente.js">`
   - (en ambos HTML: index.html y detalle.html)

## Clientes Activos

| Cliente | Config | URL |
|---------|--------|-----|
| La Veredita de Augusto | `configs/augusto.js` | `/menus/augusto/` |
| Pizzería Don Tito | `configs/pizzeria-don-tito.js` | `/menus/pizzeria-don-tito/` |
