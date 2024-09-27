const translations = {
  en: {
    home: "Home",
    about: "About",
    allGame: "All Game",
    contact: "Contact",
    login: "Login",
    heroTitle: "The Best Games Out There",
    heroText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    shopNow: "Shop Now",
    discover: "Discover",
    socialTitle: "You can find us in here",
    recentGames: "Recent Games",
    premiumTournament: "Premium Tournament",
    tournamentDetails: {
      tournamentBegins: "Tournament Begins:",
      tournamentEnds: "Tournament Ends:",
      participants: "Participants:",
      tournamentAuthor: "Tournament Author:",
      prizes: "Prizes:",
    },
    ourAgencies: "Our Agencies",
    copyright: "All rights reserved",
  },
  ar: {
    home: "الرئيسية",
    about: "عن المنصة",
    allGame: "كل الألعاب",
    contact: "تواصل معنا",
    login: "تسجيل الدخول",
    heroTitle: "أفضل الألعاب المتاحة",
    heroText: "لوريم إيبسوم دولور سيت أميت...",
    shopNow: "تسوق الآن",
    discover: "اكتشف",
    socialTitle: "يمكنك العثور علينا هنا",
    recentGames: "الألعاب الحديثة",
    premiumTournament: "البطولة المميزة",
    tournamentDetails: {
      tournamentBegins: "تبدأ البطولة:",
      tournamentEnds: "تنتهي البطولة:",
      participants: "المشاركون:",
      tournamentAuthor: "منظم البطولة:",
      prizes: "الجوائز:",
    },
    ourAgencies: "وكالاتنا",
    copyright: "جميع الحقوق محفوظة",
  },
};

// ********************************************************************************************************************************
let currentLang = "en";

document.getElementById("lang-switch").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  translatePage();
  document.getElementById("lang-switch").textContent = currentLang === "en" ? "AR" : "EN";

  document.documentElement.setAttribute("dir", currentLang === "en" ? "ltr" : "rtl");

  document.documentElement.setAttribute("lang", currentLang);
});

// ********************************************************************************************************************************

function translatePage() {
  document.getElementById("home-link").textContent = translations[currentLang].home;
  document.getElementById("about-link").textContent = translations[currentLang].about;
  document.getElementById("all-game").textContent = translations[currentLang].allGame;
  document.getElementById("contact-link").textContent = translations[currentLang].contact;
  document.getElementById("login-link").textContent = translations[currentLang].login;
  document.getElementById("hero-title").textContent = translations[currentLang].heroTitle;
  document.getElementById("hero-text").textContent = translations[currentLang].heroText;
  document.getElementById("shop-now-btn").textContent = translations[currentLang].shopNow;
  document.getElementById("discover-btn").textContent = translations[currentLang].discover;
  document.getElementById("social-title").textContent = translations[currentLang].socialTitle;
  document.querySelector(".header-section").textContent = translations[currentLang].recentGames;
  document.querySelector(".copyright").innerHTML = translations[currentLang].copyright;
}

translatePage();
