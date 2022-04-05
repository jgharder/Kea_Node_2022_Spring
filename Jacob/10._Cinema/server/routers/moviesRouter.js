import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";

router.get("/api/movies", async (req, res) => {
  const movies = await db.all("SELECT * FROM movies");
  res.send({ movies });
});

// implement POST /api/movies
router.post("/api/movies", async (req, res) => {
  const {title} = req.body;
  console.log(title);
  await db.run(`INSERT INTO movies (title) VALUES (?)`, title);
  res.send({ message: "Movie added" });
});

export default router;
