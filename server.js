//Variables and requirements for npm express and handlebars
var express = require("express")
var exphbs = require("express-handlebars");
var app = express()

//Variable or static port info
var port = process.env.PORT || 8080;

//Calls for the public folder for data
app.use(express.static("public"));

//Handles data as json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up handlebars main page and layout
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Imports route function from burgers_controller.js
var router = require("./controllers/burgers_controller.js");

//Calls for express to use the express router from burgers_controller.js
app.use(router);

//Tells express to listen for data on the port listed above
app.listen(port, function () {
    console.log("Server listening...");
});