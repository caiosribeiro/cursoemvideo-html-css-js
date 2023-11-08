var array = []

function adicionar(){
var num = document.getElementById('num')
var txtarea = document.getElementById('txtarea')

if (num.value < 1 || num.value > 100 || num.value.length == 0 ){     
    alert('Número inválido')    
} else { 
    var n = Number(num.value)
    if(array.indexOf(n) === -1){
    array.push(n)
    num.focus()
    txtarea.innerHTML += `Número ${n} adicionado.  `
    res.innerHTML = ''
    } else{  

        alert('Número já existente')
    }
    }
}

Array.max = function(array){
    return Math.max.apply(Math, array)
}

Array.min = function(array){
    return Math.min.apply(Math, array)
}

function somar(soma){
    var soma = 0
    for (var i in array){
        soma += array[i]
    }
    return soma
}

function finalizar(){   
    if (array.length == 0 ){
        alert('Adicione valores antes de Finalizar')
    }else {
        var res = document.getElementById('res')
        res.innerHTML = ''
        res.innerHTML += (`Ao todo, temos ${array.length} números cadastrados. ` + '<br><br>')
        res.innerHTML += (`O maior valor informado foi ${Array.max(array)} ` + '<br><br>')
        res.innerHTML += (`O menor valor informado foi ${Array.min(array)} ` + '<br><br>')
        res.innerHTML += (`Somando todos os valores temos ${somar()}` + '<br><br>')
        res.innerHTML += (`A média dos valores digitados é ${somar()/array.length}`)        
    }
}

