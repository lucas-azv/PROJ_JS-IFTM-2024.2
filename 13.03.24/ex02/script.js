document.getElementById("cep").addEventListener("blur", () => {
    var cep = document.getElementById("cep").value;

    if(cep.length = 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
    } else{
        alert("MORRAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAARRRRRRRGGGGGGGHHHHHHHHH")
    }
})