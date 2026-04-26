/**
 * Maneja la interactividad del menú móvil y dropdown
 */

export function initMobileMenu() {
  const hamburger = document.getElementById('nav-hamburger');
  const navMenu = document.getElementById('nav-menu');
  const dropdownToggle = document.getElementById('nav-dropdown-toggle');
  const dropdownMenu = document.getElementById('nav-dropdown-menu');
  const navLinks = document.querySelectorAll('.nav-mobile-links a, .nav-links a');

  // Menú hamburguesa
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = navMenu.hasAttribute('hidden');
      if (isHidden) {
        navMenu.removeAttribute('hidden');
        hamburger.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
      } else {
        navMenu.setAttribute('hidden', '');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.setAttribute('hidden', '');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Dropdown de controles
  if (dropdownToggle && dropdownMenu) {
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = dropdownMenu.hasAttribute('hidden');
      if (isHidden) {
        dropdownMenu.removeAttribute('hidden');
        dropdownToggle.classList.add('active');
        dropdownToggle.setAttribute('aria-expanded', 'true');
      } else {
        dropdownMenu.setAttribute('hidden', '');
        dropdownToggle.classList.remove('active');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Cerrar dropdown al hacer clic fuera
    document.addEventListener('click', (e) => {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownMenu.setAttribute('hidden', '');
        dropdownToggle.classList.remove('active');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Cerrar menú móvil al hacer clic en un enlace
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navMenu && !navMenu.hasAttribute('hidden')) {
        navMenu.setAttribute('hidden', '');
        hamburger?.classList.remove('active');
        hamburger?.setAttribute('aria-expanded', 'false');
      }
    });
  });
}
