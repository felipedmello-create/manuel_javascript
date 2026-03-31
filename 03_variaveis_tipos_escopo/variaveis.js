let nome = "Felipe";
const numero = 1;
var idade = 17;

console.log(nome, numero, idade);

//Escopos

if (true) {
  let nome = "Bernardo";
  const idade = 16;
}

console.log(nome); // erro
console.log(idade); // erro

//Escopo de função

function teste() {
  if (true) {
    var nome = "Bernardo";
  }

  console.log(nome); // funciona
}

teste();
