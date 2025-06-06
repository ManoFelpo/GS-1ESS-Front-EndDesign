//Simulador
function verificarNivel() {
    const input = document.getElementById("nivelAgua");
    const resultado = document.getElementById("resultado");
    const valor = parseInt(input.value);

    if (isNaN(valor)) {
        resultado.innerHTML = "Por favor, digite um número válido.";
        resultado.className = "";
        return;
    }

    if (valor > 100) {
        resultado.innerHTML = "🔴 PERIGO! Risco de enchente!";
        resultado.className = "estado-perigo";
    } else if (valor > 35) {
        resultado.innerHTML = "🟡 Estado de Alerta";
        resultado.className = "estado-alerta";
    } else {
        resultado.innerHTML = "💚 Estado OK";
        resultado.className = "estado-ok";
    }
}

//SlideShow
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");

function mostrarSlide(n) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex = (n + slides.length) % slides.length;
    slides[slideIndex].style.display = "block";
}

function mudarSlide(n) {
    mostrarSlide(slideIndex + n);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarSlide(slideIndex);
});

//Formulário
  const form = document.getElementById('formContato');
  const resposta = document.getElementById('resposta');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (!nome || !email || !mensagem) {
      resposta.style.color = "red";
      resposta.textContent = "Por favor, preencha todos os campos.";
    } else if (!email.includes('@') || !email.includes('.')) {
      resposta.style.color = "red";
      resposta.textContent = "Digite um e-mail válido.";
    } else {
      resposta.style.color = "green";
      resposta.textContent = "Mensagem enviada com sucesso!";
      form.reset();
    }
  });