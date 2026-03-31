let idade = 14;

if (idade >= 18){
    console.log("É maior de idade")
}else{
    console.log("Não é maior de idade")
}

let cor;
console.log("Qual sua cor favorita?")
switch (cor){
    case "Azul":
        console.log("Azul é uma cor bem bonita mesmo");
        break;
    case "Vermelho":
        console.log("Vermelho é cor de sangue, seu psicopata!");
        break;
    case "Amarelo":
        console.log("Que cor bosta");
        break;
    default:
        console.log("Não conheço essa cor horrivél")
}