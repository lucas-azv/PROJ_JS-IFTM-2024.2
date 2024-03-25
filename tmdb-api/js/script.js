window.addEventListener('load', () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzNjZmJhZGFlYmI5NGRhZTM0MTkzMzc0YjM1NGQ4OCIsInN1YiI6IjY1ZmI3ZjZjMGJjNTI5MDE2MmFlNTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yye8QS0RGUfeEx3lTGFf04IpftGOHBXiSAfhFdfDnfY'
        }
    };

    var language = 'pt-br'

    fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=1`, options)
        .then(response => response.json())
        .then(filmes => exibir(filmes.results))
        .catch(err => console.error(err));

    function exibir(filmes) {
        filmes.slice(0,10).forEach(filme => {
            var boxFilme = document.createElement("div");
            var tituloFilme = document.createElement("p");
            var poster = document.createElement("img");
            var nota = document.createElement("p")
            var url = "https://image.tmdb.org/t/p/w500";

            tituloFilme.id = "tituloFilme"

            poster.setAttribute("src", `${url}${filme.poster_path}`);

            tituloFilme.textContent = filme.original_title;
            nota.textContent = (`⭐${filme.vote_average}`);

            boxFilme.appendChild(poster);
            boxFilme.appendChild(tituloFilme);
            boxFilme.appendChild(nota);

            
            document.getElementById("box-filmes").appendChild(boxFilme);
        });
    }
})