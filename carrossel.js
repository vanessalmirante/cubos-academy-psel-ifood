function solucao(sequencia) {
    let indice = 0;
	for(let i=0; i<sequencia.length; i++){
      if(sequencia[i]==">" && indice+1<=6){indice++;}
      else if(sequencia[i]==">" && indice+1>6){indice=0;}
      else if(sequencia[i]=="<" && indice-1>=0){indice--;}
      else if(sequencia[i]=="<" && indice-1<0){indice=6;}
    }
    console.log(indice);
}