function solucao(primeiraLetra, segundaLetra, palavras) {
    let cont=0;
    for(item of palavras){
        if((item[0]==primeiraLetra)&&(item[1]==segundaLetra)){console.log(item);cont++;}
    }
    if(cont==0){console.log("NENHUMA");}
}