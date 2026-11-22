import { acoes } from "./acoes.js";
import observarCamera from "./motor.js";
import animais from "./animais.js";

const turnoNoturno = [
  "22:00",
  "23:00",
  "00:00",
  "01:00",
  "02:00",
  "03:00",
  "04:00",
  "05:00",
];

let horaAtual = 0;

function main() {
  const hora = turnoNoturno[horaAtual];
  horaAtual = (horaAtual + 1) % turnoNoturno.length;

  if (horaAtual === 0) {
alert("O turno noturno terminou.");
  location.reload();  }

  return hora;
}

function jogar(camera) {
  const resultado = observarCamera(camera, acoes);

  return resultado;
}

export default {jogar, main};