export function loadHomePage(games) {
  const main = document.getElementById("main-page");
  if (main) {
    //-------------------Visual-cue-active-tab---------------------------------

    const homePage = document.getElementById("home");
    const catalogPage = document.getElementById("catalog");
    homePage.setAttribute("class", "nav-link active");
    catalogPage.setAttribute("class", "nav-link");

    //--------------------------------------------------------
    main.innerHTML = `<section id="new-releases" class="pt-2 mt-5"></section>`;
    main.setAttribute("class", "mt-1");
    const newSection = document.getElementById("new-releases");
    newSection.innerHTML += `<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
    <div class="carousel-item active">
        <div class="position-relative">
        <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2198150/ss_ed5a338f98da1acd76d232e581e7ca0c2e088958.600x338.jpg?t=1727471389" class="d-block w-100 position-relative" alt="...">
        <div class="dark-film z-1"></div>
        </div>
        <iframe class="video-preview px-2 position-absolute top-0 start-0" width="100%" height="100%" alt="..." src="https://www.youtube.com/embed/CdWpq2efN8Y?si=AS_UbQaxUrVW8RCp&amp;&rel=0&controls=0&start=0&autoplay=1&mute=1&loop=1&playlist=CdWpq2efN8Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <div class="carousel-caption d-none d-md-block">
        <h5 class="display-1 text-start z-3 position-relative">TITLE</h5>
        <p class="display-3 text-start z-3 position-relative">available on steam</p>
        </div>
    </div>
    <div class="carousel-item">
      <div class="position-relative">
      <div class="dark-film z-1"></div>
      <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1933840/ss_2ac856121113c322cee773ff539579eab970ea5e.600x338.jpg?t=1730734384" class="d-block w-100 position-relative" alt="...">
      </div>
      <iframe class="video-preview px-2 position-absolute top-0 start-0" width="100%" height="100%" src="https://www.youtube.com/embed/b0lwduu8WyY?si=BAnHwB52D9P74MVf&amp;controls=0&rel=0&controls=0&start=0&autoplay=1&mute=1&loop=1&playlist=b0lwduu8WyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="display-1 text-start z-3 position-relative">TITLE</h5>
      <p class="display-3 text-start z-3 position-relative">available on steam</p>
      </div>
    </div>
    <div class="carousel-item">
      <div class="position-relative">
      <div class="dark-film z-1"></div>
      <img src="https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2420660/ss_62a1d600f868ac02023335d29a4c744f71fc4f97.1920x1080.jpg?t=1729124829" class="d-block w-100 position-relative" alt="...">
      </div>
      <iframe class="video-preview px-2 position-absolute top-0 start-0" width="100%" height="100%" alt="..." src="https://www.youtube.com/embed/IRG8m0jBGEA?si=AvjM1kVDdmUZ4x0c&amp;&rel=0&controls=0&start=0&autoplay=1&mute=1&loop=1&playlist=IRG8m0jBGEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <div class="carousel-caption d-none d-md-block">
      <h5 class="display-1 text-start z-3 position-relative">TITLE</h5>
      <p class="display-3 text-start z-3 position-relative">available on steam</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>`;
  //}
    //TODO: play games ONLY when featured carousel-item active
    //TODO: create function to pick three latest games to be featured in home page as new releases
    //TODO: link steam to explore cards button
    //TODO: swap black linear-gardient for svg
    //TODO: fix page home tab load issue
    //TODO: add carousel next and previous previsualization

    loadThematicCards(games);
  }
}

function loadThematicCards(obj) {
  const main = document.getElementById("main-page");

  main.innerHTML += `<div id="thematicSection" class="container px-5"></div>`;

  let themeArr = ["atmospheric", "metroidvania", "puzzle", "card", "horror", "pixel", "cutouts", "cozy"];



  ///////////////////////////////////////////pixel games//////////////////////////////////////////////////////

  let pixelArt = new Array();
  obj.games.forEach((game) => {
    // Check if aesthetic is an array and includes "pixel"
    if (Array.isArray(game.aesthetic) && game.aesthetic.includes("pixel")) {
      pixelArt.push(game);
    }
  });

  createThematicSection(themeArr);

  generateCarouselForThematicSection("pixel-games", pixelArt);

}

function createThematicSection(themeArr){
  const container = document.getElementById("thematicSection");
  themeArr.forEach(theme =>{
    container.innerHTML += `<section id='${theme}-games' class='container mt-5'></section>`;
    document.getElementById(`${theme}-games`).innerHTML += `<h2 class="fs-1 fw-bold text-capitalize">${theme} Games</h2><h3 class="text-secondary">Explore the World of ${theme} Games</h3>`;

  });
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
      <p class="card-title text-secondary">${game.release} . ${game.length} . developed by ${game.developer}</p>
      <a href="${game.steam_page}" target="_blank" rel="noopener noreferrer" class="btn text-light border-0 m-3 px-4 position-absolute top-50 end-0">explore</a>
      </div>
      </div>
      </div>`);
  });
  return thematicCardsArr;
}
