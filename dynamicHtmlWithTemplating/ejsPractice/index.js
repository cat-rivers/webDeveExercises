const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

app.use(express.static(path.join(__dirname, "public")));
//this is not working for some reason

app.set("view engine", "ejs");
//with this ill be able to enter the view folder and port will work //from toher woking directories.
app.set("views", path.join(__dirname, "/views"));

//this will render our html file home.ejs
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/rand", (req, res) => {
  const randNum = Math.floor(Math.random() * 12) + 1;
  res.render("random", { rand: randNum });
});

app.get("/cats", (req, res) => {
  const cats = [
    "Blue",
    "Rocket",
    "Winston",
    "Monty",
    "Mochi",
    "Gray",
    "Cottonball",
  ];
  res.render("cats", { cats });
});

app.listen(2000, () => {
  console.log("listening on port 2000!");
});
