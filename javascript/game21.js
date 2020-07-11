var inicioGame = false
var fimGame = false
var penultimoNum = parseInt(gerarRandom())
var ultimoNum = parseInt(gerarRandom())
while(penultimoNum + ultimoNum == 0) {
    penultimoNum = parseInt(gerarRandom())
    ultimoNum = parseInt(gerarRandom())
}
var penultimoNumR = penultimoNum
var ultimoNumR = ultimoNum
var posicaoRandom = Math.random() * 10
var maxRandom = penultimoNum + ultimoNum + 15
var minRandom = penultimoNum + ultimoNum - 15
var counterIdDivCerto = 1
var counterIdDivErrado = -1
var counterIdDivErrado1 = -100
var respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
while(respostaRandom == penultimoNum + ultimoNum) {
    respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
var respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
while(respostaRandom1 == penultimoNum + ultimoNum || respostaRandom1 == respostaRandom) {
    respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
}
var alturaPag = window.innerHeight
var crono = false
var sec = 0
var multiPoints = 0
var cincos = false
var timeout = false
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
function comecarNovamente() {
    document.querySelector('#botaoIniciar').innerHTML = penultimoNum
    document.getElementById('0').innerHTML = ultimoNum
    criarDivCertoErrado()
    document.getElementById('0').onclick = ''
}
function criarDivCertoErrado() {
    pararCincos()
    cincoS()
    if(counterIdDivCerto <= 70) {
        if(posicaoRandom < 3.33) {
            criarDiv('certo')
            criarDiv('errado')
            criarDiv('errado1')
        } else if(posicaoRandom < 6.66) {
            criarDiv('errado')
            criarDiv('certo')
            criarDiv('errado1')
        } else {
            criarDiv('errado')
            criarDiv('errado1')
            criarDiv('certo')
        }
        mudarValores()
    } else {
        document.querySelector('#conteudo').innerHTML = `<h2 id="parabens">Parabéns, você chegou à 70 pontos, você recebeu mais 70 pontos!</h2><br><div id="botaoIniciar" onclick="iniciarGame()">Preparar, apontar...</div><br>
        <div id="0" onclick="comecarNovamente()" style="display: none">Fogo</div><br>`
        penultimoNum = parseInt(gerarRandom())
        ultimoNum = parseInt(gerarRandom())
        while(penultimoNum + ultimoNum == 0) {
            penultimoNum = parseInt(gerarRandom())
            ultimoNum = parseInt(gerarRandom())
        }
        penultimoNumR = penultimoNum
        ultimoNumR = ultimoNum
        posicaoRandom = Math.random() * 10
        maxRandom = penultimoNum + ultimoNum + 15
        minRandom = penultimoNum + ultimoNum - 15
        counterIdDivCerto = 1
        counterIdDivErrado = -1
        counterIdDivErrado1 = -100
        respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
        while(respostaRandom == penultimoNum + ultimoNum) {
            respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
        }
        respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
        while(respostaRandom1 == penultimoNum + ultimoNum || respostaRandom1 == respostaRandom) {
            respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
        }
        multiPoints ++
    }
    alturaPag = window.innerHeight
    window.scrollTo(0, alturaPag + 1000000000000000)
}
function mudarValores() {
    posicaoRandom = Math.random() * 10
    penultimoNum = penultimoNumR
    ultimoNum = ultimoNumR
    maxRandom = penultimoNum + ultimoNum + 30
    minRandom = penultimoNum + ultimoNum - 30
    respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    while(respostaRandom == penultimoNum + ultimoNum) {
        respostaRandom = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    }
    respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    while(respostaRandom1 == penultimoNum + ultimoNum || respostaRandom1 == respostaRandom) {
        respostaRandom1 = parseInt(Math.random() * (maxRandom - minRandom) + minRandom)
    }
}
function criarDiv(arg) {
    if(arg == 'certo') {
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivCerto
        createDiv.className = 'alternativa'
        createDiv.addEventListener("click", criarDivCertoErrado)
        document.querySelector('#conteudo').appendChild(createDiv)
        if(posicaoRandom >= 6.66) {
            document.querySelector('#conteudo').appendChild(document.createElement('br'))
            document.querySelector('#conteudo').appendChild(document.createElement('hr'))
        }
        penultimoNumR = Number(document.getElementById(`${counterIdDivCerto-1}`).innerHTML)
        document.getElementById(`${counterIdDivCerto}`).innerHTML = penultimoNum + ultimoNum
        ultimoNumR = Number(document.getElementById(`${counterIdDivCerto}`).innerHTML)
        document.getElementById(`${counterIdDivCerto-1}`).removeEventListener("click", criarDivCertoErrado)
        document.getElementById(`${counterIdDivCerto-1}`).removeEventListener("click", mudarValores)
        document.getElementById(`${counterIdDivCerto-1}`).style.background = 'green'
        if(counterIdDivCerto > 1) {
            document.getElementById(`${counterIdDivCerto-2}`).style.background = 'rgb(0, 81, 255)'
            document.getElementById(`${counterIdDivCerto-1}`).style.background = 'rgb(0, 81, 255)'
        }
        if(counterIdDivCerto > 2) {
            document.getElementById(`${counterIdDivCerto-3}`).style.background = 'green'
        }
        counterIdDivCerto++
        
    } else if(arg == 'errado'){
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        document.getElementById(`${counterIdDivErrado}`).innerHTML = respostaRandom
        if(counterIdDivErrado < -1) {
            document.getElementById(`${counterIdDivErrado+1}`).removeEventListener("mousedown", pararJogo)
        }
        counterIdDivErrado--
    } else {
        var createDiv = document.createElement('div')
        createDiv.id = counterIdDivErrado1
        createDiv.className = 'alternativa'
        createDiv.addEventListener("mousedown", pararJogo)
        document.querySelector('#conteudo').appendChild(createDiv)
        if(posicaoRandom < 6.66) {
            document.querySelector('#conteudo').appendChild(document.createElement('br'))
            document.querySelector('#conteudo').appendChild(document.createElement('hr'))
        }
        document.getElementById(`${counterIdDivErrado1}`).innerHTML = respostaRandom1
        if(counterIdDivErrado1 < -100) {
            document.getElementById(`${counterIdDivErrado1+1}`).removeEventListener("mousedown", pararJogo)
        }
        counterIdDivErrado1--
    }
}
function iniciarCronometro() {
    inicioGame = Date.now()
    setInterval(contador, 1000);
}

function cincoS() {
    cincos = 0
        timeout = setInterval(() => {
            if(cincos <= 10) {
                document.querySelector('#cincos').style.background = `repeating-linear-gradient(to left, rgba(0,0,0,0), rgba(0,0,0,0) ${cincos*10}%, orangered 1px, orangered 100%)`
                cincos++
            } else {
                pararJogo()
                clearInterval(timeout)
                cincos = false
            }
        }, 1000);
}
function pararCincos() {
    cincos = false
    clearInterval(timeout)
    document.querySelector('#cincos').style.background = `orangered`
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
    clearInterval(timeout)
    cincos = false
    fimGame = Date.now()
    crono = true
    document.querySelector('#cronometro').innerHTML = '0'+parseInt((fimGame - inicioGame)/1000)
    document.querySelector('#gameOver').style.display = 'block'
    document.querySelector('#gameOver p').innerHTML += ((fimGame - inicioGame)/1000).toFixed(1) +'s<br>'
    document.querySelector('#gameOver p').innerHTML += `Fez ${counterIdDivCerto+140*multiPoints} pontos<br>`
    document.querySelector('#gameOver p').innerHTML += `Sua taxa de pontos por minuto foi: ${((counterIdDivCerto+140*multiPoints) / ((fimGame - inicioGame)/60000)).toFixed(2)}<sup>p</sup>/<sub>m</sub>`
    
}
document.querySelector('#corpo').style.borderColor = 'rgb(255, 217, 0)'
