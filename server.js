var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/create-post', function(req, res){

  fs.readFile(__dirname + '/data/posts.json', function (error, file) {
    if(error) {
      res.send(error);
    }

    var parsedFile = JSON.parse(file.toString());

    var currentTimestamp = Date.now();

    parsedFile[currentTimestamp] = req.body.blogpost;

    var jsonData = JSON.stringify(parsedFile);

    fs.writeFile('data/posts.json', jsonData, function(error) {
      console.log("done writing post!");
      res.redirect('/');
    });
  });
});

app.get("/get-posts", function (req, res) {
  res.sendFile(__dirname + '/data/posts.json');
});



app.listen(3000, function() {
  console.log("hi i'm ready to accept requests");
});
