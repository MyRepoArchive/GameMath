var sttMenu = false
function menu() {
    if(sttMenu == false) {
        document.querySelector('aside#menu').style.display = 'block'
        document.querySelector('#niveis').style.transition = '100ms'
        document.querySelector('#niveis').style.transform = 'rotate(180deg)'
        sttMenu = true
    } else {
        document.querySelector('aside#menu').style.display = 'none'
        document.querySelector('#niveis').style.transform = 'rotate(90deg)'
        sttMenu = false
    }
}
if(window.innerWidth < 550) {
    document.querySelector('#nomeSite').style.fontSize = '22px'
    document.querySelector('#nomeSite').style.marginLeft = '-40px'
    document.querySelector('#nomeSite').style.marginTop = '12px'
}

function mudarTema(tema) {
    if(tema == 'white') {
        document.querySelector('#estilo').href = 'css/estilo.css'
        document.querySelector('#estiloRegras').href = 'css/regras.css'
    } else {
        document.querySelector('#estilo').href = 'css/estiloDark.css'
        document.querySelector('#estiloRegras').href = 'css/regrasDark.css'
    }
}