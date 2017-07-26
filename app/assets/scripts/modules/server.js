var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');

var app = express();
app.use(bodyParser.json());
app.use('/api/posts', require('./controllers/api/posts'));

app.listen(3000, function () {
	console.log('Serwer nasłuchuje na porcie numer', 3000);
});

app.get('/', function (req, res) {
 res.sendFile('I:/Projects/MEAN app/app/assets/scripts/modules/layouts/posts.html');
});

