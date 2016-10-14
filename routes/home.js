/// <reference path="../typings/tsd.d.ts" />
var fs = require("fs");
var express = require("express");
var router = express.Router();
var Converter = require("csvtojson").Converter;

router.get("/", function(req, res, next) {
    var converter = new Converter({});
    fs.createReadStream("./csv/store.csv").pipe(converter); // cafe24 url change /home/hosting_users/{{ your_cafe24_id }}/apps/{{ your_cafe24_app_name }}/csv/

    converter.on("end_parsed", function (jsonArray) {
        // console.log(jsonArray);
        var storeAll = jsonArray;
        var storeResult = storeAll[Math.floor(Math.random() * storeAll.length)];
        return res.render("home", {
            title: '점심 뭐 먹지?',
            description: '오늘 점심 뭐 먹지 고민하는 분들을 위한 점심밥집 추천 사이트',
            keywords: '점심, 밥집, 추천, 맛집, 오늘 점심 뭐 먹지',
            url: req.headers.host,
            storeAll: storeAll,
            storeResult: storeResult
        });
    });
});

module.exports = router;