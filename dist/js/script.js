const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__Nav2");
// const blue = document.querySelector(".toggle__menu");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
  // blue.style="background: red;";
});
