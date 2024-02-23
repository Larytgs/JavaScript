
var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) { //q n foi encontrado na lista
        return true
    } else {
        return false
    }
}

function adicionar(){

    if (isNumero(num.value) && !inLista(num.value, valores)) { //analisando o numero, e se nao esta na lista (!)
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = '' //ficar vazio quando começar de novo
    } else{
        window.alert("Valor invalido, ou ja encontrado na lista.")
    }
    num.value = '' //ficar vazio logo em seguida
    num.focus() //deixar fixo para escrever o proximo nº
}
    
function finalizar(){
    if (valores.length == 0) {
        window.alert('Adiciona valores antes de finalizar.')
    } else{
        let total = valores.length
        let menor = valores[0]
        let maior = valores [0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma/total
        
        res.innerHTML = ''
        res.innerHTML += `Temos ${total} elementos cadastrados.`
        res.innerHTML += `<br>Deixando em ordem crescente ${valores.sort()}`
        res.innerHTML += `<br>O maior valor adicionado foi ${maior}`
        res.innerHTML += `<br>O menor numero adicionado foi ${menor}`
        res.innerHTML += `<br>Somando todos os valors, temos ${soma}`
        res.innerHTML += `<br>A media do valores é ${media}`
    }

    console.log()
    console.log()
}