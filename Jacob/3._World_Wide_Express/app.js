const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("<h1> Welcome to World Wide Weather</>");
});

app.get("/weather", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html");
});

app.listen(port, () => {
  console.log("Server running on port: ", port);
});
