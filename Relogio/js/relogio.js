//DOM
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos') 
const segundos = document.querySelector('#segundos')

//Evento
setInterval(relogio, 1000)

//Funções
function relogio(){
    hoje = new Date()

    hr = hoje.getHours()
    min = hoje.getMinutes()
    sec = hoje.getSeconds()

    
    hr = hr <10 ? '0' + hr: hr;
    min = min <10 ? '0' + min: min;
    sec = sec <10 ? '0' + sec: sec;


    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec

}
