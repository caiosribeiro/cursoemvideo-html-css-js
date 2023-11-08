function contar(){
    var ini = document.getElementById("txtini")
    var fim = document.getElementById("txtfim")
    var passo = document.getElementById("txtpasso")
    var res = document.getElementById("res")
    /*
    for(ini; ini <= fim; ini++){
        passo = ini
        res.innerHTML = `${passo}`
        if ( passo == 0){
            alert("Passo inválido! Considerando PASSO 1")
            for(ini; ini <= fim; ini++){
                res.innerHTML = `${ini}`
            }            
        }
        if(ini == null || fim == null || passo == null){
            res.innerHTML = "Impossivel contar!"
        }
    } */
    while(ini < fim){
        ini += passo
        res.innerHTML = (ini) 
    }
    
}