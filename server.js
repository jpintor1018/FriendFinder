var express = require("express");
var path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('app/public/photos'));

  require("./app/routing/apiRoutes.js")(app);
  require("./app/routing/htmlRouting.js")(app);


  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });