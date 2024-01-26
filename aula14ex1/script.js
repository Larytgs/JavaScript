
function carregar() { //para carregar, coloquei no html(body)

    var msg = window.document.getElementById('msg')
    var foto = document.getElementById('imagem')
    var data = new Date()  //data atual
    var hora = data.getHours() //hora atual
    

    if (hora >= 7 && hora < 12){
        msg.innerText = `Bom dia! Agora sao ${hora} horas.`
        img.src= ("fotos/manha.png")
        document.body.style.background = '#FEDC5A'
    } else if (hora >= 12 && hora <= 18){
        msg.innerHTML = `Boa tarde! Agora sao ${hora} horas.`
        foto.innerHTML= '<img src="fotos/tarde.png">'
        document.body.style.background = '#f59629'
    } else{
        msg.innerHTML = `Boa noite! Agora sao ${hora} horas.`
        foto.innerHTML= '<img src="fotos/noite.png">'
        document.body.style.background = '#1e4c5c'
    }
}