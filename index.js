const nomeHeroi = document.getElementById("nomeHeroi");
const xpHeroi = document.getElementById("xpHeroi");
const botao = document.querySelector("button");
const output = document.getElementById("resultado");
let nivelHeroi;

nomeHeroi.focus();

botao.addEventListener("click", checarInput);

function checarInput() {
  if (nomeHeroi.value === "" || xpHeroi.value === "") {
    output.innerHTML = "Preencha os dois campos acima!";
  } else {
    myFunction();
  }
}

function myFunction() {
  const valorXpHeroi = Number(xpHeroi.value);
  if (valorXpHeroi <= 1000) {
    nivelHeroi = "Ferro";
  } else if (valorXpHeroi <= 2000) {
    nivelHeroi = "Bronze";
  } else if (valorXpHeroi <= 5000) {
    nivelHeroi = "Prata";
  } else if (valorXpHeroi <= 7000) {
    nivelHeroi = "Ouro";
  } else if (valorXpHeroi <= 8000) {
    nivelHeroi = "Platina";
  } else if (valorXpHeroi <= 9000) {
    nivelHeroi = "Ascendente";
  } else if (valorXpHeroi <= 10000) {
    nivelHeroi = "Imortal";
  } else {
    nivelHeroi = "Radiante";
  }

  output.innerHTML = `Com ${valorXpHeroi} pontos, a(o) player ${nomeHeroi.value} encontra-se no nível ${nivelHeroi}.`
  // console.log(`Com ${valorXpHeroi} pontos, o herói de nome ${nomeHeroi.value} encontra-se no nível ${nivelHeroi}.`);
}