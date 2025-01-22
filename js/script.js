let cart = [];
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
    const hamburger = document.querySelector('.hamburger');
    mobileMenu.classList.toggle('show');
    hamburger.classList.toggle('active');
}
