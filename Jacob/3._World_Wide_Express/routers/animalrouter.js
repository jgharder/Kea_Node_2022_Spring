const router = require("express").Router();
const {calculateFavoriteAnimals} = require("../animals/animalsUtils.js");

router.get("/amountoffavoriteanimals", (req, res) => {
  res.send({calculateFavoriteAnimals: calculateFavoriteAnimals()});
});

router.get("/cuteanimal", (req, res) => {
  if (req.query.cute === "Yes") {
   return res.send({ animal: "Giraffe" });
  }
  res.send({ animal: "Snake" });
});

module.exports = router;
