const express = require("express");
const app = express();

//app.use is very important. ten we need respond
// app.use((req, res) => {
//   console.log("we got a new request");
//   //   res.send("hello we got your request");
//   //   res.send({ color: "red" });
// });

// /cats => 'meow'
// /dogs => 'woof'
// '/'

app.get("/", (req, res) => {
  res.send("Hello, welcome to the  the home page");
});

//here we define a pattern for the path
app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1> Browsing the ${subreddit}</h1>`);
});

app.get("/r/:subreddit/:postId", (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`<h1> Viewing postm id : ${postId} Browsing the ${subreddit}</h1>`);
});

app.post("/cats", (req, res) => {
  res.send("this is different from a get request");
});

app.get("/cats", (req, res) => {
  res.send("WTF!");
});

app.get("/dogs", (req, res) => {
  res.send("woof!!");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("nothing found if nothing searched");
  }
  res.send(`<h1> Search results for ${q} are: </h1>`);
});
//response to port clients

// app.get("*", (req, res) => {
//   res.send("I dont know that path");
// });
