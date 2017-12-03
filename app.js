var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/dynamic', function (req, res) {
    var lis = ''
    for(var i=0;i<6;i++) {
        lis += '<li>hi</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title>Hello Static</title>
        </head>
        <body>
            Hello dynamic!!
            <ul>
            ${lis}
            </ul>
            ${time}
        </body>
    </html>
`;
    res.send(output);
});

app.get('/sample', function (req, res) {
    res.send('Train <img src="/sample.png">');
})

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/login', function (req, res) {
    res.send('login please');
})

app.listen(3000, function() {
    console.log('Example app listening on port 3000');
})
