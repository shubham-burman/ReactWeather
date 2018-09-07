var express = require('express');

// create app

var app = express();
app.use(express.static('public'));
app.listen(3000, function () {
    console.log("express server is up and running on port 3000");
});