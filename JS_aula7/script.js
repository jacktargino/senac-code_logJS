// 01 - If Else
function exemploIfElse() {
    let numero = parseInt(document.getElementById("num1").value);
    let resultado = (numero > 0) ? "Número positivo" : "Número negativo ou zero";
    document.getElementById("saida1").innerText = resultado;
}

// 02 - If Else If Else
function exemploIfElseIf() {
    let nota = parseFloat(document.getElementById("num2").value);
    let resultado = "";
    if (nota >= 9) {
        resultado = "Excelente";
    } else if (nota >= 6) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    document.getElementById("saida2").innerText = resultado;
}

// 03 - Switch Case Break
function exemploSwitch() {
    let dia = parseInt(document.getElementById("num3").value);
    let resultado = "";
    switch (dia) {
        case 1: resultado = "Domingo"; break;
        case 2: resultado = "Segunda-feira"; break;
        case 3: resultado = "Terça-feira"; break;
        case 4: resultado = "Quarta-feira"; break;
        case 5: resultado = "Quinta-feira"; break;
        case 6: resultado = "Sexta-feira"; break;
        case 7: resultado = "Sábado"; break;
        default: resultado = "Dia inválido";
    }
    document.getElementById("saida3").innerText = resultado;
}

// 04 - Do While
function exemploDoWhile() {
    let limite = parseInt(document.getElementById("num4").value);
    let i = 0;
    let texto = "Contando: ";
    do {
        texto += i + " ";
        i++;
    } while (i <= limite);
    document.getElementById("saida4").innerText = texto;
}

// 05 - While
function exemploWhile() {
    let limite = parseInt(document.getElementById("num5").value);
    let i = 0;
    let texto = "Contando: ";
    while (i <= limite) {
        texto += i + " ";
        i++;
    }
    document.getElementById("saida5").innerText = texto;
}

// 06 - For
function exemploFor() {
    let limite = parseInt(document.getElementById("num6").value);
    let texto = "Contando: ";
    for (let i = 0; i <= limite; i++) {
        texto += i + " ";
    }
    document.getElementById("saida6").innerText = texto;
}
