export function loadCatalogPage(games) {
  const main = document.getElementById("main-page");
  if (main) {
    main.setAttribute("class", "container mt-5 pt-4 pb-4");
    main.innerHTML = `<div id="gamesSection" class="container"></div>`;
    renderCatalog(games);
  }
  //-------------------Visual-cue-active-tab---------------------------------

  const homePage = document.getElementById("home");
  const catalogPage = document.getElementById("catalog");
  catalogPage.setAttribute("class", "nav-link active");
  homePage.setAttribute("class", "nav-link");

  //-------------------------------------------------------

}

function renderCatalog(games) {
  document;

  //-------------------------------------RENDER-CARDS------------------------------------------------

  createCards(games);

  //-------------------------------------VIDEO-PREVIEW-----------------------------------------------

  let cards = document.getElementsByClassName("card");
  handleHoverEvent(cards);
}

///////////////////////////////////////RENDER-CARDS///////////////////////////////////////////////

function createCards(obj) {
  const gamesSection = document.getElementById("gamesSection");
  let row = document.createElement("div");
  row.setAttribute("class", "row row-cols-1 row-cols-md-3");
  obj.games.forEach((game, index) => {

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

    if ((index + 1) % 3 === 0 || index === obj.games.length - 1) {
      gamesSection.appendChild(row);
      row = document.createElement("div");
      row.setAttribute("class", "row row-cols-1 row-cols-md-3");
    }

  });
}


//////////////////////////////////////CLICK-EVENT//////////////////////////////////////////////////

function handleClickEvent(game){
  document.getElementById('expanded-card-label').textContent = game.title;
  document.getElementById('modal-description').textContent = game.developer;
  document.getElementById('modal-img').src = game.poster;
  document.getElementById('modal-link').href = game.steam_page;
  document.getElementById('modal-synopsis').href = game.synopsis;
  const gameModal = document.getElementById('expanded-card');
  if (gameModal) {
    const myModal = new bootstrap.Modal(gameModal);
    myModal.show();
  }
}


///////////////////////////////////////HOVER-EVENT///////////////////////////////////////////////

function handleHoverEvent(cards) {
  showPreviewOnHover(cards);
}

function showPreviewOnHover(cards) {
  Array.from(cards).forEach((card) => {
    card.addEventListener("mouseenter", (e) => {
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

//-------------------------------------FILTER-CARDS------------------------------------------------

let searchInput = document.getElementById("searchInput");
let filter;
searchInput.addEventListener("input", () => {
  filter = searchInput.value;
  let arrCards = filterCards(indie, filter);
  generateCards(arrCards);
  let cards = document.getElementsByClassName("card");
  handleHoverEvent(cards);
});

function filterCards(jsonDoc, filter = "") {
  let filteredCards = new Array();
  jsonDoc.games.forEach((game) => {
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

function generateCards(gamesArr) {
  const gamesSection = document.getElementById("gamesSection");
  gamesSection.innerHTML = "";
  let rowContent = "";

  gamesArr.forEach((game, index) => {
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

    if ((index + 1) % 3 === 0 || index === gamesArr.length - 1) {
      gamesSection.innerHTML += `<div class="row row-cols-1 row-cols-md-3">${rowContent}</div>`;
      rowContent = "";
    }
  });
}
