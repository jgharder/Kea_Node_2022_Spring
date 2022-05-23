import db from "../createConnection.js";

db.actors.updateOne({name: "Jacob"}, {$set: {age: "28"}});