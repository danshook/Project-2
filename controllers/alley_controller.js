const express = require("express");
const model = require("../models/models.js");
const router = express.Router();

//GET route for all items
router.get("/", (req, res) => {
  model.selectAll(function(data) {
    var item = {
      item: data
    };
    console.log(item);
    res.render("index", item);
  });
});
// router.get("/", (req, res) => {
//   item.selectAll(function(data) {
//     var itemData = {
//       // Var to hold DB items - DLO
//       item: data
//     };
//   });
//   res.render("index.handlebars", itemData);
// });

//Get route for individual item
//When user clicks on the item, show detailed info
router.get("/item", (req, res) => {
  model.selectOne(function(data) {
    var item = {
      item: data
    };
    console.log(item);
    res.render("index", item);
  });
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
  console.log(req.body);
  res.status(200);
});

//Get route for any other route the user goes to
//Show Error 404
router.get("*", (req, res) => {
  res.render("404");
});

// //Should this be a post route??
// router.post("/sell", (req, res) => {
//   model.create(
//     ["Product_Name", "Description", "Price"],
//     [req.body.name, req.body.sleepy],
//     function(result) {
//       // Send back the ID of the new quote
//       res.json({ id: result.insertId });
//     }
//   );
// });

module.exports = router;
