
function tabuada() { //para carregar, coloquei no html

    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um numero!')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = '' //antes de mostrar a tabuada, limpe a tabela antes 
        while (c <= 10){
            var item = document.createElement('option') //criar um elemento de opçoes
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item) //adicionar os itens
            c++
        }
    }
    
}