import * as $ from "jquery";
import "slick-carousel";
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
