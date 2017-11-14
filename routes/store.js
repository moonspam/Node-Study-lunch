/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();

router.get("/:id", function(req, res, next) {
    var id = req.params.id;
    var store;
    for(store in storeAll) {
        if(id === storeAll[store].name) {
            storeResult = storeAll[store];
        }
    }
    // console.log(storeResult);
    res.render("home", {
        url: req.headers.host,
        storeAll: storeAll,
        storeResult: storeResult
    });
});

module.exports = router;