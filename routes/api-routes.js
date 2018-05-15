// ================================================================================
//  api-routes.js - A set of routes for sending users to the various html pages
// ================================================================================

// Dependencies
// ================================================================================

// Require models
var db = require("../models");

// ================================================================================
// ROUTES
// ================================================================================

module.exports = function(app) {
  // ================================================================================
  // GET route
  // ================================================================================
  // To do: Make a GET route for filters
  // Ex.: If users want to only see popular items

  // Display all items
  // Replace insertdb with sequelize data
  app.get("/all", function(req, res) {
    db.Table.findAll().then(function(data) {
      // Note:
      // Pass in handlebars and whatever needs to be passed
      res.json(data);
    });
  });

  // Display individual items
  // Replace insertdb with sequelize data
  app.get("/item", function(req, res) {});

  // ================================================================================
  //POST route
  // ================================================================================

  app.post("", function(req, res) {});

  // ================================================================================
  //UPDATE route
  // ================================================================================

  app.put("", function(req, res) {});

  // ================================================================================
  //DELETE route
  // ================================================================================

  app.delete("", function(req, res) {});
};
