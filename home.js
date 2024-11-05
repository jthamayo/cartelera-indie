export function loadHomePage() {
  const main = document.getElementById("main-page");
  if (main) {
    main.innerHTML = "";
    main.innerHTML = `<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg?t=1666290860" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
      </div>
    <div class="carousel-item">
      <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1933840/header.jpg?t=1730141892" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
      </div>
    <div class="carousel-item">
      <img src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2420660/header.jpg?t=1729124829" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
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
  }
}
