import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import session from "express-session";
import coffeeRouter from "./routers/coffee.js"


const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(helmet());
app.use("/frontdoor", ipLogger);

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))


app.use(coffeeRouter)

const limiter = rateLimit({
  windowMs: 15 * 60 * 100,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 100,
  max: 6,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/auth", authLimiter);


function ipLogger(req, res, next) {
  console.log(req.ip);
  next();
}

function guardHouse(req, res, next) {
  const username = "Hans";
  if (username === "Hans") {
    req.username = "Hans";
    next();
  } else {
    res.send({ message: `You don't have permission to enter` });
  }
}

app.get("/frontdoor", guardHouse, (req, res) => {
  res.send({ doorbell: `You have permission to enter, ${req.username}.` });
});

app.get("/auth", (req, res) => {
  res.send({ message: `You are trying to log in` });
});

function greeter(req, res, next) {
  console.log("Welcome to the mansion.");
  next();
}

app.get("/room", greeter, (req, res, next) => {
  // res.send({ message: "You are in room 1" });
  console.log("You are in room 1 but I will lead you to room 2");
  next();
});

app.get("/room", greeter, (req, res, next) => {
  res.send({ message: "You are in room 2" });
});

app.get("*", (req, res) => {
  res.send("<h1>Page not found: 404</h1>");
});

app.listen(PORT, () => console.log("Running on server", PORT));