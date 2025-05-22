function mostrarConstante() {
    const PI = 3.14;
    document.getElementById("res1").innerText = "O valor de PI é: " + PI;
}

function mostrarVariavel() {
    let nome = (document.getElementById("nome").value);
    document.getElementById("res2").innerText = "O seu nome é: " + nome;
}

function mostrarIdade() {
    var idade = (document.getElementById("idade").value);
    document.getElementById("res3").innerText = "Você tem: " + idade + " anos";
}

function mostrarGetInner() {
    let getInner = (document.getElementById("getInner").value);
    document.getElementById("res4").innerText = "Você digitou: " + getInner;
}

function mostrarNota() {
    let nota = document.getElementById("nota").value;
    if (nota >= 7) {
        document.getElementById("res5").innerText = "Aprovado!";
    } else {
        document.getElementById("res5").innerText = "Reprovado!";
    }
}

function mostrarNota2() {
    let nota2 = document.getElementById("nota2").value;
    if (nota2 >= 9) {
        document.getElementById("res6").innerText = "Excelente";
    } else if (nota2 >= 6) {
        document.getElementById("res6").innerText = "Regular";
    } else {
        document.getElementById("res6").innerText = "Insuficiente";
    }
}

function contarDoWhile() {
    let num = parseInt(document.getElementById("numDoWhile").value);
    let i = 0;
    let resultado = "";

    do {
        resultado += i + " ";
        i++;
    } while (i <= num);

    document.getElementById("res7").innerText = resultado.trim();
}

function contarWhile() {
    let num = parseInt(document.getElementById("numWhile").value);
    let i = 0;
    let resultado = "";

    while (i <= num) {
        resultado += i + " ";
        i++;
    }

    document.getElementById("res8").innerText = resultado.trim();
}

function contarFor() {
    let num = parseInt(document.getElementById("numFor").value);
    let resultado = "";

    for (let i = 0; i <= num; i++) {
        resultado += i + " ";
    }

    document.getElementById("res9").innerText = resultado.trim();
}

function mostrarDia() {
    let dia = parseInt(document.getElementById("diaSemana").value);
    let nomeDia;

    switch (dia) {
        case 1:
            nomeDia = "Domingo";
            break;
        case 2:
            nomeDia = "Segunda-feira";
            break;
        case 3:
            nomeDia = "Terça-feira";
            break;
        case 4:
            nomeDia = "Quarta-feira";
            break;
        case 5:
            nomeDia = "Quinta-feira";
            break;
        case 6:
            nomeDia = "Sexta-feira";
            break;
        case 7:
            nomeDia = "Sábado";
            break;
        default:
            nomeDia = "Dia inválido";
    }

    document.getElementById("res10").innerText = nomeDia;
}

const mostrarDobro = () => {
    let num = parseFloat(document.getElementById("numDobro").value);
    let dobro = num * 2;
    document.getElementById("res11").innerText = "O dobro é: " + dobro;
}

function listarFrutas() {
    let texto = document.getElementById("frutas").value;
    let lista = texto.split(",");
    let resultado = "Frutas digitadas:<br>";

    for (let i = 0; i < lista.length; i++) {
        resultado += "- " + lista[i].trim() + "<br>";
    }

    document.getElementById("res12").innerHTML = resultado;
}

function mostrarAlerta() {
    alert("Poderosíssimo JavaScript!");
}

function mostrarConsole() {
    let frase = document.getElementById("fraseConsole").value;
    console.log("Frase digitada:", frase);
}