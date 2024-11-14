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

  gsap
    .timeline()
    .to(".scroll-container", {
      x: containerWidth - screenWidth,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    })
    .from(".green-1", {
      left: "0",
      opacity: 0,
      scrollTrigger: {
        trigger: ".green-1",
        start: "top bottom",
        scrub: true,
      },
    })
    .from(".green-2", {
      right: "0",
      opacity: 0,
      scrollTrigger: {
        trigger: ".green-2",
        start: "top bottom",
        scrub: true,
      },
    })
    .from(".green-3", {
      left: "0",
      opacity: 0,
      scrollTrigger: {
        trigger: ".green-3",
        start: "top bottom",
        scrub: true,
      },
    });
});
