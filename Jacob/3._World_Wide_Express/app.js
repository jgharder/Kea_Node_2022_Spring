const express = require("express");
const req = require("express/lib/request");
const app = express();
const port = process.env.PORT || 6000;
const nodefetch = require("node-fetch");

/* const animalsUtils = require("./animals/animalsUtils.js");

console.log(animalsUtils.calculateFavoriteAnimals());
 */

app.use(express.static("public"));

const animalsRouter = require("./routers/animalrouter.js");
app.use(animalsRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/frontpage/index.html");
});

app.get("/weather", (req, res) => {
  res.sendFile(__dirname + "/public/weather.html");
});

/* app.get("/proxy", (req, res) => {
   nodefetch("https://google.com")
    .then((res) => res.text())              //  not asynchronous
    .then((result) => res.send(result));
}); */

app.get("/proxy",async(req,res)=>{
  const response = await nodefetch("https://google.com");
  const website = await response.text();
  res.send(website);
})

app.listen(port, () => {
  console.log("Server running on port: ", port);
});
