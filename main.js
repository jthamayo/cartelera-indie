import { loadHomePage } from "./home.js";

const requestURL = "../json/indie-games.json";
const request = new Request(requestURL);

async function fetchGames() {
  const response = await fetch(request);
  const games = await response.json();
  return games;
}

document.addEventListener("DOMContentLoaded", () => {
  //-------------------------------------------HOME------------------------------------------------------
  fetchGames().then((indieGames) => {
    import("./home.js").then((m) => {
      const homePage = document.getElementById("home");
      if (homePage) {
        homePage.onclick = m.loadHomePage;
      }
    });
    loadHomePage();
  //-------------------------------------------CATALOG------------------------------------------------------
    import("./catalog.js").then((m) => {
      const catalogPage = document.getElementById("catalog");
      if (catalogPage) {
        catalogPage.onclick = () => m.loadCatalogPage(indieGames);
      }
    });
  });
});

