const slides = [
	{ // [0]
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{ // [1]
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{ // [2]
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{ // [3]
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];
const leftEl = document.querySelector(".arrow_left")
const rightEl = document.querySelector(".arrow_right")
const dots = document.querySelector(".dots")
const img = document.querySelector(".banner-img")
const txt = document.querySelector("p")
let i = 0 

leftEl.addEventListener("click", function(){
	i--;
	if (i === -1) {
		i = slides.length - 1;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine
	dynamicBullets(i);
})

rightEl.addEventListener("click", function() {
	i++;
	if (i === slides.length) {
		i = 0
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine
	dynamicBullets(i);
})	

function dynamicBullets(count) {
img.src = slides[count].image;
txt.innerHTML = slides[count].tagLine;
updateBullets(count);
}

function updateBullets(count) {
	const dotsEl = dots.querySelectorAll(".dot");
	dotsEl.forEach((dot, i) => {
	  if (i === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }
  

  
