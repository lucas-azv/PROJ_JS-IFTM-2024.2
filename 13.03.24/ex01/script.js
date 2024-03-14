window.addEventListener('load', () => {
    button = document.getElementById("btn")
    button.addEventListener("click", () => {
        // 1a forma de requisição assincrona

        // var xhttp = new XMLHttpRequest();
        // xhttp.onreadystatechange = () => {
        //     if (xhttp.readyState == 4 && xhttp.status == 200) {
        //         document.getElementById("text").innerHTML = xhttp.responseText
        //     }
        // }
        // xhttp.open("GET", "bd.txt", true)
        // xhttp.send();

        // 2a forma de requisição assincrona
        // fetch('file.json')
        // .then(Response => Response.json)
        // .then(conteudo =>{
        //     document.getElementById("text").innerHTML = conteudo.nome
        // })

        fetch('usuarios.json')
        .then(response => response.json())
            .then(conteudo => {
                conteudo.usuarios.forEach(
                    usuario => document.getElementById("text").innerHTML += `<p>${usuario.nome}`
                )
            })
    })
})
