//Recuparation données inscripstions
document
  .getElementById("formInscription")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });
let nom = document.getElementById("nom").value;
let email = document.getElementById("email").value;
let motdePasse = document.getElementById("motdePasse").value;
let confirmmotdePasse = document.getElementById("confirmmotdePasse").value;

// Refus si nb de caractere non valide lenght = nb
if (nom.length < 3) {
  document.getElementById("nom").classList.add("is-invalid");
}

// mdp 6 caractere mini et chiffre et symbole
if (motdePasse.length < 6 && ) {
  document.getElementById("motdePasse").classList.add("is-invalid");
}
