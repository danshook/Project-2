const express = require("express");
const model = require("../models/models.js");
const router = express.Router();

//GET route for all items
router.get("/", (req, res) => {
  model.selectAll(function(data) {
    var item = {
      item: data
    };
    console.log("item alleyController: ", item);
    res.render("index", item);
  });
});

//Get route for individual item
//When user clicks on the item, show detailed info
router.get("/item", (req, res) => {
  //Need a selectOne orm
  res.render("item", item);
});

//Get route for adding new item to sell
router.get("/sell", (req, res) => {
  //Need a selectOne orm
  res.render("sell");
});

// Post Route
router.post("/sell", function(req, res) {
  //   console.log(req.body);
  res.json();
});

//Get route for any other route the user goes to
//Show Error 404
router.get("*", (req, res) => {
  res.render("404");
});

module.exports = router;
