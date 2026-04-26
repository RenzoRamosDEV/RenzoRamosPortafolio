# Guía de Deployment

Tu portfolio es un sitio **100% estático** - no requiere base de datos ni servidor backend.

## 🚀 Opciones de Deploy

### 1. **Vercel** (Recomendado - Gratuito)

Vercel es lo más fácil y rápido.

#### Pasos:

1. **Sube a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Conecta Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Haz login con GitHub
   - Selecciona tu repositorio
   - Vercel detecta que es estático
   - Click en "Deploy"

3. **Tu URL será algo como**: `nombre.vercel.app`

#### Ventajas
- Gratis
- Dominio gratis incluido
- Muy rápido
- Actualizaciones automáticas desde GitHub

#### Customizar Dominio
- En Vercel Dashboard → Settings → Domains
- Apunta tu dominio personalizado (ej: tuportfolio.com)
- Instrucciones de DNS personalizadas

---

### 2. **Netlify** (Alternativa)

Similar a Vercel, también muy popular.

#### Pasos:

1. Ve a [netlify.com](https://netlify.com)
2. Selecciona "New site from Git"
3. Conecta GitHub
4. Netlify auto-detecta que es estático
5. Click "Deploy Site"

#### Ventajas
- Gratis
- Excelentes formularios
- Funciones lambda (si necesitas backend simple)
- Analytics incluido

---

### 3. **GitHub Pages** (Lo más simple)

Hospeda directamente desde GitHub.

#### Pasos:

1. **Sube tu código a GitHub**

2. **En el repositorio**:
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
   - Click Save

3. **Tu URL será**: `tu-usuario.github.io/nombre-repo`

O si lo quieres como proyecto personal:
- Renombra el repo a `tu-usuario.github.io`
- URL: `tu-usuario.github.io`

#### Ventajas
- Completamente gratis
- Integrado con GitHub
- Control total

#### Desventaja
- URL con el usuario de GitHub (a menos que uses dominio personalizado)

---

### 4. **Hostinger** (Tradicional)

Si prefieres un hosting clásico.

#### Pasos:

1. Crea cuenta en Hostinger
2. Sube archivos vía FTP:
   - Host: `ftp.tu-dominio.com`
   - Usuario: tu usuario
   - Contraseña: tu contraseña
   
3. Usa un cliente FTP (ej: FileZilla)
4. Sube el contenido de tu proyecto al `public_html`

#### Ventajas
- Dominio y hosting juntos
- Soporte técnico
- Más control

#### Desventaja
- Costo anual (~$3-5)
- Más lento que Vercel

---

### 5. **Cloudflare Pages** (Muy rápido)

Opciones gratuita, ultra rápida y con seguridad integrada.

#### Pasos:

1. Ve a [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecta GitHub
3. Selecciona el repositorio
4. Cloudflare configura automáticamente
5. Deploy automático

#### Ventajas
- Increíblemente rápido
- Gratis
- Seguridad Cloudflare incluida
- Analytics

---

## 🔧 Configuración Post-Deploy

### Agregar Dominio Personalizado

En cualquier plataforma:

1. Compra un dominio (GoDaddy, Namecheap, etc.)
2. Ve a tu plataforma de deploy
3. Settings → Custom Domain
4. Sigue las instrucciones de DNS
5. Espera 24-48h para propagación

### Ejemplo con Namecheap + Vercel

```
Namecheap (Advanced DNS):
- Record Type: CNAME
- Host: @
- Value: cname.vercel-dns.com
```

---

## 📋 Checklist Pre-Deploy

- [ ] `index.html` tiene URLs correctas (no locales)
- [ ] Reemplazaste los placeholders (nombre, email, redes)
- [ ] Los iconos y fuentes cargan correctamente
- [ ] Probaste en incógnito (sin caché)
- [ ] Modo oscuro funciona
- [ ] Responsiveness en móvil está bien
- [ ] Links externos abren en nueva pestaña (`target="_blank"`)
- [ ] Email/social media están actualizados
- [ ] Meta tags y título están listos

---

## 🔍 Testing Post-Deploy

Después de hacer deploy, verifica:

```bash
# 1. ¿Se carga bien?
curl https://tu-url.com

# 2. ¿Está en Google? (tardará días)
# Usa Google Search Console

# 3. ¿Rápido?
# Usa https://pagespeed.web.dev

# 4. ¿Responsive?
# Usa https://responsivedesignchecker.com
```

---

## 🔐 SSL/HTTPS

Todas las plataformas arriba incluyen SSL gratuito automático. Asegúrate de que tu URL sea `https://`, no `http://`.

---

## 📊 Analíticas

### Opción 1: Google Analytics (Gratuito)

1. Ve a [analytics.google.com](https://analytics.google.com)
2. Crea una propiedad
3. Copia el código de tracking
4. Pega en el `<head>` de `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Opción 2: Plataforma Nativa

- Vercel tiene analytics incluido
- Netlify tiene analytics incluido
- GitHub Pages con Google Analytics

---

## 🚀 Actualizar Después del Deploy

El proceso depende de tu plataforma:

### Vercel / Netlify / Cloudflare Pages

Automático: Cada push a GitHub = nuevo deploy

```bash
git add .
git commit -m "Update portfolio"
git push
# ✅ Listo, tu sitio se actualiza automáticamente
```

### GitHub Pages

Igual, automático:

```bash
git push origin main
# ✅ GitHub Pages se actualiza en ~30 segundos
```

### Hostinger / FTP

Manual:

```bash
# Sube cambios vía FTP
```

---

## 🎯 Recomendaciones Finales

Para un portfolio en 2026:

1. **Usa Vercel o Netlify** - Lo mejor relación rapidez/facilidad
2. **Compra un dominio personalizado** - Cuesta ~$12/año
3. **Configura Google Analytics** - Para ver visitantes
4. **Agrega meta tags** - Para SEO y redes sociales
5. **Haz backup regular** - Push a GitHub es tu backup

---

## 📝 Ejemplo Completo: Vercel + Dominio

```bash
# 1. Crea repo en GitHub (nombre-portfolio)
git init
git add .
git commit -m "Initial commit"
git push origin main

# 2. Ve a vercel.com y conecta tu repo
# Automáticamente deploy en vercel.app

# 3. Compra dominio (tuportfolio.com en Namecheap)

# 4. En Vercel Dashboard:
# Settings → Domains → Add Domain
# Sigue instrucciones DNS (CNAME)

# 5. En Namecheap (Advanced DNS):
# @  CNAME  cname.vercel-dns.com

# 6. Espera 24-48h

# 7. ✅ Tu sitio está en tuportfolio.com
```

---

¿Necesitas ayuda? Cada plataforma tiene excelente documentación y comunidad.
