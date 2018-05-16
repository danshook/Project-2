// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");

const exphbs = require("express-handlebars");
const routes = require("./controllers/alley_controller.js");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models/models.js");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));  
app.set("view engine", "handlebars"); 

app.use(routes);

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {           // I had to remove this line to get a barebones app running - DLO
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);          
//   });
// });

app.listen(PORT, () => {  
  console.log("Server is up on port ", PORT);
});  
