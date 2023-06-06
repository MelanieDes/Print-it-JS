const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const banner = document.getElementById('#banner');
const left = document.querySelector('.arrow_left');
const right = document.querySelector('.arrow_right');
const imageElement = document.querySelector('#banner > img');
const nomElement = document.querySelector('#banner > p');

const numberOfSlide = slides.length;

let i = 0;
/* Create bullet (dot) */ 
function dots() {
    const dots = document.querySelector('.dots');
    for (let i = 0; i < numberOfSlide; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dots.appendChild(dot);
    if (i == 0) { 
        dots.children[i].classList.add('dot_selected');
    }
    }
 }
dots();

/* Link bullet to image (dot) */
 function selected() {
    const dot = document.getElementsByClassName('dot');
    for (let i = 0; i < dot.length; i++) {
        dot[i].classList.remove('dot_selected');
    }
    dot[i].classList.add('dot_selected');
 }
/* Link tagline and image to HTML*/
function showSlide() {
    imageElement.src = `./assets/images/slideshow/${slides[i].image}`;
    nomElement.innerHTML = slides[i].tagLine;
    selected();
}
/* Call function to move left */
left.addEventListener("click", function () {
    if (i == 0) {
        i = numberOfSlide - 1;
    }
    else {
        i--;
    }
        showSlide();
});
/* Call function to move right */   
right.addEventListener("click", function () {
    if (i == numberOfSlide - 1) {
        i = 0;
    } else {
            i++;
    }    
    showSlide();    
});

interval = setInterval(showSlide, 5000);
