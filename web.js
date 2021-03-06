/// <reference path="typings/tsd.d.ts" />
var path = require("path");
var express = require("express");
var favicon = require("serve-favicon");
var morgan = require("morgan");

var app = express();

var storeAll,
    storeResult;
var readcsv = require("./middlewares/readcsv");
var homeRouter = require("./routes/home");
var storeRouter = require("./routes/store");

// pug Setting
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Middleware
app.use("/static/", express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(morgan("combined")); // combined or dev

// Router
app.use("/", homeRouter);
app.use("/store", storeRouter);

var port = process.env.PORT || 8001; // cafe24 port 8001

app.listen(port, function() {
    console.log("Server is running on " + port);
});