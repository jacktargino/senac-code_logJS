// function exibirResultado(mensagem) {
//     document.getElementById("output").innerText = mensagem;
// }

// // Variáveis
// function exemploVariaveis() {
//     let nome = document.getElementById("nomeProdutoVar").value;
//     let preco = parseFloat(document.getElementById("precoProdutoVar").value);
//     exibirResultado(`Produto: ${nome}, Preço: R$ ${preco.toFixed(2)}`);
// }

// // Condicional (if/else)
// function exemploCondicional() {
//     let status = document.getElementById("statusPedidoIf").value.toLowerCase();
//     if (status === "entregue") {
//         exibirResultado("Pedido entregue!");
//     } else {
//         exibirResultado("Pedido ainda não entregue.");
//     }
// }

// // Switch case
// function exemploSwitch() {
//     let tipo = document.getElementById("tipoEntregaSwitch").value;
//     switch (tipo) {
//         case "rapida":
//             exibirResultado("Entrega rápida: 30 minutos.");
//             break;
//         case "normal":
//             exibirResultado("Entrega normal: 60 minutos.");
//             break;
//         default:
//             exibirResultado("Tipo de entrega não reconhecido.");
//     }
// }

// // Loop (for)
// function exemploLoopFor() {
//     let itensTexto = document.getElementById("itensFor").value;
//     let itens = itensTexto.split(',').map(item => item.trim());
//     let listaItens = "Itens: ";
//     for (let i = 0; i < itens.length; i++) {
//         listaItens += itens[i] + (i < itens.length - 1 ? ", " : "");
//     }
//     exibirResultado(listaItens);
// }

// // Arrays
// function exemploArray() {
//     let cardapioTexto = document.getElementById("cardapioArray").value;
//     let cardapio = cardapioTexto.split(',').map(item => item.trim());
//     exibirResultado("Cardápio: " + cardapio.join(", "));
// }

// // String
// function exemploString() {
//     let nome = document.getElementById("nomeClienteString").value;
//     exibirResultado(`Nome em maiúsculo: ${nome.toUpperCase()}`);
// }

// // Funções
// function exemploFuncao() {
//     let valor1 = parseFloat(document.getElementById("valor1Funcao").value);
//     let valor2 = parseFloat(document.getElementById("valor2Funcao").value);
//     function somar(a, b) {
//         return a + b;
//     }
//     exibirResultado(`Soma: R$ ${somar(valor1, valor2).toFixed(2)}`);
// }

// // Manipulação do DOM
// function exemploDOM() {
//     let endereco = document.getElementById("enderecoDOM").value;
//     exibirResultado(`Seu endereço: ${endereco}`);
// }

// // Objetos
// function exemploObjeto() {
//     let nome = document.getElementById("nomeObjeto").value;
//     let produto = document.getElementById("produtoObjeto").value;
//     let pedido = { cliente: nome, item: produto };
//     exibirResultado(`Pedido: Cliente ${pedido.cliente} pediu ${pedido.item}.`);
// }

// // Herança
// function exemploHeranca() {
//     let nome = document.getElementById("nomeBebidaHeranca").value;
//     let preco = parseFloat(document.getElementById("precoBebidaHeranca").value);

//     class Produto {
//         constructor(nome, preco) {
//             this.nome = nome;
//             this.preco = preco;
//         }
//         detalhes() {
//             return `${this.nome} - R$ ${this.preco.toFixed(2)}`;
//         }
//     }

//     class Bebida extends Produto {
//         constructor(nome, preco, tipo = "Bebida") {
//             super(nome, preco);
//             this.tipo = tipo;
//         }
//         detalhes() {
//             return `${super.detalhes()} (Tipo: ${this.tipo})`;
//         }
//     }

//     const minhaBebida = new Bebida(nome, preco);
//     exibirResultado(`Detalhes: ${minhaBebida.detalhes()}`);
// }

// // Polimorfismo
// function exemploPolimorfismo() {
//     let tipoEntrega = document.getElementById("tipoEntregaPoli").value;

//     class Entrega {
//         calcularTempo() {
//             return "Tempo de entrega padrão.";
//         }
//     }

//     class EntregaExpressa extends Entrega {
//         calcularTempo() {
//             return "Tempo de entrega expressa: mais rápido!";
//         }
//     }

//     let entrega;
//     if (tipoEntrega === "expressa") {
//         entrega = new EntregaExpressa();
//     } else {
//         entrega = new Entrega();
//     }
//     exibirResultado(entrega.calcularTempo());
// }

// // Async/Await (Simulação)
// async function exemploAsyncAwait() {
//     exibirResultado("Simulando pagamento...");
//     await new Promise(resolve => setTimeout(resolve, 2000));
//     exibirResultado("Pagamento concluído!");
// }

// // Constantes
// function exemploConst() {
//     const TAXA = 2.50;
//     let valorBase = parseFloat(document.getElementById("taxaConst").value);
//     let total = valorBase + TAXA;
//     exibirResultado(`Valor base: R$ ${valorBase.toFixed(2)}, Taxa: R$ ${TAXA.toFixed(2)}, Total: R$ ${total.toFixed(2)}`);
// }

// // Loop Do...While
// function exemploDoWhile() {
//     let contador = parseInt(document.getElementById("contadorDoWhileSimples").value);
//     let i = 0;
//     let resultado = "Contando (do...while): ";
//     do {
//         resultado += i + (i < contador ? ", " : "");
//         i++;
//     } while (i <= contador);
//     exibirResultado(resultado);
// }

// // Loop While
// function exemploWhile() {
//     let contador = parseInt(document.getElementById("contadorWhileSimples").value);
//     let i = 0;
//     let resultado = "Contando (while): ";
//     while (i <= contador) {
//         resultado += i + (i < contador ? ", " : "");
//         i++;
//     }
//     exibirResultado(resultado);
// }

// Função geral do script

function exibirResultado(mensagem) {
    document.getElementById("output").innerText = mensagem;
}


// Exemplo Variáveis com OP Literal e chamado da Função

function exemploVariaveis() {

    let nome = document.getElementById("nomeProdutoVar").value;
    let preco = parseFloat(document.getElementById("precoProdutoVar").value);

    exibirResultado(`Produto: ${nome}, Preço: R$ ${preco.toFixed(2)}`);

}

// Condicional (if/else)
function exemploCondicional() {
    let status = document.getElementById("statusPedidoIf").value.toLowerCase();
    if (status === "entregue") {
        exibirResultado("Pedido entregue!");
    } else {
        exibirResultado("Pedido ainda não entregue.");
    }
}