
function contagem() { //para contar, coloquei no html

    var msg = window.document.getElementById('msg')
    var com = window.document.getElementById('começo')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passos')

    /*while (com <= fim){
        console.log(`${com} ->`)
        com + pas
    }*/
    
    
    if (com = '', pas = '', fim = '' || 0){
        window.alert('Impossivel Contar!')
    } else if (pas = 0){
        window.alert('Passo invalido, considerado PASSO 1')
        pas = 1
    }
    msg.innerHTML = `oi${com}`
} 
    