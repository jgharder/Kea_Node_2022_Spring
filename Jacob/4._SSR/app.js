const express = require("express");
const app = express();
const fs = require("fs");


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/frontpage.html");
});

app.get("/cheesegallery", (req, res) => {
  res.sendFile(__dirname + "/public/cheesegallery/cheesegallery.html");
});

app.listen(3000, () => console.log("Server is running on", 3000));
