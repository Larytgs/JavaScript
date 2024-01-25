function verificar(){
    var data = new Date()
    var ano = data.getFullYear() // ano atual com 4 dígitos 
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    var foto = document.getElementById('imagem')

    if (fano.value.length == 0 || fano.value > ano) { //se o ano ficar zerada ou ser maior q o atual..
        window.alert('[ERRO] Verificar os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value) //calcular aidade
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade = 0 && idade <= 3){
                //bb
                foto.src = ("fotos/bbmenino.png")
            } else if (idade <= 10){
                //criança
                foto.src = ("fotos/criançamenino.png")
            } else if (idade <= 18){
                //jovem
                foto.src = ("fotos/jovemhomem.png")
            } else if (idade <= 55){
                //adulto
                foto.src = ("fotos/adultohomem.png")
            } else {
                //idoso
                foto.src = ("fotos/idoso.png")
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3){
                //bb
                foto.src = ("fotos/bbmenina.png")
            } else if (idade <= 10){
                //criança
                foto.src = ("fotos/criançamenina.png")
            } else if (idade <= 18){
                //jovem
                foto.src = ("fotos/jovemmulher.png")
            } else if (idade <= 55){
                //adulto
                foto.src = ("fotos/adultamulher.png")
            } else {
                //idoso
                foto.src = ("fotos/idosa.png")
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado ${genero} com ${idade} anos.`
        res.appendChild(foto)
    } 
    
}