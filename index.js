const express = require("express");
const app = express();
const port = 3000;
var cors = require("cors");
app.use(cors());
const categories = require("./data/categories.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
