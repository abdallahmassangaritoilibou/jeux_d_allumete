

let total=50 //je declare une variabl pour mettre 
function enleverAllumete(nombreAllumeteAEnlever){
  total = total - nombreAllumeteAEnlever 
return total //retourner le totale
}
//console.log(enleverAllumete(5))
function demanderNombre(){
  
  
  while (total>0){
    let stock= prompt("combien d'alumette tu veux retirer entre 1 et 6 ")
     if ( stock <1 || stock >6 ){
        console.log("donner un nombre entre 1 et 6")
        demanderNombre()
     }
     else {
      total = enleverAllumete(stock); // Met à jour le total
      console.log("Il reste", total, "allumettes.");
      demanderNombre()
     
    }
  }
}
 demanderNombre()