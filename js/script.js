let carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaItens = document.getElementById('itens-carrinho');
    const totalElement = document.getElementById('total');
    listaItens.innerHTML = '';
    
    total = 0;

    carrinho.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        listaItens.appendChild(li);
        total += item.preco;
    });

    totalElement.textContent = `R$${total.toFixed(2)}`;
}
