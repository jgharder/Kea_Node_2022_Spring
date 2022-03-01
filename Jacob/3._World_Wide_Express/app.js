const express = require("express");
const app = express();
const port = process.env.PORT || 6000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/weather", (req, res) => {
  res.sendFile(__dirname + "/public/weather.html");
});

app.listen(port, () => {
  console.log("Server running on port: ", port);
});

console.log(process.env.PORT)