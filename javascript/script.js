var sttMenu = false
function menu() {
    if(sttMenu == false) {
        document.querySelector('aside#menu').style.display = 'block'
        document.querySelector('#niveis').style.transform = 'rotate(180deg)'
        sttMenu = true
    } else {
        document.querySelector('aside#menu').style.display = 'none'
        document.querySelector('#niveis').style.transform = 'rotate(90deg)'
        document.querySelector('#escolhaDificuldadeMenu').style.display = 'none'
        document.querySelector('#seta').style.transform = 'rotate(0deg)'
        sttDificuldadeMenu = false
        sttMenu = false
    }
}