window.addEventListener('load', () => {
    fetch('alunos.json')
        .then(response => response.json())
        .then(conteudo => {
            vetAlunos = conteudo.alunos;
        });

    const selectElement = document.getElementById('escolha');
    const resultadoElement = document.getElementById('resultado');

    selectElement.addEventListener('change', function() {
        const escolha = selectElement.value;
        switch (escolha) {
            case 'todos':
                mostrarTodos(vetAlunos);
                break;
            case 'homens':
                mostrarPorSexo(vetAlunos, 'M');
                break;
            case 'mulheres':
                mostrarPorSexo(vetAlunos, 'F');
                break;
            case 'aprovados':
                mostrarAprovados(vetAlunos);
                break;
            case 'reprovados':
                mostrarReprovados(vetAlunos);
                break;
            case 'aprovados_todos':
                mostrarTodosAprovados(vetAlunos);
                break;
            case 'media':
                mostrarMediaTurma(vetAlunos);
                break;
            default:
                resultadoElement.innerHTML = '';
                break;
        }
    });

    function mostrarTodos(alunos) {
        resultadoElement.innerHTML = '';
        alunos.forEach(aluno => {
            resultadoElement.innerHTML += `<p>Nome: ${aluno.nome}, Nota Bim 1: ${aluno.notaBim1}, Nota Bim 2: ${aluno.notaBim2}, Sexo: ${aluno.sexo}</p>`;
        });
    }

    function mostrarPorSexo(alunos, sexo) {
        resultadoElement.innerHTML = '';
        const filteredAlunos = alunos.filter(aluno => aluno.sexo === sexo);
        filteredAlunos.forEach(aluno => {
            resultadoElement.innerHTML += `<p>Nome: ${aluno.nome}, Nota Bim 1: ${aluno.notaBim1}, Nota Bim 2: ${aluno.notaBim2}, Sexo: ${aluno.sexo}</p>`;
        });
    }

    function mostrarAprovados(alunos) {
        resultadoElement.innerHTML = '';
        const aprovados = alunos.filter(aluno => aluno.notaBim1 + aluno.notaBim2 >= 60);
        aprovados.forEach(aluno => {
            resultadoElement.innerHTML += `<p>Nome: ${aluno.nome}, Nota 1o Bimestre: ${aluno.notaBim1}, Nota 2o Bimestre: ${aluno.notaBim2}, Total: ${aluno.notaBim1 + aluno.notaBim2}</p>`;
        });
    }

    function mostrarReprovados(alunos) {
        resultadoElement.innerHTML = '';
        const reprovados = alunos.filter(aluno => aluno.notaBim1 + aluno.notaBim2 < 60);
        reprovados.forEach(aluno => {
            resultadoElement.innerHTML += `<p>Nome: ${aluno.nome}, Nota 1o Bimestre: ${aluno.notaBim1}, Nota 2o Bimestre: ${aluno.notaBim2}, Total: ${aluno.notaBim1 + aluno.notaBim2}</p>`;
        });
    }

    function mostrarTodosAprovados(alunos) {
        const todosAprovados = alunos.every(aluno => (aluno.notaBim1 + aluno.notaBim2) / 2 >= 60);
        resultadoElement.innerHTML = `<p>Todos aprovados: ${todosAprovados}</p>`;
    }

    function mostrarMediaTurma(alunos) {
        const media = alunos.reduce((acc, aluno) => acc + aluno.notaBim1 + aluno.notaBim2, 0) / alunos.length;
        resultadoElement.innerHTML = `<p>Média da Turma: ${media}</p>`;
    }
});
