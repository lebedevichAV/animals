import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles";

const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
