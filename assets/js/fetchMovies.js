function catalogo() {
    const categoria = document.querySelector('#categoria').value;
    const nombre = document.querySelector('#txt_nombre').value.trim();
    let url;

    if (nombre) {
        url = `https://api.themoviedb.org/3/search/movie?api_key=199ab42380cb68d51fb1edc059257f62&language=es-PE&query=${nombre}&page=${page}`;
    } else {
        url = `https://api.themoviedb.org/3/movie/${categoria}?api_key=199ab42380cb68d51fb1edc059257f62&language=es-PE&page=${page}`;
    }

    fetch(url)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            document.querySelector('#peliculas').innerHTML = data.results.map(movie => `
                <article>
                    <h4>${movie.title}</h4>
                    <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt="${movie.title}">
                    <h5>${movie.release_date}</h5>
                </article>
            `).join("");
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
