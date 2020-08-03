const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burger-menu");
const ipad = window.matchMedia("screen and (max-width: 767px)");

ipad.addListener(validation);

function hideShow() {
  menu.classList.toggle("is-active");
}

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener("click", hideShow);
  } else {
    burgerButton.removeEventListener("click", hideShow);
  }
}

validation(ipad);
