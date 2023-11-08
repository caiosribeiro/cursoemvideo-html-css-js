var num = [5, 8, 2, 9, 3]
num.push(1) // Adicionar o número 1 na última fileira
num.sort() // Deixar os números em ordem crescente
console.log()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
var pos = num.indexOf(8)
if ( pos == -1){
console.log(`O valor 4 está na posição ${pos}`)
} else {
    console.log(`O valor está na posição ${pos}`)
}