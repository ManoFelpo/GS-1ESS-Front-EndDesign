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
