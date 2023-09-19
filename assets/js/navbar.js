window.addEventListener("scroll", function () {
  const headerHeight = document.querySelector(".header").offsetHeight;
  const navbar = document.getElementById("navbar");
  if (window.scrollY > headerHeight - 80) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
