function solucao(texto) {

   let palavras = texto.trim().split(' ');
   let contador = 0;
   
    for (let vazio of palavras) {
        if (vazio) {
            contador++;
        }
    } console.log(contador); 
}