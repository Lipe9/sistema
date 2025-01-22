let cart = [];

// Adicionar produto ao carrinho
function addToCart(productName, price) {
    cart.push({ productName, price });
    showNotification(`${productName} foi adicionado ao carrinho!`);
    console.log("Carrinho:", cart);
}

// Mostrar notificação
function showNotification(message) {
    const notification = document.getElementById('cart-notification');
    notification.textContent = message;
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Alternar menu mobile
function toggleMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('show');
}
