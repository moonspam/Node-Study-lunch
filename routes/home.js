/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    storeResult = storeAll[Math.floor(Math.random() * storeAll.length)];
    // console.log(storeResult);
    res.render("home", {
        url: req.headers.host,
        storeAll: storeAll,
        storeResult: storeResult
    });
});

module.exports = router;