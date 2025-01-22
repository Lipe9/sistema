// Código JS para menu mobile
const menuHamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".menu ul");

menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("open");
});
