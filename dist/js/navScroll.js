const navbar = document.querySelector(".header");

window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
};
