// function mostrarFaixaEtaria() {

//     let idade = parseInt(document.getElementById("idade").value);
//     let mensagem;

//     if (idade >= 0 && idade <= 12) {
//         mensagem = "Você é uma criança.";
//     }

//     else if (idade >= 13 && idade <= 17) {
//         mensagem = "Você é um adolescente.";
//     }

//     else if (idade >= 18 && idade <= 59) {
//         mensagem = "Você é um adulto.";
//     }

//     else if (idade >= 60) {
//         mensagem = "Você é um idoso.";
//     }

//     else {
//         mensagem = "Idade inválida.";
//     }

//     document.getElementById("faixaEtaria").innerText = mensagem;
// }

// // Exemplo 2: Armazenar Frutas
// function mostrarFrutas() {
//     const fruta1 = document.getElementById("fruta1").value;
//     const fruta2 = document.getElementById("fruta2").value;
//     document.getElementById("listaFrutas").innerText = Frutas armazenadas: ${fruta1}, ${fruta2};
// }

// // Exemplo 3: Nome e Idade
// function mostrarNomeIdade() {
//     const nome = document.getElementById("nome").value;
//     const idade = parseInt(document.getElementById("idadeNome").value);
//     document.getElementById("nomeIdade").innerText = Nome: ${nome}, Idade: ${idade};
// }

// // Exemplo 4: Alterar Texto
// function alterarTexto() {
//     const novoTexto = document.getElementById("novoTexto").value;
//     document.getElementById("textoInicial").innerText = "Texto alterado com sucesso!";
//     document.getElementById("textoAlterado").innerText = Novo texto: ${novoTexto};
// }

// // Exemplo 5: Alerta
// function mostrarAlerta() {
//     alert("Tudo certo! Você clicou no botão.");
// }


// // OUTRA PARTE

// function verificarDia() {
//     const dia = parseInt(document.getElementById("dia").value);
//     let mensagem;

//     switch (dia) {
//         case 1:
//             mensagem = "Hoje é segunda-feira.";
//             break;
//         case 2:
//             mensagem = "Hoje é terça-feira.";
//             break;
//         case 3:
//             mensagem = "Hoje é quarta-feira.";
//             break;
//         case 4:
//             mensagem = "Hoje é quinta-feira.";
//             break;
//         case 5:
//             mensagem = "Hoje é sexta-feira.";
//             break;
//         case 6:
//             mensagem = "Hoje é sábado.";
//             break;
//         case 7:
//             mensagem = "Hoje é domingo.";
//             break;
//         default:
//             mensagem = "Número do dia inválido.";
//             break;
//     }

//     document.getElementById("resultado").innerText = mensagem;
// }