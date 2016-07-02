var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-post', function(req, res){
  // console.log('/create-post');
  console.log(req.body);
  res.redirect('/');
});

app.listen(3000, function() {
  console.log("hi i'm ready to accept requests");
});
