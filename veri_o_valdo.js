function solucao(obras) {
    let maior=0;
    for(item of obras){
        if(item.valor>maior){maior=item.valor}
    }
    for(item of obras){
        if(item.valor===maior){console.log(item.nome)}
    }
}