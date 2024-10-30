const requestURL = "../json/indie-games.json";

async function fetchGames() {
  const response = await fetch(requestURL);
  const games = await response.json();
  return games;
}

fetchGames().then((indie) => {
  const gamesSection = document.getElementById("gamesSection");
  let rowContent = "";

  indie.games.forEach((game, index) => {
    let card = `
      <div class="col">
        <div class="card m-2" style="width: 100%;">
          <img src="${game.poster}" class="rounded" alt="${game.title} banner">
        </div>
      </div>
    `;

    rowContent += card;

    if ((index + 1) % 3 === 0 || index === indie.games.length - 1) {
      gamesSection.innerHTML += `<div class="row row-cols-1 row-cols-md-3">${rowContent}</div>`;
      rowContent = "";
    }

  });
});
