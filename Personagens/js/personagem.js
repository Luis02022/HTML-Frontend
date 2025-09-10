const x = document.querySelector('#x')
const btgarou = document.querySelector('#btgarou')
const btzoro = document.querySelector('#btzoro')
const btescanor = document.querySelector('#btescanor')

btgarou.addEventListener('click', garou)
btzoro.addEventListener('click', zoro)
btescanor.addEventListener('click', escanor)


function garou(){
    x.src = 'images/Garou_portal2.webp'
}

function zoro(){
    x.src = 'images/one-piece-roronoa-zoro-swordsman-sword-katana-hd-wallpaper-preview.jpg'
}

function escanor(){
    x.src = 'images/937927.jpg'
}