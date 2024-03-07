window.addEventListener('load',function(){
    
    var vet = [10,20,30,40]
    
    somaVetor = vet.reduce((resultado, valorAtual) => resultado += valorAtual, 50);
    console.log(somaVetor)
})

// ex. 1
// vet.forEach(elemento => console.log(elemento));

// ex.2
// vet.forEach(exibirDuploTriplo = x => ((x%2==0)?console.log(x*2):console.log(x*3)))

// ex.3
// vet.forEach((elemento, indice) => console.log(`${indice} - ${elemento}`));

// ex.4
// vetNovo = vet.map(x => x*2)    
//     console.log(vetNovo)

// ex.5
// vetNovo = vet.filter(elemento => (elemento%2 == 0))
//     console.log(vetNovo)

// ex.6
// console.log(vet.some(elemento => elemento>=14))

// ex.7
// console.log(vet.every(elemento => elemento>=14))