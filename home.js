export function loadHomePage(games) {
  const main = document.getElementById("main-page");
  if (main) {
    //-------------------Visual-cue-active-tab---------------------------------
    const homePage = document.getElementById("home");
    const catalogPage = document.getElementById("catalog");
    homePage.setAttribute("class", "nav-link active");
    catalogPage.setAttribute("class", "nav-link");
    
    let searchInput = document.getElementById("searchInput");
    searchInput.value = "";

    //-------------------------load-main-content------------------------------
    main.innerHTML = `<section id="new-releases" class="pt-2 mt-5"></section>`;
    main.setAttribute("class", "mt-1");
    //const newSection = document.getElementById("new-releases");
    loadFrontPageFeatured("new-releases", games);
    loadThematicCards(games, main);

    //-------------------------configure-carousel-behavior-------------------------
    const featuredCarousel = new bootstrap.Carousel("#featuredcarousel", {
      interval: 8000,
      ride: "carousel",
      pause: "hover",
    });
  }
}

///////////////////////////////////////////////////////////////////FEATURED-GAMES//////////////////////////////////////////////////////////////////////////////

function latestReleased(obj) {
  const currentYear = new Date().getFullYear();
  return obj.games.filter((game) => game.year.includes(currentYear));
}

function loadFrontPageFeatured(sectionID, obj) {
  document.getElementById(sectionID).innerHTML += createFrontPageFeatured(obj);
}

function createFrontPageFeatured(obj) {
  return `<div id="featuredcarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="">
  <div class="carousel-inner">`.concat(
    wrapFeaturedInCarouselItem(latestReleased(obj)).join(" "),
    `</div></div>`
  );
}

function wrapFeaturedInCarouselItem(featuredArr) {
  return featuredArr.map((game, index) => {
    let isActive = index === 0 ? "active" : "";
    let gameId = game.preview.split("/embed/")[1].split("?")[0];
    const videoControls = `?rel=0&controls=0&start=41&autoplay=1&mute=1&cc_lang_pref=en&hl=en&loop=1&playlist=${gameId}`;
    return `<div class="carousel-item ${isActive}">
      <div class="position-relative">
      <div class="dark-film z-2"></div>
      <img src="images/black.png" class="d-block w-75 position-relative" alt="background" featured">
      </div>
      <iframe class="video-preview px-2 position-absolute top-0 start-0" width="100%" height="100%" alt="${
        game.title
      } videopreview" src="${
      game.preview + videoControls
    }" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <div class="carousel-caption h-100 d-none d-md-block">
      <h5 class="display-1 z-3 position-absolute top-50 start-0 z-3">${game.title}</h5>
      <div class="display-5 z-3 position-absolute bottom-50 start-0 z-3 d-flex gap-2 align-items-center"><i class="fa-solid fa-fire fs-1"></i><p>new release</p></div>
      <a href="${
        game.steam_page
      }" target="_blank" rel="noopener noreferrer" class="btn text-bg-dark text-capitalize fs-5 border-0 m-3 px-4 position-absolute bottom-0 end-0 z-3 d-flex justify-content-center align-items-center gap-2"
            ><p class="d-inline-block m-0">now available on steam</p><i class="fa-brands fa-steam fs-4"></i></a
            ></a>
      </div>
    </div>`;
  });
}

///////////////////////////////////////////////////////////////////THEMED-CARDS//////////////////////////////////////////////////////////////////////////////

function loadThematicCards(obj, main) {
  main.innerHTML += `<div id="thematicSection" class="container px-1 my-5"><h1>Discover your new favorite Game</h1></div>`;
  document.getElementById(
    `thematicSection`
  ).innerHTML += `<div id="games-aesthetic"></div><div id="games-genre"></div>`;

  const aestheticsTheme = ["atmospheric", "pixel", "cozy", "cutouts"];

  const genreTheme = ["metroidvania", "puzzle", "card", "horror"];

  gamesByAesthetic(aestheticsTheme, obj);
  gamesByGenre(genreTheme, obj);
}

