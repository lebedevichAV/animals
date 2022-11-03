import * as $ from "jquery";
import "slick-carousel";
import "@/styles";

$(document).ready(function () {
  $(".slider").slick();
});

let cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("mouseover", function () {
    card.classList.toggle("card_chosen");
  });
  card.addEventListener("mouseout", function () {
    card.classList.toggle("card_chosen");
  });
}
