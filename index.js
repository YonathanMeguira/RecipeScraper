var express = require('express');
var app = express();
var parser = require('./lib/scrapper');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (request, response) {
    const url = request.query;
    parser.parseRecipe(url)
        .then((res) => {
            response.send(res);
        })
});

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});


