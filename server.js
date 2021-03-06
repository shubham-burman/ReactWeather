var express = require('express');

const port = process.env.PORT || 3000;
// create app

var app = express();

app.use(function(req, res, next) {
    if(req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);
    } else {
        next();
    }
});
app.use(express.static('public'));
app.listen(port, function () {
    console.log("express server is up and running on port "+ port);
});