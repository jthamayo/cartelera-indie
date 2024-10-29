const requestURL = "../json/indie-games.json";

async function fetchGames() {
  const response = await fetch(requestURL);
  const games = await response.json();
  return games;
}

fetchGames().then(indie => {
  for (let index = 0; index < indie.games.length; index++) {
    const gamesSection = document.getElementById('gamesSection');
    
    let id = indie.games[index].id;
    let poster = indie.games[index].poster;
    let title = indie.games[index].title;
    let year = indie.games[index].year;
    let length = indie.games[index].length;
    let developer = indie.games[index].developer;
    let earnings = indie.games[index].earnings;

    gamesSection.innerHTML += `
      <div class="card mb-4" style="width: 18rem;">
        <img src="${poster}" class="card-img-top" alt="game poster">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-title"><span class="h6">${year}</span> · ${length}</p>
          <h6 class="card-title mb-4">${developer}</h6>
          <p class="card-title">${earnings}</p>
        </div>
      </div>
    `;
  }
});
