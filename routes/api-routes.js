// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the Products
  app.get("/api/Products/", function (req, res) {
    db.Alley.findAll({})
      .then(function (dbAlley) {
        res.json(dbAlley);
      });
  });

  // Get route for returning Products of a specific ID, name, category or price
  app.get("/api/Products/Products/:category", function (req, res) {
    db.Alley.findAll({
      where: {
        $or: [
          Product_ID, { $eq: term },

          Product_name, { $eq: term },

          Category, { $eq: term },

          Price, { $eq: term }


        ]
      }
    });

  }),
    
      $.then(function (dbAlley) {
  res.json(dbAlley);
}),


// Get route for retrieving a single post
app.get("/api/Products/:id", function (req, res) {
  db.Post.findOne({
    where: {
      Product_ID: req.params.id
    }
  })
    .then(function (dbAlley) {
      res.json(dbAlley);
    });
}),

// POST route for saving a new post
app.post("/api/Products", function (req, res) {
  console.log(req.body);
  db.Alley.create({
    Product_Name: req.body.Product_Name,
    Category: req.body.category,
    Picture: req.body.picture,
    Description: req.body.description,
    Price: req.body.price
  })
    .then(function (dbAlley) {
      res.json(dbAlley);
    });
}),

// DELETE route for deleting Productscts
app.delete("/api/Products/:id", function (req, res) {
  db.Products.destroy({
    where: {
      Product_ID: req.params.id
    }
  })
    .then(function (dbPost) {
      res.json(dbPost);
    });
}),

// PUT route for updating Products
app.put("/api/Products", function (req, res) {
  db.Products.update(req.body,
    {
      where: {
        Product_ID: req.body.id
      }
    })
    .then(function (dbAlley) {
      res.json(dbAlley);
    });


    
})};
