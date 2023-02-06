function solucao(jogadores) {

      let zero = []
      let um = []
     for (let jogador of jogadores){
          if (jogador.jogada === 1){
                 um.push(jogador)
             }else if (jogador.jogada === 0){
                   zero.push(jogador)
                }       
            }
        if (um.length === 1){
           console.log(um[0].nome)
         } else if (zero.length === 1){
        console.log(zero[0].nome)
         } else {
           console.log("NINGUEM")
         }
  }