# Portfolio - Renzo Ramos

Un portfolio moderno y personalizable construido con HTML, CSS y JavaScript vanilla. Cuenta con modo oscuro, soporte multiidioma (ES/EN) y un panel de edición en tiempo real.

## ✨ Características

- **Modo Oscuro/Claro**: Toggle de tema con persistencia en localStorage
- **Multiidioma**: Soporte para español e inglés
- **Responsive**: Diseño adaptable para todos los dispositivos
- **Animaciones Suaves**: Scroll reveal, trail de mouse y transiciones elegantes
- **Panel de Edición**: Tweaks en tiempo real para personalizar el portfolio
- **Diseño Limpio**: Sistema de grid, tipografía cuidada y colores oklch

## 📂 Estructura del Proyecto

```
portafololio-renzo/
├── index.html                      # Página principal
├── README.md                       # Este archivo
├── .gitignore
│
├── src/
│   ├── js/
│   │   ├── main.js                # Punto de entrada
│   │   └── components/
│   │       └── tweaks-panel.jsx   # Panel de edición
│   │
│   ├── data/
│   │   ├── stack.js               # Datos del stack técnico
│   │   └── projects.js            # Datos de proyectos
│   │
│   ├── i18n/
│   │   └── translations.js        # Traducciones ES/EN
│   │
│   ├── utils/
│   │   ├── scroll-reveal.js       # Animación de scroll
│   │   ├── drawing-trail.js       # Efecto de trail del mouse
│   │   └── i18n-dark-mode.js      # Idioma y modo oscuro
│   │
│   ├── styles/
│   │   ├── variables.css          # Variables CSS (colores, tipografía)
│   │   ├── base.css               # Estilos base
│   │   ├── nav-footer.css         # Navegación y footer
│   │   ├── hero.css               # Sección hero
│   │   ├── sections.css           # Secciones generales y stack
│   │   ├── projects.css           # Sección de proyectos
│   │   ├── animations.css         # Animaciones
│   │   └── tweaks-panel.css       # Estilos del panel
│   │
│   └── components/
│       └── tweaks-panel.css       # Estilos del panel de edición
│
└── docs/
    ├── CUSTOMIZATION.md           # Guía de personalización
    └── DEPLOYMENT.md              # Guía de deploy
```

## 🚀 Inicio Rápido

1. **Clonar o descargar** el proyecto
2. **Abrir `index.html`** en el navegador
3. El portfolio es completamente estático, no requiere servidor

## ✏️ Personalización

### Cambiar Datos Personales

Edita `index.html` y reemplaza:
- `Tu.Nombre` → Tu nombre real
- `renzoramosivan@gmail.com` → Tu email
- URLs de LinkedIn y GitLab

### Modificar Stack Técnico

Edita `src/data/stack.js`:

```javascript
export const stackItems = [
  {
    name: "React",
    color: "#61dafb",
    bg: "#0d1f2d",
    desc: "Tu descripción aquí"
  },
  // Agregar más tecnologías...
];
```

### Agregar/Editar Proyectos

Edita `src/data/projects.js`:

```javascript
export const projects = [
  {
    num: "01",
    title: "Tu Proyecto",
    desc: "Descripción breve del proyecto",
    badges: ["React", "Node.js"],
    repo: "https://github.com/...",
    demo: "https://..."
  },
  // Agregar más proyectos...
];
```

### Cambiar Colores

Edita `src/styles/variables.css`:

```css
:root {
  --accent: oklch(44% 0.18 250);  /* Color principal */
  --bg: oklch(97% 0.012 80);      /* Fondo claro */
  --ink: oklch(18% 0.012 80);     /* Texto oscuro */
  /* ... más variables */
}
```

### Cambiar Tipografía

Edita las importaciones de Google Fonts en `index.html` y los valores en `variables.css`:

```css
--serif: 'Lora', Georgia, serif;
--mono: 'JetBrains Mono', monospace;
--hand: 'Caveat', cursive;
```

## 🌍 Agregar Idiomas

1. Edita `src/i18n/translations.js`
2. Agrega una nueva clave (ej: `fr` para francés)
3. Traduce todas las claves

## 🎨 Panel de Edición

El portfolio incluye un panel flotante (esquina inferior derecha) que permite:
- Cambiar el nombre en tiempo real
- Ajustar el rol/título
- Cambiar color de acento
- Alternar entre estilos de grid
- Activar/desactivar modo oscuro

## 📦 Dependencias Externas

- **Google Fonts**: Caveat, Lora, JetBrains Mono
- **React CDN**: Para el panel de edición (opcional)
- **Babel Standalone**: Para JSX (opcional)

> El portfolio funciona sin estas dependencias en su versión base. React se usa solo para el panel de edición interactivo.

## 🔧 Desarrollo

Si quieres hacer cambios:

1. Edita los archivos en `src/`
2. Los cambios se reflejan inmediatamente al recargar
3. Los datos se persisten en localStorage

### Herramientas Recomendadas
- VS Code con extensión HTML
- Live Server para desarrollo local
- DevTools del navegador para debugging

## 📱 Responsiveness

El portfolio es completamente responsivo:
- Escritorio: Grid de 2 columnas
- Tablet: Grid adaptado
- Móvil: Layout de columna única

## 📄 Licencia

Libre para usar, modificar y distribuir.

## 👤 Autor

Renzo Ramos - renzoramosivan@gmail.com

---

**¿Preguntas?** Revisa la documentación en la carpeta `docs/` o personaliza según tus necesidades.
