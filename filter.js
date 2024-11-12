export function showFilteredGames(games, filter) {
  const main = document.getElementById("main-page");
  if (main) {
    main.setAttribute("class", "container mt-5 pt-4 pb-4");
    main.innerHTML = `<div id="gamesSection" class="container"></div>`;
    let filteredCards = filterCards(games, filter);
    createFilteredCards(filteredCards);
  }
}

function filterCards(obj, filter = "") {
  let filteredCards = new Array();
  obj.games.forEach((game) => {
    if (filter.trim()) {
      if (
        game.title.toLowerCase().includes(filter.toLowerCase()) ||
        game.developer.toLowerCase().includes(filter.toLowerCase())
      ) {
        filteredCards.push(game);
      }
    } else {
      filteredCards.push(game);
    }
  });
  return filteredCards;
}

function createFilteredCards(filteredArr) {
  const gamesSection = document.getElementById("gamesSection");
  let row = document.createElement("div");
  row.setAttribute("class", "row row-cols-1 row-cols-md-3");
  filteredArr.forEach((game, index) => {

    let card = document.createElement("div");
    card.setAttribute("id", `card-${game.id}`);
    card.setAttribute("class", `card col mb-4 border-0 bg-dark position-relative`);
    card.setAttribute("data-preview", `${game.preview || "undefined"}`);

    let poster = document.createElement("img");
    poster.setAttribute("src", `${game.poster}`);
    poster.setAttribute("class", `rounded`);
    poster.setAttribute("alt", `${game.title} banner`);

    card.appendChild(poster);

    card.addEventListener('click', () => {
      handleClickEvent(game);
    });

    row.appendChild(card);

    if ((index + 1) % 3 === 0 || index === filteredArr.length - 1) {
      gamesSection.appendChild(row);
      row = document.createElement("div");
      row.setAttribute("class", "row row-cols-1 row-cols-md-3");
    }

  });
}