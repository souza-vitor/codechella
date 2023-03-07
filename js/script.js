const accordionItem = document.querySelectorAll('.accordion__item--question');
console.log("hi");

accordionItem.forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('active');
        item.nextElementSibling.classList.toggle('active');
    });
});