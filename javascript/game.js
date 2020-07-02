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
var primeiroNumeroRandom = parseInt(Math.random() * 10 * (Math.random() * 10))
var segundoNumeroRandom = parseInt(Math.random() * 10 * (Math.random() * 10))
var posicaoRandom = Math.random() * 10
var minRandom = primeiroNumeroRandom + segundoNumeroRandom - Math.random() * 15
var respostaRandom = parseInt(Math.random() * ((primeiroNumeroRandom + segundoNumeroRandom + (Math.random() * 15)) - minRandom) + minRandom)
if(respostaRandom == primeiroNumeroRandom + segundoNumeroRandom) {
    respostaRandom = parseInt(Math.random() * ((primeiroNumeroRandom + segundoNumeroRandom + (Math.random() * 15)) - minRandom) + minRandom)
}
var divCerto = document.createElement('div')
var divErrado = document.createElement('div')
var tempo = 1
var ms = 0
var contCronometro = 0


document.querySelector('#botaoIniciar').innerHTML = primeiroNumeroRandom
function iniciarGame() {
    document.querySelector('#segundoNumero').innerHTML = ' '
    document.querySelector('.linhaVertical').style.display = 'block'
    document.querySelector('#segundoNumero').style.display = 'inline-block'
}
function ativarCronometro() {
    divCerto.innerHTML = primeiroNumeroRandom + segundoNumeroRandom
    divCerto.className = 'alternativa'
    divErrado.innerHTML = respostaRandom
    divErrado.className = 'alternativa'
    document.querySelector('#segundoNumero').innerHTML = segundoNumeroRandom
    setInterval(() => {
        if(ms < 3000) {
            document.querySelector('#cronometroLine').style.background = `repeating-linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0) ${tempo * 16.6}%, orangered 1px, orangered 100%)`
            tempo++
            ms += 500
        }
        contCronometro++
        if(ms >= 3000 && contCronometro < 7) {
            document.querySelector('#conteudo').innerHTML += 'Game Over'
        }
    }, 500);
    if(posicaoRandom < 5) {
        document.querySelector('#conteudo').appendChild(divCerto)
        document.querySelector('#conteudo').appendChild(divErrado)  
    } else {
        document.querySelector('#conteudo').appendChild(divErrado)
        document.querySelector('#conteudo').appendChild(divCerto)
    }
}



