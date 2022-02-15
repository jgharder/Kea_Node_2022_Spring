const express = require("express");
const app = express();
app.use(express.json());
const port = 8080;


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


app.get("/libraries",(req,res)=>{
res.send(req.query)
});

app.get("/aboutclient:clientName", (req, res)=>{
res.send({greeting: `Hello there ${req.params.clientName}`});
});

app.listen(port, (error)=>{
  console.log("Server is running on port:", port)
});