const requestURL = "../json/indie-games.json";

async function fetchGames() {
  const response = await fetch(requestURL);
  const games = await response.json();
  return games;
}

const doc = fetchGames();

doc.then((indie) => {

//-------------------------------------FILTER-CARDS------------------------------------------------

 //filterCards(indie);

//-------------------------------------RENDER-CARDS---------------------------------------------------

  createCards(indie);

//-------------------------------------VIDEO-PREVIEW-----------------------------------------------

  let cards = document.getElementsByClassName("card");

  handleHoverEvent(cards);
  
});

///////////////////////////////////////RENDER-CARDS///////////////////////////////////////////////

function createCards(jsonDoc) {
  const gamesSection = document.getElementById("gamesSection");
  let rowContent = "";

  jsonDoc.games.forEach((game, index) => {
    let card = `
      <div id="card-${
        game.id
      }" class="card col mb-4 border-0 bg-dark position-relative style="width: 100%; data-preview=${
      game.preview.trim() === "" ? "undefined" : game.preview
    }>
        <img src="${game.poster}" class="rounded" alt="${game.title} banner">
      </div>
    `;

    rowContent += card;

    if ((index + 1) % 3 === 0 || index === jsonDoc.games.length - 1) {
      gamesSection.innerHTML += `<div class="row row-cols-1 row-cols-md-3">${rowContent}</div>`;
      rowContent = "";
    }
  });
}

///////////////////////////////////////HOVER-EVENT///////////////////////////////////////////////

function handleHoverEvent(cards) {
  showPreviewOnHover(cards);
}

function showPreviewOnHover(cards) {
  Array.from(cards).forEach((card) => {
    card.addEventListener("mouseover", (e) => {
      if (card.querySelector("iframe")) {
        return;
      }

      let url = card.getAttribute("data-preview");
      if (url !== "undefined") {
        const videoID = url.split("/embed/")[1].split("?")[0];
        const videoControls = `?&rel=0&controls=0&start=41&autoplay=1&mute=1&loop=1&playlist=${videoID}`;
        let iframeString = `<iframe class="video-preview px-2 position-absolute top-0 start-0" width="100%" height="100%" 
        src="${url + videoControls}" frameborder="0" allow="accelerometer; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
        card.innerHTML += iframeString;
      }
    });

    card.addEventListener("mouseleave", () => {
      let iframe = card.querySelector("iframe");
      if (iframe) {
        iframe.remove();
      }
    });
  });
}

///////////////////////////////////////FILTER-CARDS///////////////////////////////////////////////
