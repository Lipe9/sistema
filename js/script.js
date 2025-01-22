let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    showNotification(`${productName} foi adicionado ao carrinho!`);
    console.log("Carrinho:", cart);
}

function showNotification(message) {
    const notification = document.getElementById('cart-notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}
