function processData(input) {

    let grandao = input.slice(0, 1).toLowerCase() + input.slice(1).toUpperCase();
    let maiuscu = input.toUpperCase();
    let formatado = "";
    if (input === grandao){
        let priLetra = input.slice(0, 1).toUpperCase()
        let resto = input.slice(1).toLowerCase()
        formatado = priLetra + resto
        console.log(formatado.trim())
    } else if (input === maiuscu){
        formatado = input.toLowerCase()
        console.log(formatado)
    } else {
       console.log(input.trim())}
} 
