const dias = document.getElementById('dia')
const horas = document.getElementById('hora')
const minutos = document.getElementById('min')
const segundos = document.getElementById('seg')

const contar = `01 dec 2023`

function regressiva(){
    const dataRegressive = new Date(contar)
    const hoje = new Date()

    const segTotal = (dataRegressive - hoje)/1000

    const finalDiass = Math.floor(segTotal/60/60/24)
    const finalHorass = Math.floor(segTotal/60/60)%24
    const finalMinutoss = Math.floor(segTotal/60)%60
    const finalSegundoss = Math.floor(segTotal)%60

    dias.innerHTML = formaTempo(finalDiass)
    horas.innerHTML = formaTempo(finalHorass)
    minutos.innerHTML = formaTempo(finalMinutoss)
    segundos.innerHTML = formaTempo(finalSegundoss)
}

function formaTempo(tempo){
    return tempo<10? `0${tempo}` : tempo
}

regressiva();
setInterval(regressiva,1000)