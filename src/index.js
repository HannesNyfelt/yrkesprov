const express = require('express');
const path = require('path');
const movies = require('./data/movies.json');

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(path.join('public')));

app.get('/api/movies', (req, res) => {
  res.status(200).json(movies.map(movie => ({
    id: movie.id,
    title: movie.title,
    age: movie.age,
    genres: movie.genres,
    releaseDate: movie.releaseDate,
    rating: movie.rating
  })));
});

app.get("/api/movies/year", (req, res) => {
  res.status(200).json(movies.map(movie => ({
    year: movie.releaseDate
  })))
})

app.get("/api/movies/genres", (req, res) => {
  res.status(200).json(movies.map(movie => ({
    genres: movie.genres
  })))
})


app.get("/movie/:id", (req, res) => {
  res.status(200).sendFile(path.resolve("public/movie.html"))
})

app.get("/api/movies/:id", (req, res) => {
  const data = movies.find((movie => movie.id == req.params.id))
  res.status(200).json(data)

})

app.listen(port, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(`Server is running at http://localhost:${port}`);
});
