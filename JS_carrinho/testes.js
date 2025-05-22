function pegarCarrinho() {

    const carrinhoJSON = localStorage.getItem('carrinho');
    return carrinhoJSON ? JSON.parse(carrinhoJSON) : [];

}

function salvarCarrinho(carrinho) {

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

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