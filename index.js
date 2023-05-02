const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.get("/news", (req, res) => {
  res.send(news);
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const newsDetails = news.find((newsData) => newsData._id === id);
  res.send(newsDetails);
});

app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const catgoryTypeData = news.filter(
      (nD) => parseInt(nD.category_id) === id
    );
    res.send(catgoryTypeData);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
