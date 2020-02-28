const icons = require('./icons')

var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log('icons', icons)
});

app.get('/test', (req, res, next) => {
    res.json(icons)
})