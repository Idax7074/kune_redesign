const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("shown");
  const menuShown = menu.classList.contains("shown");
  console.log(menuShown);
}

btn.addEventListener("click", toggleMenu);

function myFunction(x) {
  x.classList.toggle("change");
}
