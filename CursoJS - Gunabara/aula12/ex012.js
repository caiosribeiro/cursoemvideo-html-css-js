var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 6 && hora < 12){
    console.log(`Periodo da manhã`)
    console.log('Bom Dia!')
} else if (hora >= 12 && hora < 18){
    console.log(`Periodo da tarde`)
    console.log('Boa Tarde!')
} else if (hora >= 18 && hora < 24){
    console.log(`Periodo da noite`)
    console.log('Boa Noite!')
} else if (hora == 24 || hora < 6 ){
    console.log(`Periodo da madrugada`)
    console.log('Boa Madrugada!')
} else {
    console.log('Não existe um período para essa hora')
}