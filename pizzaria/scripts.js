const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const addButtons = document.querySelectorAll('.add-button');
const cartButton = document.querySelector('#cart');
const cartCount = document.querySelector('.cart-count');
const cartTotal = document.querySelector('.cart-total');
const toast = document.querySelector('.toast');

let totalItems = 0;
let totalPrice = 0;
let toastTimeout;

const currency = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
});

function showToast(mensagem) {
    toast.textContent = mensagem;
    toast.classList.add('is-visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('is-visible');
    }, 2400);
}

function updateCart() {
    cartCount.textContent = totalItems;
    cartTotal.textContent = currency.format(totalPrice);
    cartButton.setAttribute('aria-label', `Ver pedido: ${totalItems} item(ns), ${currency.format(totalPrice)}`);
}

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
});

addButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = Number(button.dataset.price);

        totalItems += 1;
        totalPrice += price;
        updateCart();
        showToast(`${name} adicionado ao pedido`);
    });
});

cartButton.addEventListener('click', () => {
    if (totalItems === 0) {
        showToast('Seu pedido ainda está vazio');
        return;
    }

    showToast(`${totalItems} item(ns) no pedido · ${currency.format(totalPrice)}`);
});

updateCart();
        