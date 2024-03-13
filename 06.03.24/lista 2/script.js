window.addEventListener('load', function () {

    var idades = [12, 8, 25, 54, 14, 18, 84, 22, 10]
    parseInt(idadeInput = prompt("insira uma idade qualquer"))

    somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
    document.write(`<p>A soma das idades é: ${somaIdades}</p>`);

    mediaIdades = somaIdades / idades.length;
    document.write(`<p>A média das idades é: ${parseFloat(mediaIdades)}</p>`);

    maiorIdade = idades.reduce((acc, idade) => Math.max(acc, idade), 0);
    document.write(`<p>A maior idade é: ${maiorIdade}</p>`);

    idadesImpares = idades.filter(idade => idade % 2 !== 0);
    document.write(`<p>As idades ímpares são: ${idadesImpares.join(', ')}</p>`);

    todosMaioresDeIdade = idades.every(idade => idade >= 18);
    document.write(`<p>Todos são maiores de idade? ${todosMaioresDeIdade}</p>`);

    todasMaioresIguaisValor = idades.every(idade => idade >= idadeInput);
    document.write(`<p>Todas as idades são maiores ou iguais a ${idadeInput}? ${todasMaioresIguaisValor}</p>`);

    idadesMaioresIguais = idades.filter(idade => idade >= idadeInput);
    document.write(`<p>As idades maiores ou iguais a ${idadeInput} são: ${idadesMaioresIguais.join(', ')}</p>`);

    mediaIdadesMaioresIguais = idadesMaioresIguais.reduce((acc, idade) => acc + idade, 0) / idadesMaioresIguais.length;
    document.write(`<p>A média das idades das pessoas com idade maior ou igual a ${idadeInput} é: ${mediaIdadesMaioresIguais}</p>`);

})