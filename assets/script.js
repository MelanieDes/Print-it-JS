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
const dots = document.querySelector(".dots");
const dot = document.createElement("span");
const totalSlides = slides.length;

let indexSlide = 0;

function dots() {
  dot.classList.add(".dot");
  document.querySelector(".dots").appendChild(dot);
}


function slideShow() {
  imageSlide.src = `./assets/images/slideshow/${slides[indexSlide].image}`;
  textSlide.innerHTML = slides[indexSlide].tagLine;
}

slideArrowRight.addEventListener("click", () => {
  if (indexSlide == totalSlides - 1) {
    indexSlide = 0;
  } else {
    indexSlide++;
  }
  slideShow();
});

slideArrowLeft.addEventListener("click", () => {
  if (indexSlide == 0) {
    indexSlide = totalSlides - 1;
  } else {
    indexSlide--;
  }
  slideShow();
});

// dots.addEventListener()
