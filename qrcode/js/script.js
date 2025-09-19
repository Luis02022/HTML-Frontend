// DOM
const url = document.querySelector('#url')
const botao = document.querySelector('#botao')
const qr = document.querySelector('#qrcode')

//Evento 
botao.addEventListener('click', gerador)
url.addEventListener('keydow', (event)=>{
    if(event.key == 'Enter'){
        gerador()
    }
})

// Função
function gerador(){
    texto = url.value
    if(texto){
        qr.innerHTML = ''
        code = new QRCode(qr, {
            text: texto,
            width: 400,
            height: 400,
            colorDark: 'rgba(255, 255, 255, 1)',
            colorLight: 'black'
        }
        )
    
    }else{
        qr.innerHTML = ''
    }
}