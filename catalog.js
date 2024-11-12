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

  let searchInput = document.getElementById("searchInput");
  searchInput.value = "";

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

export function handleClickEvent(game){
  document.getElementById('expanded-card-label').textContent = `${game.title}, ${game.year}`;
  document.getElementById('modal-description').textContent = `Developed by ${game.developer} and Published by ${game.publisher}`;
  document.getElementById('modal-img').src = game.poster;
  document.getElementById('modal-link').href = game.steam_page;
  document.getElementById('modal-synopsis').textContent = game.synopsis;
  document.getElementById('modal-genre').textContent = game.genre.join(", ");
  document.getElementById('modal-features').textContent = `rating: ${game.rating} . length: ${game.length} . revenue: ${game.revenue}`;
  let idVid =game.preview.split("/embed/")[1].split("?")[0];
  document.getElementById('modal-video').src = `${game.preview}?&rel=0&autoplay=1&mute=1&loop=1&playlist=${idVid}`;

  const gameModal = document.getElementById('expanded-card');
  if (gameModal) {
    const myModal = new bootstrap.Modal(gameModal);
    myModal.show();
  }
}


///////////////////////////////////////HOVER-EVENT///////////////////////////////////////////////

export function handleHoverEvent(cards) {
  //TODO: add animations
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
        src="${url + videoControls}" frameborder="0"; 
        clipboard-write;" referrerpolicy="strict-origin-when-cross-origin"></iframe>`;
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
