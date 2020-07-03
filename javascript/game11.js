var inicioGame = false
var fimGame = false
var sttComecar = false
var penultimoNum = parseInt(gerarRandom())
var penultimoNumR = penultimoNum
var ultimoNum = parseInt(gerarRandom())
var ultimoNumR = ultimoNum
var posicaoRandom = Math.random() * 10
var maxRandom = penultimoNum + ultimoNum + Math.random() * 15
var minRandom = penultimoNum + ultimoNum - Math.random() * 15
var counterIdDivCerto = 1
var counterIdDivErrado = -1
var respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
if(respostaRandom == penultimoNum + ultimoNum) {
    respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
function comecar() {
    document.querySelector('#botaoIniciar').innerHTML = penultimoNum
    document.getElementById('0').innerHTML = ultimoNum
    iniciarCronometro()
    criarDivCertoErrado()
    document.getElementById('0').onclick = ''
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
    penultimoNum = penultimoNumR
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
        penultimoNumR = Number(document.getElementById(`${counterIdDivCerto-1}`).innerHTML)
        document.getElementById(`${counterIdDivCerto}`).innerHTML = penultimoNum + ultimoNum
        console.log(penultimoNum)
        console.log(ultimoNum)
        ultimoNumR = Number(document.getElementById(`${counterIdDivCerto}`).innerHTML)
        document.getElementById(`${counterIdDivCerto-1}`).removeEventListener("click", criarDivCertoErrado)
        document.getElementById(`${counterIdDivCerto-1}`).removeEventListener("click", mudarValores)
        document.getElementById(`${counterIdDivCerto-1}`).style.background = 'rgb(64,64,64)'
        counterIdDivCerto++
        
    } else {
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
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
    var sec = 0
    setInterval(() => {
        document.querySelector('#cronometro').innerHTML = sec
        sec ++
    }, 1000);
}
function iniciarGame() {
    document.getElementById('0').style.display = 'inline-block'
    document.getElementById('0').style.padding = '15px'
    document.getElementById('0').style.background = 'rgb(0, 202, 0)'
    document.getElementById('0').style.boxShadow = '0px 0px 10px green'
    document.getElementById('0').style.borderRadius = '5px'
    document.getElementById('0').style.margin = '5px'
    document.getElementById('0').style.fontFamily = 'Arial, Helvetica, sans-serif'
    document.querySelector('#botaoIniciar').onclick = ' '
}
function gerarRandom() {
    return Math.random() * 10 * (Math.random() * 10)
}
function pararJogo() {
    fimGame = Date.now()
    document.querySelector('#gameOver').style.display = 'block'
    document.querySelector('#gameOver p').innerHTML += (fimGame - inicioGame)/1000 +'s'
}
