import * as $ from "jquery";
import "slick-carousel";
import "@/styles";

$(document).ready(function () {
  $(".slider").slick();
});

let cardPhotos = document.querySelectorAll(".card__photo");

for (let cardPhoto of cardPhotos) {
  cardPhoto.addEventListener("mouseover", function () {
    cardPhoto.classList.toggle("card__photo_chosen");
  });
  cardPhoto.addEventListener("mouseout", function () {
    cardPhoto.classList.toggle("card__photo_chosen");
  });
}
