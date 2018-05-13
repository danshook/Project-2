// ================================================================================
//  api-routes.js - A set of routes for sending users to the various html pages
// ================================================================================

// Dependencies
// ================================================================================

// Require models
var db = require("./models");

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
  app.get("", function(req, res) {});

  //Display individual items
  //

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
