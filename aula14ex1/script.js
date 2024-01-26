
function contagem() { //para contar, coloquei no html

    var msg = window.document.getElementById('msg')
    var com = window.document.getElementById('começo')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passos')

    /*while (com <= fim){
        console.log(`${com} ->`)
        com + pas
    }*/
    msg = com + fim
    msg.innerHTML('msg')
}