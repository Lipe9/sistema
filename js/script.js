// Seleciona os elementos do menu e do menu hambúrguer
const menuHamburguer = document.querySelector(".menu-hamburguer");
const menu = document.querySelector(".menu");

// Adiciona o evento de clique
menuHamburguer.addEventListener("click", () => {
    menu.classList.toggle("open"); // Abre/fecha o menu
    menuHamburguer.classList.toggle("open"); // Anima o hambúrguer para "X"
});
