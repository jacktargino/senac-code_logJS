// Recupera o carrinho salvo no localStorage, ou retorna um array vazio se não existir
function pegarCarrinho() {
    const carrinhoJSON = localStorage.getItem('carrinho'); // Tenta obter a string JSON do carrinho
    return carrinhoJSON ? JSON.parse(carrinhoJSON) : [];   // Se existir, converte para array; senão, retorna []
}

// Salva o carrinho no localStorage como uma string JSON
function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho)); // Converte array para string e salva com a chave 'carrinho'
}

// Atualiza a exibição dos itens do carrinho na tela, e o valor total
function atualizarCarrinho() {
    const carrinho = pegarCarrinho(); // Obtém o carrinho atual
    let total = 0;                    // Variável acumuladora do valor total
    let listaHTML = '<ul>';          // Começa a construir a lista de itens em HTML

    // Para cada item no carrinho:
    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade; // Soma o valor total (preço × quantidade)
        
        // Adiciona o item à lista HTML com um botão para remover 1 unidade
        listaHTML += `<li>
            ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')} (x${item.quantidade})
            <button onclick="decrementarItem(${index})" style="margin-left:10px; background-color:#d9534f; color:white; border:none; padding:3px 8px; border-radius:3px;">-</button>
        </li>`;
    });

    listaHTML += '</ul>'; // Fecha a lista

    // Mostra os itens do carrinho na div específica
    document.getElementById('itensCarrinho').innerHTML = carrinho.length ? listaHTML : 'Carrinho vazio.';

    // Atualiza o valor total na tela
    document.getElementById('total').textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
}

// Adiciona um produto ao carrinho, ou aumenta sua quantidade se já existir
function adicionarProduto(nome, preco) {
    const carrinho = pegarCarrinho();                            // Pega o carrinho atual
    const existente = carrinho.find(item => item.nome === nome); // Verifica se o produto já existe

    if (existente) {
        existente.quantidade += 1; // Se já existe, apenas aumenta a quantidade
    } else {
        carrinho.push({ nome, preco, quantidade: 1 }); // Se não existe, adiciona novo com quantidade 1
    }

    salvarCarrinho(carrinho);   // Salva o carrinho atualizado
    atualizarCarrinho();        // Atualiza a tela
}

// Decrementa 1 unidade de um item ou remove-o se a quantidade for 1
function decrementarItem(index) {
    const carrinho = pegarCarrinho(); // Obtém o carrinho

    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1; // Se ainda tiver mais de 1, apenas reduz
    } else {
        carrinho.splice(index, 1);       // Se só tem 1, remove o item completamente
    }

    salvarCarrinho(carrinho);  // Salva o carrinho atualizado
    atualizarCarrinho();       // Atualiza a tela
}

// Limpa completamente o carrinho
function limparCarrinho() {
    localStorage.removeItem('carrinho'); // Remove a chave 'carrinho' do localStorage
    atualizarCarrinho();                 // Atualiza a tela (vai exibir carrinho vazio)
}

// Executa a função de atualização assim que a página carregar
window.onload = atualizarCarrinho;
