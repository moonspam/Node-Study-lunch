/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");
var morgan = require("morgan");

var app = express();

var homeRouter = require("./routes/home");

// pug Setting
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use("/static/", express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(morgan("dev")); // combined or dev

// Router
app.use("/", homeRouter);

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("Server is running on http://localhost:" + port);
});