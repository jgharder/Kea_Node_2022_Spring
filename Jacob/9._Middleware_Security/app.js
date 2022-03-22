const express = require("express");
const app = express();

const PORT = process.env.PORT || 6000;


app.get("/computer", (req, res)=>{
    res.sendFile(__dirname + "/public/computer.html")
});

app.listen(PORT, ()=> console.log("running on server", PORT));