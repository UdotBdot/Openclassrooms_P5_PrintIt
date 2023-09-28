// Tableau de diapositives
const slides = [
	{
	  image: "./assets/images/slideshow/slide1.jpg",
	  tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
	},
	{
	  image: "./assets/images/slideshow/slide2.jpg",
	  tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
	},
	{
	  image: "./assets/images/slideshow/slide3.jpg",
	  tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
	},
	{
	  image: "./assets/images/slideshow/slide4.png",
	  tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
	},
  ];
  
  // Variables
  let i = 0;
  const leftEl = document.querySelector(".arrow_left");
  const rightEl = document.querySelector(".arrow_right");
  const dotsContainer = document.querySelector(".dots");
  const img = document.querySelector(".banner-img");
  const txt = document.querySelector("p");
  
  // Créez et ajoutez les éléments .dot enfants en fonction de la longueur du tableau slides
  for (let j = 0; j < slides.length; j++) {
	const dot = document.createElement("div");
	dot.classList.add("dot");
	dotsContainer.appendChild(dot);
  }
  
  // Sélectionnez à nouveau les éléments .dot après les avoir ajoutés
  const dotsEl = dotsContainer.querySelectorAll(".dot");
  
  // Ajoutez la classe dot_selected à la première bullet (index 0)
  dotsEl[0].classList.add("dot_selected");
  
  // Écouteurs d'événements pour les boutons gauche et droite
  leftEl.addEventListener("click", function () {
	i--;
	if (i === -1) {
	  i = slides.length - 1;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i);
  });
  
  rightEl.addEventListener("click", function () {
	i++;
	if (i === slides.length) {
	  i = 0;
	}
	img.src = slides[i].image;
	txt.innerHTML = slides[i].tagLine;
	dynamicBullets(i);
  });
  
  // Fonction pour mettre à jour les bullets dynamiquement
  function dynamicBullets(count) {
	dotsEl.forEach((dot, index) => {
	  if (index === count) {
		dot.classList.add("dot_selected");
	  } else {
		dot.classList.remove("dot_selected");
	  }
	});
  }

  