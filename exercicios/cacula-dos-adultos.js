function solucao(lista) {
   
  let menorIdade = Infinity;
     for (let i=0; i < lista.length; i++){      
        if (lista[i] >= 18 && menorIdade > lista[i]){            
            menorIdade = lista[i];  
             }
    } 
     
        if (menorIdade != Infinity){
            console.log(menorIdade);
        } else {
            console.log("CRESCA E APARECA");     
        } 
  } 