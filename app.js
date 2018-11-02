// import libraries
var express = require('express'); //,
    //bodyParser = require('body-parser');

var app = express();

// allow json data to be parsed
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({
//    extended: true
//}));

// cofigure static directory for js, css, etc.
app.use(express.static('./public'));

app.get('/', function(req, res){
    res.sendFile('index.html', {root: '.'});
});

app.get('/about', function(req, res){
    res.sendFile('about.html', {root: '.'});
});

// Code block to test if running on heroku
let port=process.env.PORT;
if (port==undefined || port =="") {
  port=3000;
}
console.log("Express server listening on port", port);
app.listen(port);

/* ORGINAL
app.set('port', 3000);  //use your own port
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));
*/
