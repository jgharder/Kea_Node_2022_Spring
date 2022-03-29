import Router from "express";
const router = Router();



router.get("/fillcoffee", (req, res) => {
    req.session.coffeeAmount = 100;
    res.send();
  });

router.get("/drinkcoffee", (req, res) => {
  req.session.coffeeAmount -= 30;
  res.send({ message: `you have ${req.session.coffeeAmount} coffee left` });
});



export default router;
