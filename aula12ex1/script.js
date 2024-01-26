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
            if (idade >= 0 && idade <= 3){
                //bb
                foto.src = ("fotos/bbmenino.png")
                document.body.style.background = '#0CAAB5'
            } else if (idade <= 10){
                //criança
                foto.src = ("fotos/criançamenino.png")
                document.body.style.background = '#3A5877'
            } else if (idade <= 18){
                //jovem
                foto.src = ("fotos/jovemhomem.png")
                document.body.style.background = '#7E5142'
            } else if (idade <= 35){
                //adulto
                foto.src = ("fotos/adultojovemhomem.png")
                document.body.style.background = '#00558B'
            } else if (idade <= 55){
                //adulto
                foto.src = ("fotos/adultohomem.png")
                document.body.style.background = '#DDDAB3'
            } else {
                //idoso
                foto.src = ("fotos/idoso.png")
                document.body.style.background = '#282829'
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3){ 
                //bb
                foto.src = ("fotos/bbmenina.png")
                document.body.style.background = '#c48c96'
            } else if (idade <= 10){
                //criança
                foto.src = ("fotos/criançamenina.png")
                document.body.style.background = '#AA5535'
            } else if (idade <= 18){
                //jovem
                foto.src = ("fotos/jovemmulher.png")
                document.body.style.background = '#DC4852'
            } else if (idade <= 35){
                //adulto
                foto.src = ("fotos/adultojovemmulher.png")
                document.body.style.background = '#3C1D20'
            }  else if (idade <= 55){
                //adulto
                foto.src = ("fotos/adultamulher.png")
                document.body.style.background = '#BCB7AE'
            } else {
                //idoso
                foto.src = ("fotos/idosa.png")
                document.body.style.background = '#C8BAA1'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Foi detectado ${genero} com ${idade} anos.`
        res.appendChild(foto) //adicionar depois uma foto
    } 
    
}