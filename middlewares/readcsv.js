/// <reference path="../typings/tsd.d.ts" />
var fs = require("fs");
var Converter = require("csvtojson").Converter;
var converter = new Converter({});
fs.createReadStream("./csv/store.csv").pipe(converter); // cafe24 url change /home/hosting_users/{{ your_cafe24_id }}/apps/{{ your_cafe24_app_name }}/csv/

converter.on("end_parsed", function (jsonArray) {
    // console.log(jsonArray);
    storeAll = jsonArray;
});
