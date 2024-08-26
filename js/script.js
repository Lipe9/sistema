document.addEventListener('DOMContentLoaded', () => {
    const formCadastro = document.getElementById('form-cadastro');
    const listaProdutos = document.getElementById('lista-produtos');
    const produtoIdInput = document.getElementById('produto-id');

    // Função para atualizar a lista de produtos
    function atualizarListaProdutos() {
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        listaProdutos.innerHTML = '';

        produtos.forEach((produto, index) => {
            const produtoDiv = document.createElement('div');
            produtoDiv.classList.add('produto');
            produtoDiv.innerHTML = `
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <p>Preço: R$${produto.preco.toFixed(2)}</p>
                <button class="editar" data-index="${index}">Editar</button>
                <button class="remover" data-index="${index}">Remover</button>
            `;
            listaProdutos.appendChild(produtoDiv);
        });
    }

    // Função para salvar um produto
    function salvarProduto(produto) {
        const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
        if (produto.id !== undefined) {
            produtos[produto.id] = produto;
        } else {
            produtos.push(produto);
        }
        localStorage.setItem('produtos', JSON.stringify(produtos));
    }

    // Função para lidar com o envio do formulário
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault();

        const produto = {
            nome: document.getElementById('nome-produto').value,
            descricao: document.getElementById('descricao-produto').value,
            preco: parseFloat(document.getElementById('preco-produto').value),
            id: produtoIdInput.value ? parseInt(produtoIdInput.value) : undefined
        };

        salvarProduto(produto);
        atualizarListaProdutos();
        formCadastro.reset();
        produtoIdInput.value = '';
    });

    // Função para lidar com a edição e remoção de produtos
    listaProdutos.addEventListener('click', (e) => {
        if (e.target.classList.contains('editar')) {
            const index = e.target.dataset.index;
            const produtos = JSON.parse(localStorage.getItem('produtos'));
            const produto = produtos[index];

            document.getElementById('nome-produto').value = produto.nome;
            document.getElementById('descricao-produto').value = produto.descricao;
            document.getElementById('preco-produto').value = produto.preco;
            produtoIdInput.value = index;
        } else if (e.target.classList.contains('remover')) {
            const index = e.target.dataset.index;
            const produtos = JSON.parse(localStorage.getItem('produtos'));

            produtos.splice(index, 1);
            localStorage.setItem('produtos', JSON.stringify(produtos));
            atualizarListaProdutos();
        }
    });

    // Inicializar a lista de produtos
    atualizarListaProdutos();
});
