// Sélection des éléments HTML nécessaires
const container = document.querySelector('#container'); // sélectionne l'élément HTML avec l'ID 'container'
const leftBtn = document.querySelector('#g'); // sélectionne l'élément HTML avec l'ID 'g'
const rightBtn = document.querySelector('#d'); // sélectionne l'élément HTML avec l'ID 'd'
const cardWidth = document.querySelector('.card').clientWidth; // récupère la largeur de l'élément HTML avec la classe 'card'
const containerWidth = container.clientWidth; // récupère la largeur de l'élément HTML avec l'ID 'container'


// Initialisation de la position actuelle du conteneur
let currentPosition = 0;

// Fonction pour déplacer le conteneur vers la gauche
function moveLeft() {
  currentPosition -= cardWidth;
  if (currentPosition < -containerWidth) { // si on a atteint la fin du conteneur, on revient au début
    currentPosition = 0;
  }
  container.style.transform = `translateX(${currentPosition}px)`; // on applique la transformation CSS pour déplacer le conteneur
}

// Fonction pour déplacer le conteneur vers la droite
function moveRight() {
  currentPosition += cardWidth;
  if (currentPosition > 0) { // si on a atteint le début du conteneur, on revient à la fin
    currentPosition = -containerWidth + cardWidth;
  }
  container.style.transform = `translateX(${currentPosition}px)`; // on applique la transformation CSS pour déplacer le conteneur
}

// Ajout d'un écouteur d'événement sur le clic du bouton gauche
leftBtn.addEventListener('click', moveLeft);

// Ajout d'un écouteur d'événement sur le clic du bouton droit
rightBtn.addEventListener('click', moveRight);



/////////////////*////////////////////pop up 
// Sélectionne toutes les cartes
const cards = document.querySelectorAll(".card");

// Pour chaque carte, ajoute un gestionnaire d'événements de clic sur le bouton "Get more info"
cards.forEach(card => {
  // Sélectionne le bouton "Get more info" dans chaque carte
  const button = card.querySelector("button");

  // Crée un élément de div pour la fenêtre popup et ajoute une classe "popup"
  const popup = document.createElement("div");
  popup.classList.add("popup");

  // Sélectionne l'image, le titre et le contenu de chaque carte
  const img = card.querySelector("img");
  const title = card.querySelector("h2");
  const content = card.querySelector(".cardContent");

  // Crée un élément de div pour le contenu de la fenêtre popup et ajoute une classe "popupContent"
  const popupContent = document.createElement("div");
  popupContent.classList.add("popupContent");

  // Remplit le contenu de la fenêtre popup avec l'image, le titre et le contenu de chaque carte
  popupContent.innerHTML = `
    <img src="${img.src}" alt="${title.textContent}">
    <h2>${title.textContent}</h2>
    <div>${content.innerHTML}</div>
  `;

  // Ajoute le contenu de la fenêtre popup à l'élément popup
  popup.appendChild(popupContent);

  // Ajoute l'élément popup à la carte
  card.appendChild(popup);

  // Ajoute un gestionnaire d'événements de clic sur le bouton "Get more info" pour afficher la fenêtre popup
  button.addEventListener("click", () => {
    popup.classList.add("show");
  });

  // Ajoute un gestionnaire d'événements de clic sur la fenêtre popup pour la fermer
  popup.addEventListener("click", e => {
    if (e.target.classList.contains("popup")) {
      popup.classList.remove("show");
    }
  });
});

