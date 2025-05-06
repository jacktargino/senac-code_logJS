// Exemplo Constantes
function mostrarConstante() {
    const salario = 3000;
    document.getElementById("constante").innerText = "O valor do salário é: " + salario;
}



//Exemplo Variáveis
function mostrarVariavel() {
    let idade = 30;
    idade = 40;
    document.getElementById("variavel").innerText = "A idade é " + idade;
}

function testarFuncao() {

    function saudacao(nome) {
        return "Olá, " + nome + "!";
    }
    document.getElementById("funcao").innerText = saudacao("Jackson");

    function saudacao2(nome2) {
        return "Olá, " + nome2 + "!";
    }
    document.getElementById("funcao2").innerText = saudacao2("Gustavo");
}

//Exemplo IF/ELSE
function testarIfElse() {
    let idade = 5;
    if (idade >= 18) {
        document.getElementById("ifElse").innerText = "Você é maior  de idade!";
    }
    else {
        document.getElementById("ifElse").innerText = "Você é menor  de idade!";
    }
}

//Incremento e Decremento
let valor = 0; //Valor inicial
valor = valor+3

function incrementar() {
    valor++;
    document.getElementById("numero").innerText = "Valor atual: " + valor;
}

function decrementar() {
    valor--;
    document.getElementById("numero").innerText = "Valor atual: " + valor;
}