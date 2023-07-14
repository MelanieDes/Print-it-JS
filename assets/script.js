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
const texteSlide = document.querySelector("#banner > p");
const arrowLeftSlide = document.querySelector(".arrow_left");
const arrowRightSlide = document.querySelector(".arrow_right");
const totalSlides = slides.length;

let indexSlides = 0;

function animationSlide() {
  imageSlide.src = `./assets/images/slideshow/${slides[indexSlides].image}`;
  texteSlide.innerHTML = slides[indexSlides].tagLine;

 const deleteNextDot = document.querySelector(".dot_selected");
 if(deleteNextDot){
  deleteNextDot.classList.remove("dot_selected");
 }
 let allDots = document.querySelectorAll(".dot");
 let futurSelectedDot = allDots[indexSlides];
 if(futurSelectedDot) {
  futurSelectedDot.classList.add("dot_selected");
 }
}

arrowLeftSlide.addEventListener("click", function() {
  if(indexSlides == 0) {
    indexSlides = totalSlides - 1;
  } else {
    indexSlides--;
  }
  animationSlide();
})

arrowRightSlide.addEventListener("click", function() {
  if(indexSlides == totalSlides - 1) {
    indexSlides = 0;
  } else {
    indexSlides++;
  }
  animationSlide();
})

function addNewDots() {
  const dots = document.querySelector(".dots");
  const dot = document.createElement("span")
  dot.classList.add("dot")
  dots.appendChild(dot)
}

for(let index = 0; index < slides.length; index++) {
  addNewDots();
}

let firstDotSelected = document.querySelector(".dot");
firstDotSelected.classList.add("dot_selected");

