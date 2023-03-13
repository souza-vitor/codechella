gerarIngresso(sessionStorage.getItem('nome'), sessionStorage.getItem('setor'));


function gerarIngresso(nome, setor) {
    console.log("passou aqui");
    let nomeIngresso = document.querySelector('.confirm__body--texto--nome');
    let setorIngresso = document.querySelector('.confirm__body--texto--setor');
    nomeIngresso.innerHTML = nome;
    setorIngresso.innerHTML = `Setor ${setor}`;
}