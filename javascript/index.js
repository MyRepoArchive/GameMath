var sttCalc = false
var sttDif = false
function select(div) {
    if(div == 'facil') {
        if(sttDif == false) {
            document.querySelector('#selDifFacil').style.background = 'rgb(0, 105, 0)'
            document.querySelector('#selDifFacil').style.borderColor = 'black' 
            sttDif = 1
        } else if(sttDif == 1){
            document.querySelector('#selDifFacil').style.background = 'rgb(0, 187, 0)'
            document.querySelector('#selDifFacil').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#linkButtonIr').href = ' '
            document.querySelector('#selCalcAdicao').style.background = 'grey'
            document.querySelector('#selCalcAdicao').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcPotencia').style.background = 'grey'
            document.querySelector('#selCalcPotencia').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcMultiplicacao').style.background = 'grey'
            document.querySelector('#selCalcMultiplicacao').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcDivisao').style.background = 'grey'
            document.querySelector('#selCalcDivisao').style.borderColor = 'rgba(0,0,0,0)'
            sttCalc = false
            sttDif = false
        }
    }
    if(div == 'medio') {
        if(sttDif == false) {
            document.querySelector('#selDifMedio').style.background = 'rgb(190, 162, 0)'
            document.querySelector('#selDifMedio').style.borderColor = 'black'
            sttDif = 2
        } else if(sttDif == 2){
            document.querySelector('#selDifMedio').style.background = 'rgb(255, 217, 0)'
            document.querySelector('#selDifMedio').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#linkButtonIr').href = ' '
            document.querySelector('#selCalcAdicao').style.background = 'grey'
            document.querySelector('#selCalcAdicao').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcPotencia').style.background = 'grey'
            document.querySelector('#selCalcPotencia').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcMultiplicacao').style.background = 'grey'
            document.querySelector('#selCalcMultiplicacao').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcDivisao').style.background = 'grey'
            document.querySelector('#selCalcDivisao').style.borderColor = 'rgba(0,0,0,0)'
            sttCalc = false
            sttDif = false
        }
    }
    if(div == 'dificil') {
        if(sttDif == false) {
            document.querySelector('#selDifDificil').style.background = 'rgb(202, 0, 0)'
            document.querySelector('#selDifDificil').style.borderColor = 'black'
            sttDif = 3
        } else if(sttDif == 3){
            document.querySelector('#selDifDificil').style.background = 'red'
            document.querySelector('#selDifDificil').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#linkButtonIr').href = ' '
            document.querySelector('#selCalcAdicao').style.background = 'grey'
            document.querySelector('#selCalcAdicao').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcPotencia').style.background = 'grey'
            document.querySelector('#selCalcPotencia').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcMultiplicacao').style.background = 'grey'
            document.querySelector('#selCalcMultiplicacao').style.borderColor = 'rgba(0,0,0,0)'
            document.querySelector('#selCalcDivisao').style.background = 'grey'
            document.querySelector('#selCalcDivisao').style.borderColor = 'rgba(0,0,0,0)'
            sttCalc = false
            sttDif = false
        }
    }


    if(sttDif == false) {

    } else {
        if(div == 'adicao') {
            if(sttCalc == false) {
                document.querySelector('#selCalcAdicao').style.background = 'rgb(36, 39, 48)'
                document.querySelector('#selCalcAdicao').style.borderColor = 'black'
                sttCalc = 1
                document.querySelector('#linkButtonIr').href = 'html/game' + `${sttDif}` + sttCalc + '.html'
            } else if(sttCalc == 1) {
                document.querySelector('#selCalcAdicao').style.background = 'grey'
                document.querySelector('#selCalcAdicao').style.borderColor = 'rgba(0,0,0,0)'
                document.querySelector('#linkButtonIr').href = ' '
                sttCalc = false
            }
        }
        if(div == 'potencia') {
            if(sttCalc == false) {
                document.querySelector('#selCalcPotencia').style.background = 'rgb(36, 39, 48)'
                document.querySelector('#selCalcPotencia').style.borderColor = 'black'
                sttCalc = 2
                document.querySelector('#linkButtonIr').href = 'html/game' + `${sttDif}` + sttCalc + '.html'
            } else if(sttCalc == 2) {
                document.querySelector('#selCalcPotencia').style.background = 'grey'
                document.querySelector('#selCalcPotencia').style.borderColor = 'rgba(0,0,0,0)'
                document.querySelector('#linkButtonIr').href = ' '
                sttCalc = false
            }
        }
        if(div == 'multiplicacao') {
            if(sttCalc == false) {
                document.querySelector('#selCalcMultiplicacao').style.background = 'rgb(36, 39, 48)'
                document.querySelector('#selCalcMultiplicacao').style.borderColor = 'black'
                sttCalc = 3
                document.querySelector('#linkButtonIr').href = 'html/game' + `${sttDif}` + sttCalc + '.html'
            } else if(sttCalc == 3) {
                document.querySelector('#selCalcMultiplicacao').style.background = 'grey'
                document.querySelector('#selCalcMultiplicacao').style.borderColor = 'rgba(0,0,0,0)'
                document.querySelector('#linkButtonIr').href = ' '
                sttCalc = false
            }
        }
        if(div == 'divisao') {
            if(sttCalc == false) {
                document.querySelector('#selCalcDivisao').style.background = 'rgb(36, 39, 48)'
                document.querySelector('#selCalcDivisao').style.borderColor = 'black'
                sttCalc = 4
                document.querySelector('#linkButtonIr').href = 'html/game' + `${sttDif}` + sttCalc + '.html'
            } else if(sttCalc == 4) {
                document.querySelector('#selCalcDivisao').style.background = 'grey'
                document.querySelector('#selCalcDivisao').style.borderColor = 'rgba(0,0,0,0)'
                document.querySelector('#linkButtonIr').href = ' '
                sttCalc = false
            }
        }
    }
}    
function mudarTema(tema) {
    if(tema == 'white') {
        document.querySelector('#estilo').href = 'css/estilo.css'
        document.querySelector('#estiloIndex').href = 'css/index.css'
        window.localStorage.setItem('tema', '');
    } else {
        document.querySelector('#estiloIndex').href = 'css/indexDark.css'
        document.querySelector('#estilo').href = 'css/estiloDark.css'
        window.localStorage.setItem('tema', 'Dark');
    }
}

const temar = window.localStorage.getItem('tema') || '';
document.querySelector('#estilo').href = `css/estilo${temar}.css`
document.querySelector('#estiloIndex').href = `css/index${temar}.css`