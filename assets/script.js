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

const imageSlide = document.querySelector('#banner > img');
const textSlide = document.querySelector('#banner > p');
const left = document.querySelector(".arrow_left");
const right = document.querySelector(".arrow_right");
const totalSlides = slides.length;

let i = 0;

function slideShow() {
    imageSlide.src = `./assets/images/slideshow/${slides[i].image}`;
    textSlide.innerHTML = slides[i].tagLine;
  };

right.addEventListener("click", () => {
    if(i == totalSlides -1) {
        i = 0;
    }else{
        i++;
    }
    slideShow();
});

left.addEventListener("click", () => {
    if(i == 0) {
        i = totalSlides -1;
    } else {
        i--;
    }
    slideShow();
});
