
const express = require("express");
const model = require("../models/models.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.handlebars");
});
    
// router.get("/", (req, res) => {
//     item.selectAll(function(data) {
//         var itemData = {                        // Var to hold DB items - DLO
//             item: data
//         }
//     });
//     res.render("index.handlebars", itemData);
// });


router.get("/sell", (req, res) => {
    res.render("sell.handlebars");
});
   
router.get("/item", (req, res) => {
    res.render("item.handlebars");
});

router.get("*", (req, res) => {
    res.render("404.handlebars");
});

module.exports = router;
