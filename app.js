'use strict'

function mudarFundo (){
    const nomeCor = document.getElementById('seletor').value.toUpperCase()
    let cor

    if(nomeCor == 'AMARELO')
        cor = 'ffff00'
    else if(nomeCor == 'VERMELHO')
        cor = 'ff0000'
    else if(nomeCor == 'AZUL')
        cor = '0000ff'
    else if(nomeCor  == 'VERDE')
        cor = '00ff00'

    document.documentElement.style.setProperty('--bg-color', `#${cor}`)
}        

document.getElementById('seletor').addEventListener('change', mudarFundo)