const toggleMenu = document.querySelector(".navbar-toggle-menu");
const navbarMenu = document.querySelector(".navbar-menu");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("active");
  navbarMenu.classList.toggle("active");
})

document.querySelectorAll("navbar-item-link").forEach(n => n.addEventListener("click", () => {
  toggleMenu.classList.remove("active");
  navbarMenu.classList.remove("active");
}))