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
var respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
if(respostaRandom1 == penultimoNum + ultimoNum || respostaRandom1 == respostaRandom) {
    respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
var respostaRandom2 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
if(respostaRandom2 == penultimoNum + ultimoNum || respostaRandom2 == respostaRandom || respostaRandom2 == respostaRandom1) {
    respostaRandom2 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
var respostaRandom3 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
if(respostaRandom3 == penultimoNum + ultimoNum || respostaRandom3 == respostaRandom || respostaRandom3 == respostaRandom1 || respostaRandom3 == respostaRandom2) {
    respostaRandom3 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
var alturaPag = window.innerHeight
var crono = false
var sec = 0
function contador() {
    if(crono == false) {
        document.querySelector('#cronometro').innerHTML = '0'+sec
        sec ++
    }
}
function comecar() {
    document.querySelector('#botaoIniciar').innerHTML = penultimoNum
    document.getElementById('0').innerHTML = ultimoNum
    iniciarCronometro()
    criarDivCertoErrado()
    document.getElementById('0').onclick = ''
}
function criarDivCertoErrado() {
    if(posicaoRandom < 2) {
        criarDiv('certo')
        criarDiv('errado')
        criarDiv('errado1')
        criarDiv('errado2')
        criarDiv('errado3')
    } else if(posicaoRandom < 4) {
        criarDiv('errado')
        criarDiv('certo')
        criarDiv('errado1')
        criarDiv('errado2')
        criarDiv('errado3')
    } else if(posicaoRandom < 6) {
        criarDiv('errado')
        criarDiv('errado1')
        criarDiv('certo')
        criarDiv('errado2')
        criarDiv('errado3')
    } else if(posicaoRandom < 8) {
        criarDiv('errado')
        criarDiv('errado1')
        criarDiv('errado2')
        criarDiv('certo')
        criarDiv('errado3')
    } else {
        criarDiv('errado')
        criarDiv('errado1')
        criarDiv('errado2')
        criarDiv('errado3')
        criarDiv('certo')
    }
    mudarValores()
    alturaPag = window.innerHeight
    window.scrollTo(0, alturaPag + 1000000000000000)
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
    respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    if(respostaRandom1 == penultimoNum + ultimoNum || respostaRandom1 == respostaRandom) {
        respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    }
    respostaRandom2 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    if(respostaRandom2 == penultimoNum + ultimoNum || respostaRandom2 == respostaRandom || respostaRandom2 == respostaRandom1) {
        respostaRandom2 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    }
    respostaRandom3 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    if(respostaRandom3 == penultimoNum + ultimoNum || respostaRandom3 == respostaRandom || respostaRandom3 == respostaRandom1 || respostaRandom3 == respostaRandom2) {
        respostaRandom3 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
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
        if(posicaoRandom > 8) {
            document.querySelector('#conteudo').appendChild(document.createElement('br'))
        }
        penultimoNumR = Number(document.getElementById(`${counterIdDivCerto-1}`).innerHTML)
        document.getElementById(`${counterIdDivCerto}`).innerHTML = penultimoNum + ultimoNum
        console.log(penultimoNum)
        console.log(ultimoNum)
        ultimoNumR = Number(document.getElementById(`${counterIdDivCerto}`).innerHTML)
        document.getElementById(`${counterIdDivCerto-1}`).removeEventListener("click", criarDivCertoErrado)
        document.getElementById(`${counterIdDivCerto-1}`).removeEventListener("click", mudarValores)
        document.getElementById(`${counterIdDivCerto-1}`).style.background = 'green'
        counterIdDivCerto++
        
    } else if(arg == 'errado'){
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        document.getElementById(`${counterIdDivErrado}`).innerHTML = respostaRandom
        counterIdDivErrado--
    } else if(arg == 'errado1'){
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado-0.3
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        document.getElementById(`${counterIdDivErrado-0.3}`).innerHTML = respostaRandom1
        counterIdDivErrado--
    } else if(arg == 'errado2'){
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado-0.6
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        document.getElementById(`${counterIdDivErrado-0.6}`).innerHTML = respostaRandom2
        counterIdDivErrado--
    } else {
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado-0.9
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        if(posicaoRandom < 8) {
            document.querySelector('#conteudo').appendChild(document.createElement('br'))
        }
        document.getElementById(`${counterIdDivErrado-0.9}`).innerHTML = respostaRandom3
        counterIdDivErrado--
    }
}
function iniciarCronometro() {
    inicioGame = Date.now()
    
    setInterval(contador, 1000);
}
function iniciarGame() {
    document.getElementById('0').style.display = 'inline-block'
    document.getElementById('0').style.padding = '15px'
    document.getElementById('0').style.background = 'green'
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
    crono = true
    document.querySelector('#cronometro').innerHTML = '0'+parseInt((fimGame - inicioGame)/1000)
    document.querySelector('#gameOver').style.display = 'block'
    document.querySelector('#gameOver p').innerHTML += ((fimGame - inicioGame)/1000).toFixed(1) +'s<br>'
    document.querySelector('#gameOver p').innerHTML += `Fez ${counterIdDivCerto} pontos<br>`
    document.querySelector('#gameOver p').innerHTML += `Sua taxa de pontos por minuto foi: ${(counterIdDivCerto / ((fimGame - inicioGame)/60000)).toFixed(2)}<sup>p</sup>/<sub>m</sub>`
    
}
document.querySelector('#corpo').style.borderColor = 'red'
