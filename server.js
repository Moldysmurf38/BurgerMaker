var express = require("express")
var mysql = require("mysql")
var exphbs = require("express-handlebars");
var app = express()

var port = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(port, function () {
    console.log("Server listening...");
});