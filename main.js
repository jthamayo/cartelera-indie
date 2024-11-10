import { loadHomePage } from "./home.js";

const requestURL = "../json/indie-games.json";
const request = new Request(requestURL);

async function fetchGames() {
  const response = await fetch(request);
  const games = await response.json();
  return games;
}

document.addEventListener("DOMContentLoaded", () => {
  const homePage = document.getElementById("home");
  const catalogPage = document.getElementById("catalog");

  //-------------------------------------------HOME------------------------------------------------------
  fetchGames().then((indieGames) => {
    loadHomePage(indieGames);
    import("./home.js").then((m) => {
      homePage.onclick = () => m.loadHomePage(indieGames);
    });
    //-------------------------------------------CATALOG------------------------------------------------------
    import("./catalog.js").then((m) => {
      catalogPage.onclick = () => m.loadCatalogPage(indieGames);
    });
  });
});
