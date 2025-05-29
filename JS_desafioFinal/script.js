let saldo = 1000;
let operacaoAtual = "";

function verSaldo() {
  document.getElementById("resultado").textContent = `💰 Saldo atual: R$ ${saldo.toFixed(2)}`;
  document.getElementById("inputValor").style.display = "none";
}

function mostrarInput(operacao) {
  operacaoAtual = operacao;
  const input = document.getElementById("inputValor");
  input.value = "";
  input.placeholder = operacao === 'depositar' ? "Valor para depósito" : "Valor para saque";
  input.style.display = "inline-block";
  input.focus();

  input.onkeypress = function (e) {
    if (e.key === "Enter") {
      realizarOperacao(parseFloat(input.value));
    }
  };
}

function realizarOperacao(valor) {
  const resultado = document.getElementById("resultado");
  const input = document.getElementById("inputValor");

  if (isNaN(valor) || valor <= 0) {
    resultado.textContent = "⚠️ Valor inválido.";
    return;
  }

  if (operacaoAtual === "depositar") {
    saldo += valor;
    resultado.textContent = `✅ Depósito de R$ ${valor.toFixed(2)} realizado! Saldo: R$ ${saldo.toFixed(2)}`;
  } else if (operacaoAtual === "sacar") {
    if (valor > saldo) {
      resultado.textContent = "🚫 Saldo insuficiente para saque.";
    } else {
      saldo -= valor;
      resultado.textContent = `✅ Saque de R$ ${valor.toFixed(2)} realizado! Saldo: R$ ${saldo.toFixed(2)}`;
    }
  }

  input.style.display = "none";
  operacaoAtual = "";
}

function sair() {
  const resultado = document.getElementById("resultado");
  resultado.textContent = `✅ Sessão encerrada. Saldo final: R$ ${saldo.toFixed(2)}`;
  document.getElementById("inputValor").style.display = "none";
}
