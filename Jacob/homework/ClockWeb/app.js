const express = require("express");
const app = express();
const port = 8080;

app.get("/time", (req, res) => {
  res.sendFile(__dirname + "/public/time.html");
});

/* app.listen(port, () => {
  console.log("Server is running on port:", port);
}); */ // old stuff

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});