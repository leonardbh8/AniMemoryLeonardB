// commencement du jeu le js viens chercher les cartes et faire le tableau id tableau

//sert à trouver ton tableau dans la page html id tableau pour que le JS puisse y poser les cartes.
const tableau = document.getElementById("tableau");

// creation tableau legumes

const images = [
  "M01TP04 - Ressources - Projet Memory/ressources/memory-legume/1.svg",
  "M01TP04 - Ressources - Projet Memory/ressources/memory-legume/2.svg",
  "M01TP04 - Ressources - Projet Memory/ressources/memory-legume/3.svg",
  "M01TP04 - Ressources - Projet Memory/ressources/memory-legume/4.svg",
  "M01TP04 - Ressources - Projet Memory/ressources/memory-legume/5.svg",
  "M01TP04 - Ressources - Projet Memory/ressources/memory-legume/6.svg",
];

// creation tableau on fait rentrer le premier contenat 6 images deux fois dans le tab finale pour qu'il y ai les paires

const finalImages = [...images, ...images];
melangerTableau(finalImages);

// Ecrit les 12 images du tableau final dans le html avec un forEach pour chaque image on créer une div col
//document.createElement == creer du html
//forEach == boucle qu me permet de pas tout faire a la main dans le html comme j'avais commencer avec les <td> et en plus le html reste figé alors que le js rajoute la dynamique
// const col = document.createElement("div"); == fabrique case col == colonne
//col.classList.add("col"); == dis à bootstrap que c'est une case de la grille
// creer les cases

// compteur pour donner un numero unique a chaque carte
let id = 0;

// Les deux mains elles retiennent les cartes retournées pendant un essai.
// null = vide, aucune carte en main pour l'instant.
let premierecarte = null;
let secondecarte = null;

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.key === " ") {
    event.preventDefault();
    location.reload();
  }
});

//Boucle qui fabrique le tableau de 12 cartes
//Boucle qui fabrique le tableau de 12 cartes
//Avec row-cols-4 sur le plateau : 4 cases par ligne

finalImages.forEach(function (image) {
  const col = document.createElement("div");
  col.classList.add("col");

  // creation de l'image avec les class bootstrap img-fluid rounded-4 p-2 bg-light
  // carte == l'image
  //carte.src = image; == mets une image
  //carte.classList.add("img-fluid", "rounded-4", "p-2", "bg-light"); == style bootstrap
  //dataset = un "tiroir" invisible attaché à la carte
  const carte = document.createElement("img");
  carte.src = "M01TP04 - Ressources - Projet Memory/ressources/question.svg";
  carte.dataset.legume = image;
  carte.alt = "carte";
  carte.id = String(id);
  id++;
  carte.classList.add("img-fluid", "rounded-4", "p-2", "bg-light");

  // ajout de l'image dans la div col et ajout de la div col dans le tableau carte == image
  //appendChild ==range dedans la div p ex

  carte.addEventListener("click", function () {
    if (secondecarte !== null || !carte.src.includes("question")) {
      return;
    }
    carte.src = carte.dataset.legume;
    if (premierecarte === null) {
      premierecarte = carte;
    } else {
      secondecarte = carte;

      console.log(premierecarte, secondecarte);

      if (premierecarte.dataset.legume === secondecarte.dataset.legume) {
        premierecarte.classList.remove("bg-light");
        premierecarte.classList.add("bg-success");
        secondecarte.classList.remove("bg-light");
        secondecarte.classList.add("bg-success");
        premierecarte = null;
        secondecarte = null;
      } else {
        (premierecarte.classList.remove("bg-light"),
          premierecarte.classList.add("bg-danger"),
          secondecarte.classList.remove("bg-light"));
        secondecarte.classList.add("bg-danger");

        setTimeout(function () {
          premierecarte.src =
            "M01TP04 - Ressources - Projet Memory/ressources/question.svg";
          secondecarte.src =
            "M01TP04 - Ressources - Projet Memory/ressources/question.svg";
          (premierecarte.classList.remove("bg-danger"),
            premierecarte.classList.add("bg-light"),
            secondecarte.classList.remove("bg-danger"),
            secondecarte.classList.add("bg-light"));

          premierecarte = null;
          secondecarte = null;
        }, 500);
      }
    }
  });

  col.appendChild(carte);
  tableau.appendChild(col);
});

// Melanger le tableau (aléatoire) Mélanger : l'algorithme de Fisher-Yates

function melangerTableau(tableau) {
  for (let i = tableau.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [tableau[i], tableau[j]] = [tableau[j], tableau[i]];
  }
}
