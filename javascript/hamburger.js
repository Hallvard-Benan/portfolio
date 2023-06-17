const button = document.querySelector("#check");
const menu = document.querySelector(".nav-menu__list");

window.addEventListener("DOMContentLoaded", () => {
  if (button.checked) {
    button.checked = false;
  }
});

button.addEventListener("click", (event) => {
  menu.classList.toggle("open");
});

const links = document.querySelectorAll(".nav-menu__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    check.checked = false;
  });
});
