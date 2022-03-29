import express from "express";
const app = express();
const port =  process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/movies", (req, res) => {
  res.sendFile(__dirname +"/public/movies");
});

app.listen(port, () => {
  console.log("Running on server", port);
});
