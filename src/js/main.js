import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", function () {
  //ajout du plugin ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const screenWidth = window.screen.width;
  const containerWidth =
    document.querySelector(".scroll-container").offsetWidth;
  console.log(screenWidth, containerWidth);
  gsap.to(".scroll-container", {
    x: containerWidth - screenWidth,
    ease: "none",
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      start: "top top",
      end: "+=300%",
      scrub: 1,
      pin: true,
    },
  });
});
