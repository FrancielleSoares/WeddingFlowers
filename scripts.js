function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");

  document.getElementById("modal").classList.toggle("modal");

  document.getElementsByTagName("body")[0].classList.toggle("body-overflow-hidden");
}
