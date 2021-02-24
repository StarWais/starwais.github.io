window.addEventListener("DOMContentLoaded", () => {
  let dropdown = document.querySelector(".dropdown"),
    dropdownTriangle = dropdown.querySelector(".dropdown__triangle"),
    dropdownText = dropdown.querySelector(".dropdown__text"),
    dropdownExpanded = document.querySelector(".dropdown_expanded"),
    dropdownLanguages = document.querySelectorAll(".dropdown__language"),
    promoTabsContainer = document.querySelector(".promo__tabs"),
    promoTabs = promoTabsContainer.querySelectorAll(".promo__tab"),
    title = document.querySelector("title"),
    promo = document.querySelector(".promo"),
    logoText = document.querySelector(".logo__text"),
    textTop = document.querySelector(".text__top"),
    textMain = document.querySelector(".text__main"),
    textBottom = document.querySelector(".text__bottom"),
    contacts = document.querySelectorAll(".footer__link")[0],
    about = document.querySelectorAll(".footer__link")[1],
    footer = document.querySelector(".footer"),
    header = document.querySelector(".header"),
    footerText = footer.querySelector(".footer__text");

  function hideDropdown() {
    dropdownExpanded.classList.toggle("hidden");
  }
  dropdownTriangle.addEventListener("click", () => {
    hideDropdown();
  });

  function reloadFooterHeight() {
    footer.style.height = `${
      window.screen.availHeight - header.scrollHeight - promo.scrollHeight
    }px`;
  }

  promoTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      promoTabs.forEach((el) => {
        el.classList.remove("promo__tab_active");
      });
      tab.classList.add("promo__tab_active");
    });
  });

  function translate(language) {
    if (language === "EN") {
      dropdownText.innerHTML = "EN";
      title.innerHTML = "FaMI museum";
      logoText.innerHTML = "FaMI museum";
      textTop.innerHTML = "Exhibition";
      textMain.innerHTML = "OLD COMPUTING <br> TECHNOLOGY";
      textBottom.innerHTML = "interactive excursion";
      contacts.innerHTML = "Contacts";
      about.innerHTML = "About museum";
      footerText.innerHTML =
        "Museum belongs to faculty of mathematics and computer science GRSU";
      reloadFooterHeight();
    } else {
      location.reload();
    }
    hideDropdown();
  }

  dropdownLanguages.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.innerHTML === "EN") {
        translate("EN");
      } else {
        translate("RU");
      }
    });
  });
});
