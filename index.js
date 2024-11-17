let total = 50; //je declare une variabl pour mettre le total d'allumete
let joueurActif = 1;
function enleverAllumete(nombreAllumeteAEnlever) {
  //je declacare une fonction avec un pramétre nombreAllumeteAEnlever
  total = total - nombreAllumeteAEnlever; //mon total= a total - le nombre d'allumete à enlever
  return total; // je retourner le total
} //fonction pour demander nombre à l'utilisateur
function demanderNombre() {
  while (total > 0) {
    //tant que le total et superieur à 0
    // je dmande à l'utilisateur de saisire un nombre et de le stocké dans la variable stock
    let stock = prompt(
      `Joueur ${joueurActif},combien d'alumette tu veux retirer entre 1 et 6 `
    );
    joueurActif = joueurActif === 1 ? 2 : 1; // On passe au joueur suivant
    if (stock < 1 || stock > 6) {
      //si stock est inferieur à 1 ou superieur à 6

      console.log("donner un nombre entre 1 et 6"); //je demande à l'utilisateur de donner un nombre entre 1 et 6

      demanderNombre();
    } else {
      total = enleverAllumete(stock); // Met à jour le total
      console.log("Il reste", total, "allumettes.");
      if (total === 0) {
        console.log(" bravo tu as gagner !");
        return;
      }
    }
  }
}
demanderNombre();
