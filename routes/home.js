/// <reference path="../typings/tsd.d.ts" />
var fs = require("fs");
var express = require("express");
var router = express.Router();
var Converter = require("csvtojson").Converter;

router.get("/", function(req, res, next) {
    var converter = new Converter({});
    fs.createReadStream("./csv/store.csv").pipe(converter);

    converter.on("end_parsed", function (jsonArray) {
        // console.log(jsonArray);
        var storeAll = jsonArray;
        var storeResult = storeAll[Math.floor(Math.random() * storeAll.length)];
        return res.render("home", {storeAll: storeAll, storeResult: storeResult});
    });
});

module.exports = router;