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
        document.querySelector('#tipoCalculo').style.transition = '100ms'
        document.querySelector('#tipoCalculo').style.transform = 'rotate(180deg)'
        sttTipoCalcMenu = true
    } else {
        document.querySelector('#tipoCalcMenu').style.display = 'none'
        document.querySelector('#tipoCalculo').style.transform = 'rotate(0deg)'
        sttTipoCalcMenu = false
    }
}