function gamesByAesthetic(themeArr, obj) {
  let aestheticSection = document.getElementById("games-aesthetic");
  createThematicSection(themeArr, aestheticSection);
  let themedGames = new Array();
  themeArr.forEach((theme) => {
    themedGames = createGameAestheticThemeArr(theme, obj);
    generateCarouselForThematicSection(`${theme}-games`, themedGames);
  });
}

function gamesByGenre(themeArr, obj) {
  let genreSection = document.getElementById("games-genre");
  createThematicSection(themeArr, genreSection);
  let themedGames = new Array();
  themeArr.forEach((theme) => {
    themedGames = createGameGenreThemeArr(theme, obj);
    generateCarouselForThematicSection(`${theme}-games`, themedGames);
  });
}

function createThematicSection(themeArr, container) {
  themeArr.forEach((theme) => {
    container.innerHTML += `<section id='${theme}-games' class='py-5 my-5 rounded-4'></section>`;
    document.getElementById(
      `${theme}-games`
    ).innerHTML += `<div class="text-center pb-3"><h2 class="fs-1 fw-bold text-capitalize">${theme==="cutouts"? "cutout-style" : theme} Games</h2><h3 class="text-secondary">Explore the World of <span class="text-capitalize">${theme==="cutouts"? "cutout-style" : theme}</span> Games</h3></div>`;
  });
}

function createGameAestheticThemeArr(theme, obj) {
  return obj.games.filter((game) => game.aesthetic.includes(theme));
}
function createGameGenreThemeArr(theme, obj) {
  return obj.games.filter((game) => game.genre.includes(theme));
}

function generateCarouselForThematicSection(sectionID, thematicArr) {
  let section = document.getElementById(`${sectionID}`);
  section.innerHTML +=
    `<div id="${sectionID}-carousel" class="carousel slide m-5"><div class="carousel-inner">`.concat(
      insertCardsIntoCarouselItem(thematicArr).join(" "),
      `</div><button class="carousel-control-prev" type="button" data-bs-target="#${sectionID}-carousel" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#${sectionID}-carousel" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span></button></div>`
    );
}

function insertCardsIntoCarouselItem(thematicArr) {
  let thematicCardsCarouselArr = new Array();
  generateThematicCards(thematicArr).forEach((card) => {
    let carouselItem = "";
    //Quizás la estructura del item requiere más chicha luego (?)
    thematicCardsCarouselArr.push(
      carouselItem.concat(`<div class="carousel-item">${card}</div>`)
    );
  });
  //display carousel with the middle item card as the active element
  thematicCardsCarouselArr[Math.floor(thematicCardsCarouselArr.length / 2)] =
    thematicCardsCarouselArr[
      Math.floor(thematicCardsCarouselArr.length / 2)
    ].replace('class="carousel-item"', 'class="carousel-item active"');
  return thematicCardsCarouselArr;
}

function generateThematicCards(thematicArr) {
  let thematicCardsArr = new Array();
  thematicArr.forEach((game) => {
    thematicCardsArr.push(`<div class="d-flex justify-content-center"><div class="card w-auto border-0 text-center text-white shadow" style="width: 18rem;">
      <img src="${game.poster}" class="card-img-top position-relative" alt="${game.title} card">
      <div class="card-body">
      <h5 class="card-title text-uppercase">${game.title}</h5>
      <p class="card-title text-secondary">${game.year} . ${game.developer} . gameplay: ${game.length}</p>
      <a href="${game.steam_page}" target="_blank" rel="noopener noreferrer" class="btn text-light m-2 position-absolute top-0 d-flex justify-content-center align-items-center gap-2"
            ><p class="d-inline-block m-0">explore</p><i class="fa-brands fa-steam fs-4"></i></a
            ></a>
      </div>
      </div>
      </div>`);
  });
  return thematicCardsArr;
}
