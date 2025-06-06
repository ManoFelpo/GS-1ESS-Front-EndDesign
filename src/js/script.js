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

//Quiz
const perguntas = [
    {
        pergunta: "1. O que é uma enchente urbana?",
        opcoes: ["A) Acúmulo de lixo nas ruas", "B) Inundação causada por excesso de chuvas", "C) Falta de drenagem subterrânea"],
        correta: "B"
    },
    {
        pergunta: "2. Qual sensor é usado para medir nível da água?",
        opcoes: ["A) DHT11", "B) MQ2", "C) HC-SR04"],
        correta: "C"
    },
    {
        pergunta: "3. Qual instituição brasileira monitora desastres naturais?",
        opcoes: ["A) CEMADEN", "B) ANATEL", "C) INSS"],
        correta: "A"
    },
    {
        pergunta: "4. O que o buzzer no projeto representa?",
        opcoes: ["A) Iluminação", "B) Alerta sonoro de perigo", "C) Conexão Wi-Fi"],
        correta: "B"
    },
    {
        pergunta: "5. Quando o LED vermelho acende no HydroSafe?",
        opcoes: ["A) Sempre", "B) Quando está tudo seguro", "C) Quando o nível está crítico"],
        correta: "C"
    },
    {
        pergunta: "6. Qual linguagem foi usada no simulador web?",
        opcoes: ["A) PHP", "B) JavaScript", "C) Python"],
        correta: "B"
    },
    {
        pergunta: "7. Qual componente exibe texto no projeto físico?",
        opcoes: ["A) Display LCD I2C", "B) LED azul", "C) Motor servo"],
        correta: "A"
    },
    {
        pergunta: "8. Qual tecnologia permite medir distância sem contato?",
        opcoes: ["A) Wi-Fi", "B) Sensor de pressão", "C) Sensor ultrassônico"],
        correta: "C"
    },
    {
        pergunta: "9. A cor amarela no projeto representa:",
        opcoes: ["A) Alerta", "B) Normalidade", "C) Perigo total"],
        correta: "A"
    },
    {
        pergunta: "10. O HydroSafe foi desenvolvido como parte de qual desafio?",
        opcoes: ["A) Hackathon NASA", "B) Global Solution FIAP", "C) Feira de Ciências"],
        correta: "B"
    }
];

const quizForm = document.getElementById("quizForm");

// Montar perguntas no DOM
perguntas.forEach((q, index) => {
    const div = document.createElement("div");
    div.className = "pergunta";
    div.innerHTML = `<p>${q.pergunta}</p>` + q.opcoes.map((op, i) => {
        const letra = ["A", "B", "C"][i];
        return `
        <label>
          <input type="radio" name="q${index}" value="${letra}">
          ${op}
        </label><br>
      `;
    }).join("");
    quizForm.appendChild(div);
});

function corrigirQuiz() {
    let acertos = 0;
    perguntas.forEach((q, i) => {
        const resposta = document.querySelector(`input[name="q${i}"]:checked`);
        if (resposta && resposta.value === q.correta) {
            acertos++;
        }
    });

    const resultado = document.getElementById("resultadoQuiz");
    resultado.textContent = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    resultado.style.color = acertos >= 7 ? "green" : "orange";
}

//Temas
const botaoPrim = document.querySelector("#prim")
botaoPrim.addEventListener("click", () => {
    document.body.className = ""
})
const botaoEscu = document.querySelector("#escu")
botaoEscu.addEventListener("click", () => {
    document.body.className = "dark"
})
const botaoClar = document.querySelector("#clar")
botaoClar.addEventListener("click", () => {
    document.body.className = "claro"
})

//Menu Haburguer
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});