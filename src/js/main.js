import { gsap } from "gsap";
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

//explication des éléments scroll horizontal

//le gsap va animer l'élément grâce à la classe .container

//le xPercent déplace horizontalement l'élément de -67% (calcul fait par rapport à la largeur de l'écran)

//ease: "none" fait que il y a pas de variation de vitesse (la vitesse dépend de notre scroll).

//Dans scrollTrigger on a configuré le déclenchement de l'animation.

//Trigger: ".horizontal-scroll", veut dire que l'animation commence lors de la class .horizontal-scroll.

//Start: "top top" est là pour que l'animation commence quand le haut de l'élément .horizontal-scroll est en haut de l'écran.

//End: "+=300%" fait que l'animation se finit quand on a scrollé sur une distance qui équivaut à 3 fois la taille de l'écran (de la fenêtre).

//Scrub:1, ajoute de la fluidité au scroll.

//Pour fixer l'élément dans la fenêtre et donner l'impression qu'on scroll horizontalement nous avons ajouté : pin: true.

// explications des éléments d'apparition au scroll

// Faire apparaitre les différents éléments en modifiant leur position et leur opacité quand ils entrent dans l'écran de l'utilisateur. Les éléments sont tout d'abord placés en dehors de l'écran, puis viennent se regrouper vers le milieu de celui-ci en se positionnant en cascade.

//Dans scrollTrigger on a configuré le déclenchement de l'animation.

//Les éléments 1 et 3 arrivent depuis la gauche, d'où le paramètre "left" et l'élément 2 arrive depuis la droite, d'ou le "right".

//Le "start: "top bottom"" signifie que l'animation commencera lorsque le haut des éléments "box" atteignent le bas de la fenêtre de visualisation.

// "scrub:true" synchronise l'animation avec le défilement, donc elle avance ou recule en fonction du déplacement de la page.

// ces paramètres sont répétés sur chacune des 3 box.
