import * as $ from "jquery";
import "slick-carousel";
import Swiper, { Scrollbar } from "swiper";
import "@/styles";

$(document).ready(function () {
  $(".slider").slick();
});

let photos = document.querySelectorAll(".card__photo");

for (let photo of photos) {
  photo.addEventListener("mouseover", function () {
    photo.parentElement.classList.toggle("card_chosen");
    photo.parentElement
      .querySelector(".popup")
      .classList.toggle("popup_active");
  });
  photo.addEventListener("mouseout", function () {
    photo.parentElement.classList.toggle("card_chosen");
    photo.parentElement
      .querySelector(".popup")
      .classList.toggle("popup_active");
  });
}

const swiper = new Swiper(".swiper", {
  modules: [Scrollbar],
  slidesPerView: 4,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

let network_list = document.querySelectorAll(".social__link");

for (let network_link of network_list) {
  network_link.addEventListener("mouseover", function () {
    network_link.classList.toggle("social__link_active");
  });
  network_link.addEventListener("mouseout", function () {
    network_link.classList.toggle("social__link_active");
  });
}