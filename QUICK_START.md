# 🚀 Quick Start - Primeros Pasos

Tu portfolio está 100% organizado. Aquí hay lo primero que debes hacer:

## ⏱️ 5 Minutos: Cambios Básicos

### 1️⃣ Abre el proyecto
```bash
cd ~/Workspace/Renzo/portafololio-renzo
```

### 2️⃣ Abre `index.html` en el navegador
- Doble click en `index.html`
- O arrastra a un navegador
- Verás tu portfolio completo

### 3️⃣ Personaliza el nombre

Abre `index.html` y busca:
```html
Tu.Nombre
```

Reemplaza **todas las 3 instancias** (nav, hero, footer) por tu nombre.

**Resultado**: El panel flotante inferior derecha ya debería editar esto en tiempo real.

### 4️⃣ Actualiza email y redes

Busca en `index.html`:
```html
renzoramosivan@gmail.com
https://www.linkedin.com/in/tu-usuario
https://gitlab.com/tu-usuario
```

Reemplaza por tus datos reales.

---

## 🎨 10 Minutos: Cambios Visuales

### 5️⃣ Cambia el color principal

Abre `src/styles/variables.css` y encuentra:
```css
--accent: oklch(44% 0.18 250);
```

Para cambiar el azul a otro color, edita el número `250`:
- `250` = Azul
- `200` = Azul más claro
- `280` = Púrpura
- `150` = Verde
- `30` = Naranja

Guarda y recarga el navegador. El color cambia automáticamente.

**O mejor**: Usa el panel flotante:
1. Abre el navegador en tu portfolio
2. Click en "Color acento" en el panel
3. Elige color visual
4. El sitio se actualiza en tiempo real

### 6️⃣ Agrega tu foto

En `index.html` busca:
```html
<div class="avatar-placeholder">
  <div class="avatar-icon">✦</div>
  <p class="avatar-caption">foto / avatar<br/>aquí</p>
</div>
```

Reemplaza por:
```html
<div class="avatar-placeholder">
  <img src="mi-foto.jpg" alt="Mi Nombre" 
       style="width: 100%; height: 100%; object-fit: cover;">
</div>
```

(Guarda `mi-foto.jpg` en la misma carpeta que `index.html`)

---

## 📝 15 Minutos: Edita tu Contenido

### 7️⃣ Actualiza tu Stack Técnico

Abre `src/data/stack.js`. Verás:
```javascript
export const stackItems = [
  {
    name: "React",
    color: "#61dafb",
    bg: "#0d1f2d",
    desc: "Tu experiencia con React..."
  },
  // ... más tecnologías
];
```

Edita según tus tecnologías reales. Solo cambiar los primeros 5-8 items.

### 8️⃣ Agrega tus Proyectos

Abre `src/data/projects.js`. Verás:
```javascript
export const projects = [
  {
    num: "01",
    title: "Mi Primer Proyecto",
    desc: "Descripción de qué hace...",
    badges: ["React", "Node.js", "PostgreSQL"],
    repo: "https://github.com/usuario/proyecto",
    demo: "https://proyecto.vercel.app"
  },
  // ... más proyectos
];
```

Reemplaza con **tus 3-5 proyectos reales**.

### 9️⃣ Actualiza tu Descripción

Abre `src/i18n/translations.js` y encuentra:
```javascript
es: {
  heroBio: "Desarrollador apasionado por..."
}
```

Reemplaza por tu descripción real (español).

Luego busca:
```javascript
en: {
  heroBio: "Developer passionate about..."
}
```

Pon la traducción al inglés.

---

## 📤 20 Minutos: Sube a GitHub

### 🔟 Crear repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Nombre: `portafolio` (o el nombre que quieras)
3. Descripción: "Mi Portfolio Personal"
4. Público
5. No marques "Add README" (ya lo tienes)
6. Click "Create repository"

### 1️⃣1️⃣ Sube tu código

```bash
cd ~/Workspace/Renzo/portafololio-renzo

# Si aún no has hecho git init:
git init
git add .
git commit -m "Initial commit: Portfolio organization"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio.git
git push -u origin main
```

---

## 🚀 25 Minutos: Publica en Vercel

### 1️⃣2️⃣ Crea cuenta Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Login con GitHub (usa tu cuenta de arriba)
3. Autoriza a Vercel

### 1️⃣3️⃣ Deploya

1. Click "New Project"
2. Selecciona tu repositorio `portafolio`
3. Framework: "Other" (es estático)
4. Click "Deploy"
5. ✅ ¡Listo! Tu URL aparecerá en 30 segundos

Tu portfolio estará en: `portafolio.vercel.app`

---

## 🌍 30 Minutos: Dominio Personalizado (Opcional)

### 1️⃣4️⃣ Compra un dominio

- Namecheap: ~$9/año
- GoDaddy: ~$12/año
- Google Domains: ~$12/año

Elige algo como:
- `tuombre.com`
- `tuombre.dev`
- `tuombre.io`

### 1️⃣5️⃣ Apunta a Vercel

En Vercel Dashboard:
1. Selecciona tu proyecto
2. Settings → Domains
3. "Add Domain"
4. Escribe tu dominio
5. Sigue instrucciones DNS

En tu proveedor (Namecheap):
1. Advanced DNS
2. Agrega CNAME que Vercel te dice
3. Espera 24-48h

**¡Listo!** Tu portfolio en `tuombre.com` 🎉

---

## ✅ Checklist de Completitud

- [ ] Portfolio abre sin errores en navegador
- [ ] Nombre aparece correcto en nav, hero y footer
- [ ] Email y redes sociales apuntan a los correctos
- [ ] Stack técnico es el tuyo
- [ ] Proyectos son tuyos (con links reales)
- [ ] Color principal es el que quieres
- [ ] Foto es la tuya
- [ ] Modo oscuro funciona
- [ ] Idioma ES/EN funciona
- [ ] Panel flotante (esquina inferior derecha) abre
- [ ] GitHub tiene tu código
- [ ] Vercel publicado y accesible
- [ ] Dominio personalizado apunta correctamente

---

## 🎯 Qué NO Hacer

❌ **No** cambies nombres de archivos/carpetas
❌ **No** hagas cambios directos en `Portfolio.html` (ese es viejo)
❌ **No** mezcles código en diferentes archivos
❌ **No** edites `tweaks-panel.jsx` (es componente React complejo)

✅ **Sí** edita:
- `index.html` (estructura)
- `src/data/*.js` (contenido)
- `src/i18n/translations.js` (textos)
- `src/styles/variables.css` (colores)

---

## 📖 Documentación Completa

Si necesitas más detalle:

- **¿Cómo cambiar fuentes?** → Ver `CUSTOMIZATION.md`
- **¿Cómo agregar secciones?** → Ver `STRUCTURE.md`
- **¿Cómo hacer deploy avanzado?** → Ver `DEPLOYMENT.md`
- **¿Entender la arquitectura?** → Ver `.claude/CLAUDE.md`

---

## 💪 Ya Está Hecho

Tu portfolio está:
✅ Profesionalmente organizado
✅ 100% funcional
✅ Responsivo en móvil
✅ Con modo oscuro
✅ Multiidioma
✅ Listo para publicar

**Todo lo que necesitas hacer es personalizar datos y publicar.**

**Tiempo total: ~30 minutos**

¡Mucho éxito! 🚀
