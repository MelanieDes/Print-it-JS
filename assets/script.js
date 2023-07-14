const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const imageSlide = document.querySelector("#banner > img");
const textSlide = document.querySelector("#banner > p");
const slideArrowLeft = document.querySelector(".arrow_left");
const slideArrowRight = document.querySelector(".arrow_right");
const totalSlides = slides.length;

let indexSlide = 0;

function animationSlide() {
  imageSlide.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
  textSlide.innerHTML = slides[indexSlide].tagLine;
  // DOTS
  // supprimer la classe selected au précédent dot active / fait
  let previusActivateDot = document.querySelector(".dot_selected")
  if(previusActivateDot) {
    previusActivateDot.classList.remove("dot_selected")
  }
  // rajouter au future active dot la selected / fait
  let allDots = document.querySelectorAll(".dot");
  let futureActiveDot = allDots[indexSlide];
  if(futureActiveDot) {
    futureActiveDot.classList.add("dot_selected");
  } 
}

slideArrowRight.addEventListener("click", function() {
  if (indexSlide == totalSlides - 1) {
    indexSlide = 0;
  } else {
    indexSlide++;
  }
  animationSlide();
});

slideArrowLeft.addEventListener("click", function() {
  if (indexSlide == 0) {
    indexSlide = totalSlides -1;
  } else {
    indexSlide--;
  }
  animationSlide();
});

function appendNewDot() {
  const dots = document.querySelector(".dots");
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dots.appendChild(dot);
}

for (let index = 0; index < slides.length; index++) {
  appendNewDot();
}

// ajouter au premier dot la classe dot_selected
let firstDot = document.querySelector(".dot");
firstDot.classList.add("dot_selected");
