var sttDificuldadeMenu = false
var sttTipoCalcMenu = false
function dificuldadeMenu() {
    if(sttDificuldadeMenu == false) {
        document.querySelector('#escolhaDificuldadeMenu').style.display = 'block'
        document.querySelector('#seta').style.transition = '100ms'
        document.querySelector('#seta').style.transform = 'rotate(90deg)'
        sttDificuldadeMenu = true
    } else {
        document.querySelector('#escolhaDificuldadeMenu').style.display = 'none'
        document.querySelector('#seta').style.transform = 'rotate(0deg)'
        sttDificuldadeMenu = false
    }
}

function tipoCalcMenu() {
    if(sttTipoCalcMenu == false) {
        document.querySelector('#tipoCalcMenu').style.display = 'block'
        document.querySelector('#seta2').style.transition = '100ms'
        document.querySelector('#seta2').style.transform = 'rotate(90deg)'
        sttTipoCalcMenu = true
    } else {
        document.querySelector('#tipoCalcMenu').style.display = 'none'
        document.querySelector('#seta2').style.transform = 'rotate(0deg)'
        sttTipoCalcMenu = false
    }
}

function mudarTema(tema) {
    if(tema == 'white') {
        document.querySelector('#estilo').href = 'css/estilo.css'
        document.querySelector('#estiloGame').href = 'css/game.css'
    } else {
        document.querySelector('#estilo').href = 'css/estiloDark.css'
        document.querySelector('#estiloGame').href = 'css/gameDark.css'
    }
}