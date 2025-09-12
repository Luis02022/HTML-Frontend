// DOM 
const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const calcular = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')


// Evento 
calcular.addEventListener('click', calculo)

// Função
function calculo(){
    let valor_distancia = Number(distancia.value);
    let valor_consumo = Number(consumo.value);
    let valor_preco = Number(preco.value);

    let valor_total = (valor_distancia/valor_consumo)*valor_preco;

    resultado.textContent = `O valor total da viagem será: R$ ${valor_total.toFixed(2)}`
}
