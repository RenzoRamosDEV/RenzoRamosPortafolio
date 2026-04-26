import { translations } from '../i18n/translations.js';

export function initI18nAndDarkMode() {
  let lang = localStorage.getItem('pf-lang') || 'es';
  let dark = localStorage.getItem('pf-dark') === 'true';

  function applyLang() {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    const links = document.querySelectorAll('#nav-links li a, .nav-mobile-links a');
    if (links[0]) links[0].textContent = t.navAbout;
    if (links[1]) links[1].textContent = t.navStack;
    if (links[2]) links[2].textContent = t.navProjects;

    const fc = document.querySelector('.footer-copy');
    if (fc) fc.textContent = t.footerCopy;

    // Update language label in both mobile and desktop buttons
    const lbMobile = document.getElementById('lang-label');
    const lbDesktop = document.getElementById('lang-label-desktop');
    const langText = lang === 'es' ? 'EN' : 'ES';
    if (lbMobile) lbMobile.textContent = langText;
    if (lbDesktop) lbDesktop.textContent = langText;

    document.documentElement.lang = lang;
  }

  function applyDark() {
    const root = document.documentElement;
    const btns = [document.getElementById('dark-btn'), document.getElementById('dark-btn-desktop')];
    const icons = [document.getElementById('dark-icon'), document.getElementById('dark-icon-desktop')];
    const labels = [document.getElementById('dark-label'), document.getElementById('dark-label-desktop')];
    const t = translations[lang];
    const sunIcon = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    const moonIcon = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

    if (dark) {
      root.style.setProperty('--bg', 'oklch(14% 0.01 80)');
      root.style.setProperty('--bg-warm', 'oklch(17% 0.012 80)');
      root.style.setProperty('--ink', 'oklch(90% 0.01 80)');
      root.style.setProperty('--ink-light', 'oklch(60% 0.01 80)');
      root.style.setProperty('--grid-line', 'oklch(22% 0.01 80)');
      root.style.setProperty('--grid-major', 'oklch(26% 0.01 80)');
      document.querySelector('nav').style.background = 'oklch(14% 0.01 80 / 0.92)';
      document.querySelector('footer').style.background = 'oklch(14% 0.01 80 / 0.92)';
      btns.forEach(btn => btn?.classList.add('active'));
      icons.forEach(icon => icon && (icon.innerHTML = sunIcon));
      labels.forEach(label => label && (label.textContent = t.lightLabel));
    } else {
      root.style.setProperty('--bg', 'oklch(97% 0.012 80)');
      root.style.setProperty('--bg-warm', 'oklch(95% 0.018 80)');
      root.style.setProperty('--ink', 'oklch(18% 0.012 80)');
      root.style.setProperty('--ink-light', 'oklch(50% 0.012 80)');
      root.style.setProperty('--grid-line', 'oklch(84% 0.008 80)');
      root.style.setProperty('--grid-major', 'oklch(78% 0.01 80)');
      document.querySelector('nav').style.background = 'oklch(97% 0.012 80 / 0.88)';
      document.querySelector('footer').style.background = 'oklch(97% 0.012 80 / 0.88)';
      btns.forEach(btn => btn?.classList.remove('active'));
      icons.forEach(icon => icon && (icon.innerHTML = moonIcon));
      labels.forEach(label => label && (label.textContent = t.darkLabel));
    }
  }

  applyLang();
  applyDark();

  // Mobile lang button
  document.getElementById('lang-btn')?.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('pf-lang', lang);
    applyLang();
    applyDark();
  });

  // Desktop lang button
  document.getElementById('lang-btn-desktop')?.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    localStorage.setItem('pf-lang', lang);
    applyLang();
    applyDark();
  });

  // Mobile dark button
  document.getElementById('dark-btn')?.addEventListener('click', () => {
    dark = !dark;
    localStorage.setItem('pf-dark', dark);
    applyDark();
  });

  // Desktop dark button
  document.getElementById('dark-btn-desktop')?.addEventListener('click', () => {
    dark = !dark;
    localStorage.setItem('pf-dark', dark);
    applyDark();
  });
}
