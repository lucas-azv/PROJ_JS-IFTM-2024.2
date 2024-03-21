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
        filmes.forEach(filme => {
            var boxFilme = document.createElement("div");
            var tituloFilme = document.createElement("p");
            var poster = document.createElement("img");
            var url = "https://image.tmdb.org/t/p/w500";
            poster.setAttribute("src",`${url}${filme.backdrop_path}`);
            tituloFilme.textContent = filme.original_title;
            boxFilme.appendChild(tituloFilme);
            document.getElementById("box-filmes").appendChild(boxFilme);
        });
    }
})