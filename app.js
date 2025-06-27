const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res, next) => {
  res.render("index");
});
app.use((req, res, next) => {
  res.status(404).send("Page Not Found 404");
});

app.listen(3000, () => {
  console.log("Server started...!");
});
