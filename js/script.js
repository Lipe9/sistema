let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} foi adicionado ao carrinho!`);
    console.log("Carrinho:", cart);
}
