# Guía de Personalización

Personaliza tu portfolio según tus necesidades.

## 1. Información Personal

**Archivo**: `index.html`

Busca y reemplaza:

```html
<!-- En la navegación -->
<div class="nav-signature">Tu<span>.</span>Nombre</div>

<!-- En el hero -->
<h1 class="hero-name" data-i18n="heroName">Hola, soy<br/>Renzo Ramos</h1>

<!-- En el footer -->
<div class="footer-sig">Tu<span>.</span>Nombre</div>
```

## 2. Enlaces de Redes Sociales

**Archivo**: `index.html`

Actualiza los `href`:

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/tu-usuario" ...>

<!-- GitLab -->
<a href="https://gitlab.com/tu-usuario" ...>

<!-- Email -->
<a href="mailto:tu-email@ejemplo.com" ...>
```

## 3. Descripción Personal (Bio)

**Archivo**: `index.html`

Busca `data-i18n="heroBio"` y edita:

```html
<p class="hero-bio" data-i18n="heroBio">
  Tu descripción aquí, explica qué haces y por qué...
</p>
```

También actualiza en `src/i18n/translations.js`:

```javascript
es: {
  heroBio: "Tu texto en español"
},
en: {
  heroBio: "Your English text"
}
```

## 4. Stack Técnico

**Archivo**: `src/data/stack.js`

```javascript
export const stackItems = [
  {
    name: "Technology Name",
    color: "#hexcolor",        // Color del icono
    bg: "#hexcolor",           // Fondo del icono
    desc: "Brief description of your proficiency"
  }
];
```

**Colores útiles**:
- React: `#61dafb` (bg: `#0d1f2d`)
- Vue: `#42b883` (bg: `#0d2d1a`)
- Python: `#f5c518` (bg: `#1f1a08`)
- TypeScript: `#3178c6` (bg: `#0d1a2d`)
- PostgreSQL: `#336791` (bg: `#0d1620`)
- Docker: `#2496ed` (bg: `#0d1d2d`)

## 5. Proyectos

**Archivo**: `src/data/projects.js`

```javascript
export const projects = [
  {
    num: "01",                    // Número (01, 02, 03...)
    title: "Project Title",
    desc: "Short description of what it does",
    badges: ["React", "Node.js"], // Tecnologías usadas
    repo: "https://github.com/user/project",
    demo: "https://project.com"
  }
];
```

**Emojis para proyectos**: 🖥️ ⚙️ 🚀

Edita en `src/js/main.js` si quieres otros:

```javascript
${["🖥️","⚙️","🚀"][i]}  // Cambia según índice
```

## 6. Colores y Tema

**Archivo**: `src/styles/variables.css`

```css
:root {
  --accent: oklch(44% 0.18 250);  /* Color principal (botones, links) */
  --accent2: oklch(44% 0.18 155); /* Color secundario (no usado) */
  
  /* Light mode */
  --bg: oklch(97% 0.012 80);      /* Fondo claro */
  --bg-warm: oklch(95% 0.018 80); /* Fondo con tono cálido */
  --ink: oklch(18% 0.012 80);     /* Texto oscuro */
  --ink-light: oklch(50% 0.012 80); /* Texto gris */
  
  /* Grid */
  --grid-line: oklch(84% 0.008 80);
  --grid-major: oklch(78% 0.01 80);
}
```

### Entender OKLCH

`oklch(L% C H)`

- **L** (Lightness): 0-100%, claridad
- **C** (Chroma): Intensidad del color
- **H** (Hue): 0-360, matiz del color

### Encontrar tu color

1. Usa un color picker (ej: https://oklch.com/)
2. Convierte a OKLCH
3. Copia en `--accent`

### Colores Rápidos

```css
--accent: oklch(44% 0.18 200);  /* Azul */
--accent: oklch(44% 0.18 280);  /* Púrpura */
--accent: oklch(44% 0.18 150);  /* Verde */
--accent: oklch(44% 0.18 30);   /* Naranja */
```

## 7. Tipografía

**Archivo**: `src/styles/variables.css`

Cambia las familias de fuentes:

```css
--serif: 'Playfair Display', serif;  /* Títulos */
--mono: 'IBM Plex Mono', monospace;  /* Código */
--hand: 'Pacifico', cursive;         /* Firma */
```

**Importa en `index.html`**:

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&display=swap" rel="stylesheet" />
```

## 8. Avatar

**Archivo**: `index.html`

Reemplaza el placeholder con una imagen:

```html
<div class="avatar-placeholder">
  <!-- En lugar de esto: -->
  <div class="avatar-icon">✦</div>
  <p class="avatar-caption">foto / avatar<br/>aquí</p>
  
  <!-- Pon esto: -->
  <img src="tu-foto.jpg" alt="Tu nombre" style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

## 9. Grid de Fondo

El grid se cambia con el panel de edición, pero para hacerlo en código:

**Archivo**: `src/styles/base.css`

```css
/* Milimetrado (por defecto) */
background-image:
  linear-gradient(var(--grid-major) 1px, transparent 1px),
  linear-gradient(90deg, var(--grid-major) 1px, transparent 1px),
  linear-gradient(var(--grid-line) 1px, transparent 1px),
  linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;

/* O Dot grid */
background-image: radial-gradient(circle, var(--grid-major) 1px, transparent 1px);
background-size: 20px 20px;

/* O solo líneas horizontales */
background-image: linear-gradient(var(--grid-line) 1px, transparent 1px);
background-size: 100% 28px;

/* O sin grid */
background-image: none;
```

## 10. Añadir Secciones Nuevas

Patrón:

```html
<section id="mi-seccion">
  <div class="container">
    <p class="section-label reveal" data-i18n="miLabel">// etiqueta</p>
    <h2 class="section-title reveal" data-i18n="miTitulo">Mi Sección</h2>
    <!-- Contenido -->
  </div>
</section>
```

Luego:

1. Agrega traducciones en `src/i18n/translations.js`
2. Agrega estilos en `src/styles/nombre.css` e importa en `index.html`

## 11. Meta Tags

**Archivo**: `index.html` (sección `<head>`)

```html
<meta property="og:title" content="Tu Nombre - Portfolio">
<meta property="og:description" content="Descripción breve">
<meta property="og:image" content="url-a-imagen.jpg">
<meta property="og:url" content="tu-url.com">
<meta name="description" content="SEO description">
<meta name="keywords" content="desarrollador, fullstack, react">
```

## 12. Animaciones

Si quieres cambiar velocidades o efectos:

**Archivo**: `src/styles/animations.css`

```css
.reveal {
  transition: opacity 0.6s ease, transform 0.6s ease;  /* Cambiar duraciones */
}

/* Cambiar tipo de easing */
/* ease, linear, ease-in, ease-out, ease-in-out, cubic-bezier() */
```

## 13. Responsive

Si necesitas ajustar breakpoints:

**Archivo**: Todos los `.css` con `@media`

```css
@media (max-width: 720px) {
  /* Cambiar 720 por tu breakpoint deseado */
}
```

## Checklist de Personalización

- [ ] Cambiar nombre en nav, hero y footer
- [ ] Actualizar enlaces de redes sociales
- [ ] Escribir bio personal
- [ ] Editar stack.js con tus tecnologías
- [ ] Agregar proyectos en projects.js
- [ ] Cambiar color principal (--accent)
- [ ] Agregar avatar
- [ ] Actualizar meta tags para SEO
- [ ] Cambiar tipografía si lo deseas
- [ ] Probar responsive en móvil
- [ ] Revisar modo oscuro

¡Listo! Tu portfolio está personalizado.
