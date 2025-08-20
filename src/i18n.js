import { translations } from './i18n-config.js';
let currentLang = localStorage.getItem('lang') || 'en';
export function t(key) {
  return translations[currentLang][key] || key;
}
export function switchLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });
}

export function initLang() {
  switchLang(currentLang);
}
