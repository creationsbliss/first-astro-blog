// Runs ONLY in the browser
const menuButton = document.querySelector(".menu");
const menuLinks = document.querySelector("#main-menu");

if (menuButton && menuLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));

    menuLinks.setAttribute("data-open", String(!isOpen));
  });
}
