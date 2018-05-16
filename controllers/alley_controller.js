
const express = require("express");
const model = require("../models/models.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index.handlebars", {
    });
});
    
router.get("/sell", (req, res) => {
    res.render("sell.handlebars", {
    });
});
   
router.get("/item", (req, res) => {
    res.render("item.handlebars", {
    });
});

module.exports = router;
