<?php
$produtos = [
    1 => ['nome' => 'Batom Matte', 'preco' => '29.90', 'descricao' => 'Batom com acabamento matte e alta duração.', 'imagem' => 'produto1.jpg'],
    2 => ['nome' => 'Sombra Compacta', 'preco' => '49.90', 'descricao' => 'Sombra com alta pigmentação.', 'imagem' => 'produto2.jpg'],
    3 => ['nome' => 'Máscara para Cílios', 'preco' => '39.90', 'descricao' => 'Máscara que proporciona volume extremo.', 'imagem' => 'produto3.jpg']
];

$id = $_GET['id'];
$produto = $produtos[$id];
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $produto['nome']; ?></title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <header>
        <nav>
            <a href="produtos.html">Voltar</a>
        </nav>
    </header>
    <main>
        <div class="produto-detalhe">
            <img src="assets/img/<?php echo $produto['imagem']; ?>" alt="<?php echo $produto['nome']; ?>">
            <h1><?php echo $produto['nome']; ?></h1>
            <p><?php echo $produto['descricao']; ?></p>
            <p>Preço: R$ <?php echo $produto['preco']; ?></p>
            <button>Adicionar ao Carrinho</button>
        </div>
    </main>
</body>
</html>
