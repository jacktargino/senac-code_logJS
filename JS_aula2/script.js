// Constantes
function mostrarConstante() {
    const input = document.getElementById("constInput").value;
    const elemento = document.getElementById("constante");

    if (input !== "") {
        const salario = parseFloat(input);
        elemento.innerText = "O valor do salário é: R$ " + salario.toFixed(2);
    } else {
        elemento.innerText = "Digite um valor válido.";
    }
}

// Variáveis
function mostrarVariavel() {
    let idade = document.getElementById("variavelInput").value;
    idade = parseInt(idade);

    if (!isNaN(idade)) {
        document.getElementById("variavel").innerText = "A idade é " + idade;
    } else {
        document.getElementById("variavel").innerText = "Digite uma idade válida.";
    }
}

// Funções
function testarFuncao() {
    const nome1 = document.getElementById("nome1").value;
    const nome2 = document.getElementById("nome2").value;

    function saudacao(nome) {
        return "Olá, " + nome + "!";
    }

    document.getElementById("funcao").innerText = saudacao(nome1 || "Usuário 1");
    document.getElementById("funcao2").innerText = saudacao(nome2 || "Usuário 2");
}

// If/Else
function testarIfElse() {
    let idade = parseInt(document.getElementById("idadeInput").value);

    if (!isNaN(idade)) {
        if (idade >= 18) {
            document.getElementById("ifElse").innerText = "Você é maior de idade!";
        } else {
            document.getElementById("ifElse").innerText = "Você é menor de idade!";
        }
    } else {
        document.getElementById("ifElse").innerText = "Digite uma idade válida.";
    }
}

// Incremento e Decremento
let valor = 0;

function incrementar() {
    const inicial = parseInt(document.getElementById("valorInicial").value);
    if (!isNaN(inicial)) {
        if (valor === 0) valor = inicial;
        valor++;
        document.getElementById("numero").innerText = "Valor atual: " + valor;
    } else {
        document.getElementById("numero").innerText = "Digite um valor inicial válido.";
    }
}

function decrementar() {
    const inicial = parseInt(document.getElementById("valorInicial").value);
    if (!isNaN(inicial)) {
        if (valor === 0) valor = inicial;
        valor--;
        document.getElementById("numero").innerText = "Valor atual: " + valor;
    } else {
        document.getElementById("numero").innerText = "Digite um valor inicial válido.";
    }
}

function mostrarVariavel() {

    let idade = document.getElementById("variavelInput");
    idade = parseInt(idade);

    if (!isNaN(idade)) {
        document.getElementById("variavel").innerText = "A idade é " + idade;
    }

    else {
        document.getElementById("variavel").innerText = "Digite uma idade válida,";
    }
}

function testarFuncao() {

    const nome1 = document.getElementById("nome1").value;
    const nome2 = document.getElementById("nome2").value;

    function saudacao(nome) {
        return "Olá, " + nome + "!";
    }

    document.getElementById("funcao").innerText = saudacao(nome1 || "Usuário1");
    document.getElementById("funcao2").innerText = saudacao(nome2 || "Usuário2");
}