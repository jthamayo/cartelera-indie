export function loadHomePage() {
  const main = document.getElementById("main-page");
  if (main) {
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
    <iframe class="d-block w-100" alt="..." src="https://www.youtube.com/embed/IRG8m0jBGEA?si=AvjM1kVDdmUZ4x0c&amp;controls=0&rel=0&controls=0&start=41&autoplay=1&mute=1&loop=1&playlist=IRG8m0jBGEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
