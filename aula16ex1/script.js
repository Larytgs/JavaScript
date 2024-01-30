
function adicionar(){

    var num = document.getElementById('fnum')
    var tab = document.getElementById('seltab')

    tab.appendChild(`Valor ${num} adicionado.`)

    if (num.value.length == 0 & num > 100 & num == '' & num == num) {
        window.alert("Valor invalido, ou ja encontrado na lista.")
    }
}
    
function finalizar(){

    var num = document.getElementById('txtn')
    console.log(`Temos ${num.length} elementos cadastrados`)
    console.log(`Deixando em ordem crescente ${num.sort}`)

    console.log(`O maior valor adicionado foi ${max}`)
    console.log(`O menor numero adicionado foi ${min}`)
    console.log(`Somando todos os valors, temos ${soma}`)
    console.log(`A media do valores é ${media}`)
}