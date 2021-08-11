function solucao(cor1, cor2) {
    if((cor1=="azul" && cor2=="amarelo")||(cor2=="azul" && cor1=="amarelo")){console.log("verde")}
    else if((cor1=="azul" && cor2=="vermelho")||(cor2=="azul" && cor1=="vermelho")){console.log("roxo")}
    else if((cor1=="amarelo" && cor2=="vermelho")||(cor2=="amarelo" && cor1=="vermelho")){console.log("laranja")}
    else if(cor1==cor2 && cor1== "azul"){console.log("azul")}
    else if(cor1===cor2 && cor1=="amarelo"){console.log("amarelo")}
    else if(cor1==cor2 && cor1=="vermelho"){console.log("vermelho")}
}