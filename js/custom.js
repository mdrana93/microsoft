const menuBtn = document.querySelector(".menu-btn");
const mainMenu = document.querySelector(".main-menu");
let menuOpen = false;
menuBtn.addEventListener("click", function () {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});

menuBtn.addEventListener("click", function () {
  mainMenu.classList.toggle("show");
});
