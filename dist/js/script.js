const toggleMenu = document.querySelector(".toggle__menu");
const headNav = document.querySelector(".header__Nav2");
// const blurr = document.querySelector(".blur");
const header = document.querySelector(".header");
toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headNav.classList.toggle("open");
//   blurr.classList.toggle("open");
});
