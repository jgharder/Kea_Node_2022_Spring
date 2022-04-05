import { db } from "./createConnection.js";

const deleteMode = true;

if (deleteMode) {
  db.exec(`DROP TABLE IF EXISTS movies`);
}

db.exec(`CREATE TABLE IF NOT EXISTS movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100)
)`);


// Seeding database
if(deleteMode) {
db.run(`INSERT INTO movies (title) VALUES ("Spiderman")`);
db.run(`INSERT INTO movies (title) VALUES ("Die Hard 4")`);
db.run(`INSERT INTO movies (title) VALUES ("The Godfather")`);
}

db.close();
