// import { acoes } from "./acoes.js";
// import observarCamera from "./motor.js";
// import animais from "./animais.js";
// import main from "./main.js";
import jogo from "./main.js";

const { jogar, main } = jogo;

const camera = document.querySelectorAll(".CAM");
camera.forEach((botao) => {
  botao.addEventListener("click", () => {
    const cameraSection = document.getElementById("camera");
    const relatorioSection = document.getElementById("relatorio");
    const numeroCamera = Number(botao.dataset.camera);
    const resultado = jogar(numeroCamera);
    const hora = main();

    cameraSection.innerHTML = `<div class=""><p><b>Camêra: ${numeroCamera}</b></p> <br/>${resultado}</div>`;

    relatorioSection.innerHTML += `<div class=""><p><b>Câmera: ${numeroCamera}</b></p> <br/>${resultado} <br/><br/>Horário: ${hora}</div>`;
  });
});
