document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    document.getElementById('form-cadastro').addEventListener('submit', cadastrarProduto);
    document.getElementById('valor-cliente').addEventListener('input', atualizarTroco);
});

let carrinho = [];
let total = 0;
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

function cadastrarProduto(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-produto').value;
    const descricao = document.getElementById('descricao-produto').value;
    const preco = parseFloat(document.getElementById('preco-produto').value);

    if (nome && descricao && !isNaN(preco) && preco > 0) {
        produtos.push({ nome, descricao, preco });
        localStorage.setItem('produtos', JSON.stringify(produtos));
        document.getElementById('form-cadastro').reset();
        carregarProdutos();
    }
}

function carregarProdutos() {
    const listaProdutos = document.getElementById('lista-produtos');
    listaProdutos.innerHTML = '';

    produtos.forEach((produto, index) => {
        const div = document.createElement('div');
        div.classList.add('produto');
        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>Descrição: ${produto.descricao}</p>
            <p>Preço: R$${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">Adicionar ao Carrinho</button>
            <button class="editar" onclick="editarProduto(${index})">Editar</button>
            <button class="remover" onclick="removerProduto(${index})">Remover</button>
        `;
        listaProdutos.appendChild(div);
    });
}

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
    atualizarTroco();  // Atualizar o troco quando o carrinho muda
}

function atualizarTroco() {
    const valorCliente = parseFloat(document.getElementById('valor-cliente').value) || 0;
    const trocoElement = document.getElementById('troco');

    if (valorCliente >= total) {
        const troco = valorCliente - total;
        trocoElement.textContent = `R$${troco.toFixed(2)}`;
    } else {
        trocoElement.textContent = `R$0,00`;
    }
}

function removerProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    carregarProdutos();
}

function editarProduto(index) {
    const novoNome = prompt("Digite o novo nome do produto:", produtos[index].nome);
    const novaDescricao = prompt("Digite a nova descrição do produto:", produtos[index].descricao);
    const novoPreco = parseFloat(prompt("Digite o novo preço do produto:", produtos[index].preco));

    if (novoNome && novaDescricao && !isNaN(novoPreco) && novoPreco > 0) {
        produtos[index] = { nome: novoNome, descricao: novaDescricao, preco: novoPreco };
        localStorage.setItem('produtos', JSON.stringify(produtos));
        carregarProdutos();
    }
}
