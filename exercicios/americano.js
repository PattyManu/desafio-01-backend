function solucao(numeros) {
 
 let soma = 0;
   for (let item of numeros){
       soma = soma + item;
   } while (soma > numeros.length){
      soma = soma - numeros.length
   }
   console.log(soma);
}
