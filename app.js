// Import express and initialize an instance of the express server
const express = require("express");
const app = express();
const colorsController = require("./controllers/colorsController");

//Import cors
const cors = require("cors");

// Middleware
app.use(cors());
// Middleware that allows the server to accept json
app.use(express.json());
// Middleware...When the URL starts with /colors, use the colorsController to route us appropriately
app.use("/colors", colorsController);

app.get("/", (req, res) => {
  res.send("Welcome to Colors App!");
});

module.exports = app;
