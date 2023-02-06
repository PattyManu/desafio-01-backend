function solucao(precos) {
    
    let soma = 0;
     
  for (let valor of precos){
      soma += valor;
    }  
         if (precos.length >= 3){
            let minimo = precos[0];
            for (let item of precos){
             if (item < minimo){
                   minimo = item;
                   }
                } 
            console.log(soma - (minimo/ 2));  
             } else {
               console.log(soma);
               }
  }