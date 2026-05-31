// SOPECAM Capital — Bilingual Engine FR/EN
// ==========================================

const TRANSLATIONS = {
  fr: {
    // NAV
    nav_markets: "Marchés",
    nav_news: "Actualités",
    nav_crypto: "Crypto",
    nav_opps: "Opportunités",
    nav_learn: "Apprendre",
    nav_portfolio: "Portefeuille",
    nav_africa: "Afrique",
    nav_live: "MARCHÉS EN DIRECT",

    // HERO
    hero_tag: "Intelligence Financière · Afrique Centrale & Monde",
    hero_h1_1: "Les Marchés Mondiaux,",
    hero_h1_em: "Compris depuis",
    hero_h1_2: "Yaoundé.",
    hero_desc: "Données de marché en temps réel, analyses éditoriales, éducation financière — la première plateforme d'intelligence financière d'Afrique Centrale pensée pour les investisseurs camerounais et de la diaspora.",
    btn_explore: "Explorer les Marchés",
    btn_join: "Rejoindre Gratuitement",
    stat_markets: "Marchés Suivis",
    stat_coverage: "Couverture Mondiale",
    stat_update: "Mise à Jour",

    // SECTIONS
    sec_markets: "Marchés en Direct",
    sec_editorial: "Intelligence & Analyse",
    sec_crypto: "Actifs Numériques",
    sec_opps: "Tableau des Opportunités",
    sec_guidance: "Orientation Portefeuille",
    sec_learn: "Académie Financière",
    sec_africa: "Focus Afrique & Cameroun",

    // FOOTER
    footer_tagline: "La plateforme d'intelligence financière de référence d'Afrique Centrale.",
    footer_disclaimer: "Données à titre informatif uniquement — Pas de conseil en investissement — Réglementation COSUMAF",
    copyright: "© 2026 SOPECAM Capital · Tous droits réservés",
  },
  en: {
    // NAV
    nav_markets: "Markets",
    nav_news: "News",
    nav_crypto: "Crypto",
    nav_opps: "Opportunities",
    nav_learn: "Learn",
    nav_portfolio: "Portfolio",
    nav_africa: "Africa",
    nav_live: "LIVE MARKETS",

    // HERO
    hero_tag: "Financial Intelligence · Central Africa & World",
    hero_h1_1: "Global Markets,",
    hero_h1_em: "Understood from",
    hero_h1_2: "Yaoundé.",
    hero_desc: "Real-time market data, editorial analysis, financial education — the first financial intelligence platform of Central Africa designed for Cameroonian investors and the diaspora.",
    btn_explore: "Explore Markets",
    btn_join: "Join Free",
    stat_markets: "Markets Tracked",
    stat_coverage: "Global Coverage",
    stat_update: "Live Update",

    // SECTIONS
    sec_markets: "Live Markets",
    sec_editorial: "Intelligence & Analysis",
    sec_crypto: "Digital Assets",
    sec_opps: "Opportunity Board",
    sec_guidance: "Portfolio Guidance",
    sec_learn: "Financial Academy",
    sec_africa: "Africa & Cameroon Focus",

    // FOOTER
    footer_tagline: "Central Africa's leading financial intelligence platform.",
    footer_disclaimer: "Data for informational purposes only — Not investment advice — COSUMAF Regulation",
    copyright: "© 2026 SOPECAM Capital · All rights reserved",
  }
};

let currentLang = localStorage.getItem('sopecam_lang') || 'fr';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('sopecam_lang', lang);
  document.documentElement.lang = lang;
  applyTranslations();
  updateLangButtons();
}

function t(key) {
  return (TRANSLATIONS[currentLang] || TRANSLATIONS['fr'])[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
}

function updateLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLangButtons();

  // Detect browser language on first visit
  if (!localStorage.getItem('sopecam_lang')) {
    const browserLang = navigator.language?.slice(0, 2);
    if (browserLang === 'en') setLang('en');
  }
});
