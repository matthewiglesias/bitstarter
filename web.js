var express = require('express'), fs = require('fs');

var app = express.createServer(express.logger());

var content = fs.readFileSync("Hello", 'utf8');


app.get('/', function(request, response) {
  //response.send('Hello World2!');
  // fs.readFileSync('index.html',function (err){
    //  if (err) throw err;
      buf = new Buffer(256);
      len = buf.write(content,0);
     response.send(buf.toString('utf8',0,len);
     // console.log(buf.toString('utf8',0,len);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
