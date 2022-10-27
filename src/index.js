import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation"
import "@/styles";

const swiper = new Swiper(".slider", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
