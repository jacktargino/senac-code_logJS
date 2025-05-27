// 1. forEach - Listar lanches do pedido
function mostrarLanches() {
    const texto = document.getElementById('input1').value;
    const lanches = texto.split(',');
    const lista = document.getElementById('lista1');
    
    lista.innerHTML = '';
    lanches.forEach(lanche => {
        const item = lanche.trim();
        if (item) {
            const li = document.createElement('li');
            li.textContent = item;
            lista.appendChild(li);
        }
    });
}

// 2. addEventListener - Confirmar pedido
document.getElementById('btn2').addEventListener('click', () => {
    document.getElementById('msg2').textContent = 'Pedido confirmado! Obrigado pela preferência.';
});

// 3. Evento - Mostrar posição do clique no botão
document.getElementById('btn3').addEventListener('click', (event) => {
    document.getElementById('msg3').textContent = `Você clicou na posição X: ${event.clientX}, Y: ${event.clientY}`;
});

// 4. dataset - Mostrar informações do lanche
document.getElementById('btn4').addEventListener('click', function () {
    const id = this.dataset.id;
    const nome = this.dataset.nome;
    const preco = this.dataset.preco;
    document.getElementById('msg4').textContent =
    `Lanche: ${nome} (ID: ${id}) - R$ ${preco} adicionado ao pedido.`;
});

// 5. localStorage - Salvar e mostrar nome do cliente
function salvarNome() {
    const nome = document.getElementById('input5').value;
    localStorage.setItem('nomeCliente', nome);
    document.getElementById('msg5').textContent = 'Nome salvo: ' + nome;
}
window.onload = function () {
    const nome = localStorage.getItem('nomeCliente');
    if (nome) {
        document.getElementById('msg5').textContent = 'Nome salvo antes: ' + nome;
        document.getElementById('input5').value = nome;
    }
};

// 6. JSON.parse - Converter texto JSON do pedido
function converterJSON() {
    const texto = document.getElementById('input6').value;
    try {
        const obj = JSON.parse(texto);
        const lanche = obj.lanche || '(sem lanche)';
        const qtd = obj.quantidade || '(sem quantidade)';
        document.getElementById('msg6').textContent = `Lanche: ${lanche}, Quantidade: ${qtd}`;
    } catch {
        document.getElementById('msg6').textContent = 'JSON inválido! Verifique o formato.';
    }
}

// 7. getItem - Buscar dado salvo no localStorage
function buscarItem() {
    const chave = document.getElementById('input7').value;
    const valor = localStorage.getItem(chave);
    document.getElementById('msg7').textContent = valor !== null ? `Valor encontrado: ${valor}` : 'Chave não encontrada';
}

// 8. appendChild - Adicionar pedido na lista
function adicionarLista() {
    const texto = document.getElementById('input8').value.trim();
    if (texto) {
        const ul = document.getElementById('lista8');
        const li = document.createElement('li');
        li.textContent = texto;
        ul.appendChild(li);
        document.getElementById('input8').value = '';
    }
}

// 9. toFixed - Formatar preço do lanche
function formatarPreco() {
    const valor = parseFloat(document.getElementById('input9').value);
    document.getElementById('msg9').textContent = isNaN(valor) ? 'Digite um preço válido' : 'R$ ' + valor.toFixed(2);
}

// 10. createElement - Criar nota para pedido
function criarNota() {
    const texto = document.getElementById('input10').value.trim();
    if (texto) {
        const p = document.createElement('p');
        p.textContent = 'Nota: ' + texto;
        document.getElementById('div10').appendChild(p);
        document.getElementById('input10').value = '';
    }
}

// 11. length - Contar quantidade de lanches no pedido
function contarLanches() {
    const texto = document.getElementById('input11').value;
    const array = texto.split(',').map(i => i.trim()).filter(i => i);
    document.getElementById('msg11').textContent = `Quantidade de lanches: ${array.length}`;
}

// 12. Date.now - Mostrar timestamp e data do pedido
function mostrarTimestamp() {
    const agora = Date.now();
    const data = new Date(agora).toLocaleString();
    document.getElementById('msg12').textContent = `Pedido feito em:\n${data}\n(Timestamp: ${agora})`;
}

// 13. push - Adicionar lanche ao pedido
const pedido = ['X-Burguer', 'Batata'];
// Inicializa com pedido atual para mostrar já na tela quando carregar
window.onload = function () {
    // Exibe nome salvo e pedido atual ao carregar
    const nome = localStorage.getItem('nomeCliente');
    if (nome) {
        document.getElementById('msg5').textContent = 'Nome salvo antes: ' + nome;
        document.getElementById('input5').value = nome;
    }
    document.getElementById('msg13').textContent = pedido.join(', ');
};
function adicionarPush() {
    const item = document.getElementById('input13').value.trim();
    if (item) {
        pedido.push(item);
        document.getElementById('msg13').textContent = pedido.join(', ');
        document.getElementById('input13').value = '';
    }
}

// 14. toLocaleString - Mostrar data atual formatada
function mostrarData() {
    document.getElementById('msg14').textContent = new Date().toLocaleString();
}

// 15. JSON.stringify - Converter pedido em texto JSON
function converterStringify() {
    const texto = document.getElementById('input15').value;
    try {
        const obj = JSON.parse(texto);
        const json = JSON.stringify(obj, null, 2);
        document.getElementById('msg15').textContent = json;
    } catch {
        document.getElementById('msg15').textContent = 'Objeto inválido! Verifique o formato.';
    }
}

// 16. style.display - Mostrar ou esconder detalhes do pedido
function toggleDisplay() {
    const div = document.getElementById('div16');
    div.style.display = div.style.display === 'none' ? 'block' : 'none';
}


// 17. Função para limpar todo o localStorage
function limparStorageGeral() {
    localStorage.clear();
    alert('Todo o localStorage foi limpo!');
}

// 18. Função para limpar uma chave específica do localStorage
function limparChaveEspecifica(chave) {
    if (localStorage.getItem(chave) !== null) {
        localStorage.removeItem(chave);
        alert(`A chave "${chave}" foi removida do localStorage.`);
    } else {
        alert(`A chave "${chave}" não existe no localStorage.`);
    }
}
