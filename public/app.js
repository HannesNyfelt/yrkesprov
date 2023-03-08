const movieBox = document.querySelector("#movieBox")


fetchMovies()

async function fetchMovies() {
    const response = await fetch("/api/movies")
    const data = await response.json()


    data.map(movie => movieBox.innerHTML += `
    <div class="movie" onclick="showClickedMovie('${movie.id}')">
        <img src="/images/${movie.image}" class="homeImages">
            <span class="movieTitle">${movie.title}</span>
            <span class="movieAge">${movie.age}</span>
    </div>
    `).join("")
}

function showClickedMovie(id) {
    //location.replace(`/api/movies/${id}`)
    location.replace(`/movie/${id}`)
}