const requestURL = "../json/indie-games.json";

async function fetchGames() {
  const response = await fetch(requestURL);
  const games = await response.json();
  return games;
}

