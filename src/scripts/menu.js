document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu");
  const menuList = document.querySelector("#main-menu");

  if (!menuButton || !menuList) return;

  menuButton.addEventListener("click", () => {
    const isExpanded = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isExpanded));

    menuList.setAttribute("data-open", String(!isExpanded));
  });
});
