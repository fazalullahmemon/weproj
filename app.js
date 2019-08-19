var express = require('express');
var app = express();
var path = require('path');
// app.set('view engine', 'ejs');
app.listen(3000, function() {
    console.log('Listening to Port 3000!');
    console.log(__dirname);
});

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
    res.sendFile('login.html', {root: path.join(__dirname, '/')});
})