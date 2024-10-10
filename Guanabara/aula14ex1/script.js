
function contagem() { //para contar, coloquei no html

    var msg = window.document.getElementById('msg')
    var com = window.document.getElementById('começo')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passos')    
    
    if (com.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('[ERRO] Falta dados!')
    }  
      else {
        msg.innerHTML = `Contando:  <br>`
        var i = Number(com.value)
        var f = Number(fim.value) // convertendo para numero
        var p = Number(pas.value)
        
        if (p <= 0){
            window.alert('Passo invalido, considerado PASSO 1')
            p = 1
        }

        if (i < f){
            //contagem crescente
            for (var c = 1; c <= f; c += p) {
                msg.innerHTML += ` \u{1F449} ${c}`
            }
        } else {
            //contagem regressiva
            for (var c = 1; c >= f; c -= p){
                msg.innerHTML += `\u{1F449} ${c} `
            }
        }
        msg.innerHTML += ` \u{1F3C1}`
        
        
    }
    
} 
    