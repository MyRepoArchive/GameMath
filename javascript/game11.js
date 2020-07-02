var inicioGame = false
var fimGame = false
var sttComecar = false
var penultimoNum = parseInt(gerarRandom())
var ultimoNum = parseInt(gerarRandom())
var ultimoNumR = ultimoNum
var posicaoRandom = Math.random() * 10
var maxRandom = penultimoNum + ultimoNum + Math.random() * 15
var minRandom = penultimoNum + ultimoNum - Math.random() * 15
var counterIdDivCerto = 0
var counterIdDivErrado = -1
var respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
if(respostaRandom == penultimoNum + ultimoNum) {
    respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
function comecar() {
    document.querySelector('#botaoIniciar').innerHTML = penultimoNum
    document.querySelector('#segundoNumero').innerHTML = ultimoNum
    iniciarCronometro()
    criarDivCertoErrado()
    
}
function criarDivCertoErrado() {
    if(posicaoRandom < 5) {
        criarDiv('certo')
        criarDiv('errado')
    } else {
        criarDiv('errado')
        criarDiv('certo')
    }
    mudarValores()
}
function mudarValores() {
    posicaoRandom = Math.random() * 10
    penultimoNum = ultimoNumR - penultimoNum
    ultimoNum = ultimoNumR
    maxRandom = penultimoNum + ultimoNum + Math.random() * 15
    minRandom = penultimoNum + ultimoNum - Math.random() * 15
    respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    if(respostaRandom == penultimoNum + ultimoNum) {
        respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    }
}
function criarDiv(arg) {
    if(arg == 'certo') {
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivCerto
        createDiv.className = 'alternativa'
        createDiv.addEventListener("click", criarDivCertoErrado)
        createDiv.addEventListener("click", mudarValores)
        document.querySelector('#conteudo').appendChild(createDiv)
        if(posicaoRandom > 5) {
            document.querySelector('#conteudo').appendChild(document.createElement('br'))
        }
        document.getElementById(`${counterIdDivCerto}`).innerHTML = penultimoNum + ultimoNum
        document.getElementById(`${counterIdDivCerto}`).style.background = 'rgba(0,0,0,0.7)'
        console.log(penultimoNum)
        console.log(ultimoNum)
        ultimoNumR = Number(document.getElementById(`${counterIdDivCerto}`).innerHTML)
        
        counterIdDivCerto++
        
    } else {
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado
        createDiv.className = 'alternativa'
        createDiv.addEventListener("click", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        if(posicaoRandom < 5) {
            document.querySelector('#conteudo').appendChild(document.createElement('br'))
        }
        document.getElementById(`${counterIdDivErrado}`).innerHTML = respostaRandom
        counterIdDivErrado--
    }
}
function iniciarCronometro() {
    inicioGame = Date.now()
}
function iniciarGame() {
    document.querySelector('#segundoNumero').innerHTML = ' '
    document.querySelector('#segundoNumero').style.display = 'inline-block'
}
function gerarRandom() {
    return Math.random() * 10 * (Math.random() * 10)
}
function pararJogo() {
    fimGame = Date.now()
    document.querySelector('#gameOver').style.display = 'block'
    document.querySelector('#gameOver p').innerHTML += (fimGame - inicioGame)/1000 +'s'
}
