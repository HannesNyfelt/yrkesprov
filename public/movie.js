const movieId = window.location.pathname.split("/")[2]
const movieBox = document.querySelector("#movie")


writeMovies()

async function writeMovies() {
    const response = await fetch(`/api/movies/${movieId}`)
    const movie = await response.json()

    const str = JSON.stringify(movie.length / 60 / 60);
    const strFirstThree = str.substring(0, 3);

    movieBox.innerHTML = `
        <div id="movieInfo">
            <div>
                <div id="movieTitle">
                    <span>${movie.title}</span>
                </div>
                <img src="/images/${movie.image}" id="movieImage">
                <div id="movieDateAge">
                    <span>${movie.releaseDate.split("-")[0]}</span>
                    <span>${strFirstThree}H </span>
                    <span>${movie.age}</span>
                </div>
            </div>
            <div id="descriptionSquare">
                
                <span>Beskrivning</span>
                
                <div id="description">
                    <p>${movie.description}</p>
                </div>
            </div>
        </div>
    `
}