window.addEventListener("load", () => {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzNjZmJhZGFlYmI5NGRhZTM0MTkzMzc0YjM1NGQ4OCIsInN1YiI6IjY1ZmI3ZjZjMGJjNTI5MDE2MmFlNTg0NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Yye8QS0RGUfeEx3lTGFf04IpftGOHBXiSAfhFdfDnfY",
        },
    };

    var language = "pt-br";

    fetch(
        `https://api.themoviedb.org/3/movie/popular?language=${language}&page=1`,
        options
    )
        .then((response) => response.json())
        .then((filmes) => {
            fetch(`https://api.themoviedb.org/3/genre/movie/list?${language}`, options)
                .then((response) => response.json())
                .then((genres) => {
                    filmes.results.slice(0, 10).forEach((filme) => {
                        var boxFilme = document.createElement("div");
                        boxFilme.id = "box-filme";

                        var boxGeneros = document.createElement("div");
                        boxGeneros.id = "box-generos";
                        var boxGenero = document.createElement("div");
                        boxGenero.classList.add("genero");

                        var tituloFilme = document.createElement("p");
                        var poster = document.createElement("img");
                        var nota = document.createElement("p");
                        var sinopse = document.createElement("p");

                        var url = "https://image.tmdb.org/t/p/w500";

                        var info = document.createElement("div");
                        info.id = "info";

                        tituloFilme.id = "tituloFilme";
                        nota.id = "nota";

                        poster.setAttribute("src", `${url}${filme.poster_path}`);

                        tituloFilme.textContent = filme.original_title;
                        nota.textContent = `⭐ ${filme.vote_average.toFixed(1)}`;
                        sinopse.textContent = filme.overview;

                        // Encontrar os gêneros do filme e exibir
                        var filmeGenres = filme.genre_ids.map(genreId => genres.genres.find(genre => genre.id === genreId).name).join(", ");
                        var generos = document.createElement("p");
                        generos.textContent = filmeGenres;

                        boxFilme.appendChild(poster);

                        document.getElementById("box-filmes").appendChild(boxFilme);

                        info.appendChild(tituloFilme);
                        info.appendChild(nota);
                        info.appendChild(sinopse);
                        info.appendChild(boxGeneros);

                        boxFilme.appendChild(info);
                        boxGenero.appendChild(generos);
                        boxGeneros.appendChild(boxGenero);
                    });
                })
                .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
});
