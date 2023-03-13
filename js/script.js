const accordionItem = document.querySelectorAll('.accordion__item--question');
accordionItem.forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
    });
});


const btnComprar = document.querySelector('.btn-comprar');

btnComprar.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value;
    const setor = document.querySelector('#setor').value;

    sessionStorage.setItem('nome', nome);
    sessionStorage.setItem('setor', setor);

    window.location.href = 'confirmacao.html';
    console.log("passou aqui btnComprar");
});