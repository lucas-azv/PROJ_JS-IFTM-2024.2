document.getElementById("cep").addEventListener("blur", () => {
    var cep = document.getElementById("cep").value;

    if(cep.length == 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json)
        .then(conteudo => {
            document.getElementById("rua").value = conteudo.logradouro;
            document.getElementById("cidade").value = conteudo.localidade;
        })
    } else{
        alert("MORRAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRGGGGGGGHHHHHHHHH")
    }
})