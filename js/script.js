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
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    document.getElementById('form-cadastro').addEventListener('submit', cadastrarProduto);
});

let carrinho = [];
let total = 0;
let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

function cadastrarProduto(event) {
    event.preventDefault();
    const nome = document.getElementById('nome-produto').value;
    const preco = parseFloat(document.getElementById('preco-produto').value);

    if (nome && !isNaN(preco) && preco > 0) {
        produtos.push({ nome, preco });
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
}

function removerProduto(index) {
    produtos.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(produtos));
    carregarProdutos();
}

function editarProduto(index) {
    const novoNome = prompt("Digite o novo nome do produto:", produtos[index].nome);
    const novoPreco = parseFloat(prompt("Digite o novo preço do produto:", produtos[index].preco));

    if (novoNome && !isNaN(novoPreco) && novoPreco > 0) {
        produtos[index] = { nome: novoNome, preco: novoPreco };
        localStorage.setItem('produtos', JSON.stringify(produtos));
        carregarProdutos();
    }
}

