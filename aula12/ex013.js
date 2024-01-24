var agora = new Date //para mostrar as hora
var hora = agora.getHours() //extada q estiver executando
console.log(`Agora sao ${hora} horas`)
if (hora < 12){
    console.log("Bom diaaa")
}else if (hora <= 17){
    console.log("Boa tardee")
}else{
    console.log("Boa noiteee")
}