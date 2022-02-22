const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());

const movies = [
  {
    id: 1,
    title: "The Big Lebowski",
  },
  {
    id: 2,
    title: "Die Hard 4",
  },
  {
    id: 3,
    title: "Parasite",
  },
];

let CURRENT_ID = 3;

app.get("/movies", (req, res) => {
  res.send({ data: movies });
});

app.get("/movies/:id", (req, res) => {
  const foundMovie = movies.find((movie) => movie.id === Number(req.params.id));
  foundMovie ? res.send({ movie: foundMovie }) : res.sendStatus(404);
});

app.post("/movies", (req, res) => {
  const movieToBe = req.body;
  movies.push(movieToBe);
  movieToBe.id = ++CURRENT_ID;
  res.send({ data: movieToBe });
});

app.patch("/movies/:id", (req, res) => {
  const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
  const movieToUpdateWith = {...foundMovie, ...req.body, id: foundMovie.id};
  movies.foundMovie = movieToUpdateWith;
  res.send({data: movieToUpdateWith});
});

app.delete("/movies/:id", (req, res) => {
  const foundMovieIndex = movies.findIndex(
    (movie) => movie.id === Number(req.params.id)
  );
  if (foundMovieIndex !== -1) {
    movies.splice(foundMovieIndex, 1);
    res.send({});
  } else {
    res.status(404).send({});
  }
});

app.listen(port, () => {
  console.log("Server is running on port: ", port);
});
