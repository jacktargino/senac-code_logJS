// Array para armazenar os produtos cadastrados
let produtosCadastrados = [];

// Função para adicionar um novo produto à lista
function adicionarProduto() {
    const produto = document.getElementById("novoProduto").value; // Obtém o valor do input
    if (produto && !produtosCadastrados.includes(produto)) { // Verifica se o produto não está vazio e se não foi adicionado ainda
        produtosCadastrados.push(produto); // Adiciona o produto ao array
        document.getElementById("novoProduto").value = ''; // Limpa o campo de input
        alert("Produto cadastrado com sucesso!"); // Exibe uma mensagem de sucesso
    } else {
        alert("Produto inválido ou já cadastrado."); // Exibe uma mensagem caso o produto seja inválido ou já exista
    }
}

// Função para consultar e exibir os produtos cadastrados
function consultarProdutos() {
    const listaProdutos = produtosCadastrados.length > 0 ? produtosCadastrados.join(', ') : "Nenhum produto cadastrado ainda."; // Verifica se há produtos cadastrados
    document.getElementById("produtos").innerText = "Produtos cadastrados: " + listaProdutos; // Atualiza o texto com a lista de produtos
}

// Função para consultar um produto pelo número (índice)
function consultarProdutoPorNumero() {
    const numero = document.getElementById("numeroProduto").value; // Obtém o valor do número (índice) informado pelo usuário
    if (numero >= 0 && numero < produtosCadastrados.length) { // Verifica se o número é um índice válido
        document.getElementById("produtoEncontrado").innerText = `Produto encontrado: ${produtosCadastrados[numero]}`; // Exibe o produto encontrado
    } else {
        document.getElementById("produtoEncontrado").innerText = "Índice inválido ou fora do alcance."; // Exibe uma mensagem caso o índice não seja válido
    }
    document.getElementById("numeroProduto").value = ''; // Limpa o campo de input após a busca
}
