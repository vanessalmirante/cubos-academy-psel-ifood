function solucao(precos) {
    let total = 0;
    let maior200 = 0;
        for(let i=0; i<precos.length; i++){ 
            if(precos[i]>200){maior200++;}
            total+=precos[i];
        }
    if((total>1000) && (maior200>0)){console.log("PREMIUM");}
    else if((total>1000) && (maior200==0)){console.log("VIP");}
    else{console.log("NORMAL");}
}