export function loadHomePage(){
    console.log("loadHomePage called"); // Debugging log
    const main = document.getElementById("main-page");
    if (main) {
        main.innerHTML = "";
    }
}