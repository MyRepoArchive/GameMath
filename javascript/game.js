var sttDificuldadeMenu = false
function dificuldadeMenu() {
    if(sttDificuldadeMenu == false) {
        document.querySelector('#escolhaDificuldadeMenu').style.display = 'block'
        document.querySelector('#seta').style.transform = 'rotate(90deg)'
        sttDificuldadeMenu = true
    } else {
        document.querySelector('#escolhaDificuldadeMenu').style.display = 'none'
        document.querySelector('#seta').style.transform = 'rotate(0deg)'
        sttDificuldadeMenu = false
    }
}