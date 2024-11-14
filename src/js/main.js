import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".container-carousel", {
  xPercent: -67,
  ease: "none",
  scrollTrigger: {
    trigger: ".horizontal-scroll",
    start: "top top",
    end: "+=300%",
    scrub: 1,
    pin: true,
  },
});
