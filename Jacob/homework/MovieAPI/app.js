const express = require("express");
const app = express();
const port = 8080;
app.use(express.json());

const movies = [
  { id: 1, name: "How to train your dragon", duration: 114 },
  { id: 2, name: "How to train your dragon 2", duration: 127 },
  { id: 3, name: "How to train your dragon 3", duration: 111 },
];

app.get("/", (req, res) => {
  res.send({
    message:
      "this is a movie RESTApi, try /movie, to see the list of all movies",
  });
});

app.get("/movie", (req, res) => {
  res.send(movies);
});

app.get("/movie/:id", (req, res) => {
  res.send(movies[req.params.id - 1]);
});

app.post("/movie", (req, res) => {
  movies.push(req.body);
});

app.put("/movie/:id", (req, res) => {
  movies[req.params.id - 1] = req.body;
});

app.delete("/movie/:id", (req, res) => {
  movies.splice(req.params.id - 1, 1);
});

app.listen(port, (error)=>{
  console.log("Server is running on port:", port)
});
