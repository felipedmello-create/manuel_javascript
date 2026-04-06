
const user = { name: "Felipe", age: 17};
console.log(Object.values(user));

const checkbox = document.getElementById("checkbox");

if (checkbox.checked) {
  console.log("A checkbox está certa");
} else {
  console.log("A checkbox não está certa.");
}

let titulo = document.getElementById("titulo");

titulo.textContent = "Novo título";

let caixa = document.getElementById("box");

caixa.style.backgroundColor = "blue";
caixa.style.color = "white";

let elemento = document.getElementById("menu");

elemento.classList.add("ativo");
elemento.classList.remove("escondido");
elemento.classList.toggle("dark-mode");

let botao = document.getElementById("btn");

botao.addEventListener("click", function() {
    console.log("Botão clicado!");
});