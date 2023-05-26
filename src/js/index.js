const alterarTemaBotao = document.getElementById("botao-tema");
const logotipo = document.querySelector(".logo");
const body = document.querySelector("body");
const imagemTema = document.querySelector(" .imagem-botao");

alterarTemaBotao.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("dark-mode");

    body.classList.toggle("dark-mode");
   
    if (modoEscuroAtivo) {
        imagemTema.setAttribute("src", "./src/assets/imagens/Kingsoul.png");
        logotipo.setAttribute("src", "./src/assets/imagens/Logo-black.png")
       

    } else {
        body.classList.add("dark-mode")
        imagemTema.setAttribute("src", "./src/assets/imagens/Void_Heart.png");
        logotipo.setAttribute("src", "./src/assets/imagens/Logo-white.png")
       
    }
});

/* ============== função de áudio ================= */

var cartaoHollow = document.getElementById('cartao-hollow-hornet');
var meuAudio = document.querySelector('audio');

var audioPlaying = false;


cartaoHollow.addEventListener('click', function() {
  if (!audioPlaying) {
    meuAudio.play();
    audioPlaying = true;
  } else {
    meuAudio.pause();
    audioPlaying = false;
  }
});


var cartaoHollow = document.getElementById('cartao-trupe-grimm');
var meuAudio2 = document.getElementById('meu-audio2');

var audioPlaying = false;

cartaoHollow.addEventListener('click', function() {
  if (!audioPlaying) {
    meuAudio2.play();
    audioPlaying = true;
  } else {
    meuAudio2.pause();
    audioPlaying = false;
  }
});


var cartaoHollow = document.getElementById('cartao-hollow-defensor');
var meuAudio3 = document.getElementById('meu-audio3');

var audioPlaying = false;

cartaoHollow.addEventListener('click', function() {
  if (!audioPlaying) {
    meuAudio3.play();
    audioPlaying = true;
  } else {
    meuAudio3.pause();
    audioPlaying = false;
  }
});






