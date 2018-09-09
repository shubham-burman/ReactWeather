var express = require('express');

const port = process.env.PORT || 3000;
// create app

var app = express();
app.use(express.static('public'));
app.listen(port, function () {
    console.log("express server is up and running on port "+ port);
});