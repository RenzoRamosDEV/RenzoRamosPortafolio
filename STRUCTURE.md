# 📁 Estructura del Proyecto - Portfolio Renzo

Árbol completo del proyecto después de la reorganización:

```
portafololio-renzo/
│
├── 📄 index.html                    ⭐ PÁGINA PRINCIPAL
├── 📄 README.md                     📖 Documentación
├── 📄 STRUCTURE.md                  📋 Este archivo
├── 📄 .gitignore                    🚫 Ignorar en Git
│
├── 📂 src/                          💻 Código fuente
│   │
│   ├── 📂 js/                       JavaScript
│   │   ├── 📄 main.js               Punto de entrada, renderizado
│   │   └── 📂 components/
│   │       └── 📄 tweaks-panel.jsx  Panel de edición (React)
│   │
│   ├── 📂 data/                     Datos estáticos
│   │   ├── 📄 stack.js              Tecnologías
│   │   └── 📄 projects.js           Proyectos
│   │
│   ├── 📂 i18n/                     Internacionalización
│   │   └── 📄 translations.js       ES/EN traducciones
│   │
│   ├── 📂 utils/                    Funciones utilitarias
│   │   ├── 📄 scroll-reveal.js      Animación de scroll
│   │   ├── 📄 drawing-trail.js      Trail del ratón
│   │   └── 📄 i18n-dark-mode.js     Idioma + tema oscuro
│   │
│   ├── 📂 styles/                   CSS modular
│   │   ├── 📄 variables.css         🎨 Colores y tipografía
│   │   ├── 📄 base.css              Reset y base
│   │   ├── 📄 nav-footer.css        Navegación y pie
│   │   ├── 📄 hero.css              Sección hero
│   │   ├── 📄 sections.css          Secciones y stack
│   │   ├── 📄 projects.css          Proyectos
│   │   ├── 📄 animations.css        Animaciones
│   │   └── 📄 tweaks-panel.css      Estilos panel flotante
│   │
│   └── 📂 components/
│       └── 📄 tweaks-panel.jsx      Componente React
│
└── 📂 docs/                         📚 Documentación
    ├── 📄 CUSTOMIZATION.md          ⚙️ Cómo personalizar
    └── 📄 DEPLOYMENT.md             🚀 Cómo hacer deploy
```

## 🎯 Flujo de Carga

```
1. index.html
   ↓
2. Carga CSS (styles/*.css)
   ↓
3. Carga JS (src/js/main.js)
   ↓
4. main.js importa:
   - data/stack.js → renderiza grid
   - data/projects.js → renderiza proyectos
   - i18n/translations.js → aplica idioma
   - utils/*.js → inicia animaciones
   ↓
5. tweaks-panel.jsx → panel flotante
```

## 📊 Responsabilidades por Archivo

| Archivo | Qué Hace | Editar Si... |
|---------|----------|------------|
| `index.html` | Estructura HTML | Cambias nombre, email, enlaces |
| `src/data/stack.js` | Lista de tecnologías | Agregas/cambias tecnologías |
| `src/data/projects.js` | Lista de proyectos | Agregas/editas proyectos |
| `src/i18n/translations.js` | Textos ES/EN | Agregas idiomas o editas textos |
| `src/styles/variables.css` | Colores y tipografía | Cambias tema o fuentes |
| `src/utils/i18n-dark-mode.js` | Lógica de idioma/tema | Lógica de interfaz |
| `src/utils/scroll-reveal.js` | Animación scroll | Cambias velocidad/efecto |
| `src/utils/drawing-trail.js` | Trail del ratón | Cambias el efecto |

## 🔄 Workflow Típico

### Cambiar Nombre/Email
1. Edita `index.html`
2. Busca `Tu.Nombre` y `renzoramosivan@gmail.com`
3. Reemplaza

### Agregar Proyecto
1. Abre `src/data/projects.js`
2. Agrega objeto al array
3. Automáticamente aparece en la página

### Cambiar Colores
1. Abre `src/styles/variables.css`
2. Edita `--accent` (color principal)
3. O usa panel flotante para vista previa

### Agregar Idioma
1. Abre `src/i18n/translations.js`
2. Agrega nueva clave (ej: `fr: {}`)
3. Copia todas las keys de `es`
4. Traduce
5. Edita lógica en `src/utils/i18n-dark-mode.js`

## 🎨 Jerarquía de Estilos

```
base.css (reset, colores base)
  ↓
nav-footer.css (header/footer específicos)
hero.css (sección hero)
sections.css (secciones generales, stack)
projects.css (proyectos)
animations.css (transiciones, reveals)
tweaks-panel.css (panel flotante)
```

> Un cambio en `variables.css` afecta todo el sitio.
> Cambios específicos van en su CSS correspondiente.

## 📦 Dependencias

**Externas (CDN)**:
- Google Fonts (Caveat, Lora, JetBrains Mono)
- React + Babel (solo para panel de edición)

**Internas**:
- Nada, todo es JavaScript vanilla

## 💾 Datos que Persisten

Via `localStorage`:
- `pf-lang` → idioma seleccionado
- `pf-dark` → modo oscuro activado
- Tweaks del panel de edición

## ⚡ Rendimiento

- 100% estático, carga muy rápido
- Sin bundler necesario
- Responsive desde móvil hasta escritorio
- Animaciones suaves (60fps)

## 🚀 Próximos Pasos

1. **Personaliza** → Lee `docs/CUSTOMIZATION.md`
2. **Sube a GitHub** → Necesario para deploy
3. **Haz Deploy** → Lee `docs/DEPLOYMENT.md`
4. **Agrega dominio** → Opcional pero profesional

---

**¿Perdido?** Cada carpeta tiene un propósito claro. Empieza por editar `src/data/` para ver cambios inmediatos.
