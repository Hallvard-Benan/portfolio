const button = document.querySelector("#check");
const menu = document.querySelector(".nav-menu__list");

console.log(button);

button.addEventListener("click", (event) => {
  menu.classList.toggle("open");
});

const links = document.querySelectorAll(".nav-menu__link");

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("open");
    check.checked = false;
  });
});
