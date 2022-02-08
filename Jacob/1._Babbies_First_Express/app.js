const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
  res.send({ message: "Hi there, Stranger" });
});

app.get("/about", (req, res) => {
    res.send({ message: "This is a place for Movies" });
  });



app.post("/", (req, res) => {
    res.send(req.body);
});

app.post("/opinion", (req, res) => {
    res.send(req.body);
});

app.listen(8080);
