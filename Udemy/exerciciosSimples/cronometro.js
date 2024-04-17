
const stopwatch = document.getElementById('relogio')
let segundos = 0
let minutos = 0 
let horas = 0
let intervalo 

const digitZero = (digit) => { //colocando um 0 antes
    if (digit < 10){
        return `0${digit}`
    }else {
        return digit
    }
}

function init(){
    watch()
    intervalo = setInterval(watch, 1000)
}   //função p ser executada entre invervalos de tempo

function pause(){
    clearInterval(intervalo) //função p parar
}

function stop(){
    clearInterval(intervalo) //função p parar
    segundos = 0
    minutos = 0
    horas = 0
    stopwatch.innerHTML = "00:00:00"
}

function watch() {

    segundos ++
    
    if(segundos === 60){
        minutos ++ //incrementar
        segundos = 0
    }

    if(minutos === 60){
        minutos = 0
        horas ++
    }

    stopwatch.innerHTML = digitZero(horas) + ':' + digitZero(minutos) + ':' + digitZero(segundos)
}
