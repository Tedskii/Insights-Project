const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  headerNav.classList.toggle("open");
});

const burgirBtn = document.querySelectorAll(".burgir-btn");

burgirBtn.forEach((burgir) => {
  burgir.addEventListener("click", () => {
    toggleMenu.classList.remove("open");
    headerNav.classList.remove("open");

  });
});
