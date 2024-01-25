function carregar() { //paracarregar, coloquei no html(body)

    var msg = window.document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()  //data atual
    var hora = data.getHours() //hora atual

    msg.innerHTML = `Agora sao ${hora} horas.`
    if (hora >= 7 && hora < 12){
        img.src = 'manha.png'
    }else if (hora >= 12 && hora < 18){
        img.src = 'tarde.png'
    }else{
        img.src = 'noite.png'
    }
}