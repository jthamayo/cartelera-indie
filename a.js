let cards = document.getElementsByClassName("card");
Array.from(cards).forEach((card) => {
  card.addEventListener("mouseover", () => {
    // Check if an iframe already exists to avoid duplicates
    if (card.querySelector("iframe")) return;

    // Retrieve the preview URL from the data attribute
    let url = card.getAttribute("data-preview") + "?autoplay=1&mute=1";
    let iframe = document.createElement("iframe");

    // Set iframe attributes for autoplay and fullscreen
    iframe.width = "210";
    iframe.height = "115";
    iframe.src = url;
    iframe.allow = "autoplay; fullscreen";
    iframe.className = "video-preview"; // Add a class for styling

    // Append the iframe to the card
    card.appendChild(iframe);
  });

  // Remove the iframe when the mouse leaves the card
  card.addEventListener("mouseleave", () => {
    let iframe = card.querySelector("iframe");
    if (iframe) {
      iframe.remove();
    }
  });
});
});