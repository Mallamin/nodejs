var express = require("express");
var app = express();
/* adding environment var and setting a default port
(in case one want to use diff ports on the local box and testing server)*/
var port = process.env.PORT || 3000;

//Handling middleware with express
app.use("/assets", express.static(__dirname + "/public"));

// responding to the url
app.get("/", function (req, res) {
  res.send(
    "<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>This is my first express App but not my first server!!!!</h1></body></html>"
  );
});

app.get("/api", function (req, res) {
  res.json({ firstname: "Mohamed Lamin", lastname: "Jalloh" });
});
//pattern matching
app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1> person:" +
      req.params.id +
      "</h1></body></html>"
  );
});

app.listen(port);
