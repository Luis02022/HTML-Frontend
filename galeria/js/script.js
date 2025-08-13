//dom
const x = document.querySelector('#x')
const btneymar = document.querySelector('#btneymar')
const btmessi = document.querySelector('#btmessi')
const btcr7 = document.querySelector('#btcr7')

//eventos
btneymar.addEventListener('click', neymar)
btmessi.addEventListener('click', messi)
btcr7.addEventListener('click', cr7)

//funções
function neymar(){
    x.src = 'images/Neymar.webp'
}

function messi(){
    x.src = 'images/Banner-_-Messi-Psicologia-no-Esporte-1024x576.webp'
}

function cr7(){
    x.src = 'images/cristianoronaldo.avif'
}