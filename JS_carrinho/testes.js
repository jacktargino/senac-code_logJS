
function pegarCarrinho() {
    try {
        const carrinhoJSON = localStorage.getItem('carrinho');
        return carrinhoJSON ? JSON.parse(carrinhoJSON) : [];
    } catch (e) {
        console.error('Erro ao ler o carrinho do localStorage:', e);
        return [];
    }
}


function salvarCarrinho(carrinho) {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function atualizarCarrinho() {
    const carrinho = pegarCarrinho();
    let total = 0;
    let listaHTML = '<ul>';


    carrinho.forEach((item, index) => {
        total += item.preco * item.quantidade;

        listaHTML += `<li>
            ${item.nome} - R$ ${item.preco.toFixed(2).replace('.', ',')} (x${item.quantidade})
            <button onclick="decrementarItem(${index})" style="margin-left:10px; background-color:#d9534f; color:white; border:none; padding:3px 8px; border-radius:3px;">-</button>
        </li>`;
    });

    listaHTML += '</ul>';


    document.getElementById('itensCarrinho').innerHTML = carrinho.length ? listaHTML : 'Carrinho vazio.';


    document.getElementById('total').textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
}

function adicionarProduto(nome, preco) {
    const carrinho = pegarCarrinho();
    const existente = carrinho.find(item => item.nome === nome);

    if (existente) {
        existente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    salvarCarrinho(carrinho);
    atualizarCarrinho();
}

function decrementarItem(index) {
    const carrinho = pegarCarrinho();

    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade -= 1;
    } else {
        carrinho.splice(index, 1);
    }

    salvarCarrinho(carrinho);
    atualizarCarrinho();
}