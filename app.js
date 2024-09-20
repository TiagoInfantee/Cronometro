var milissegundos = 0;
var intervalo;

function atualizarCronometro() {
  const horas = Math.floor(milissegundos / 360000);
  const minutos = Math.floor((milissegundos % 360000) / 6000);
  const segundos = Math.floor((milissegundos % 6000) / 100);
  const centesimos = milissegundos % 100;

  document.getElementById("tempo").innerText =
    (horas < 10 ? "0" : "") +
    horas +
    ":" +
    (minutos < 10 ? "0" : "") +
    minutos +
    ":" +
    (segundos < 10 ? "0" : "") +
    segundos +
    ":" +
    (centesimos < 10 ? "0" : "") +
    centesimos;
}

document.getElementById("iniciar").addEventListener("click", function () {
  clearInterval(intervalo);
  intervalo = setInterval(function () {
    milissegundos++;
    atualizarCronometro();
  }, 10);
});

document.getElementById("parar").addEventListener("click", function () {
  clearInterval(intervalo);
});

document.getElementById("resetar").addEventListener("click", function () {
  clearInterval(intervalo);
  milissegundos = 0;
  atualizarCronometro();
});
