var express = require("express");
var app = express();
var mysql=require('mysql');
/* adding environment var and setting a default port
(in case one want to use diff ports on the local box and testing server)*/
var port = process.env.PORT || 3000;

//Handling middleware with express(need to revisit this concept)
app.use("/assets", express.static(__dirname + "/public"));
//templates and template engines (ejs)
app.set("view engine", "ejs")
app.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
//creating mysql connection
  var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'poco14',
    password : 'secret',
    database : 'addressbook'
  });
  connection.query('SELECT people.ID,Firstname, Lastname,Address FROM people INNER JOIN personAddresses On people.ID=personID INNER JOIN Addresses ON personAddresses.Addresses.ID',
  function (error, rows) {
    if (error) throw error;
    console.log(rows);
  });
   
  next();
});

// responding to the url
/*app.get("/", function (req, res) {
  res.send(
    '<html><head><link href="assets/style.css" type="text/css" rel="stylesheet"/></head><body><h1>This is my first express App but not my first server!!!!</h1></body></html>'
  );
});*/

// using render instead of sending the html manually as above

app.get("/", function (req, res) {
  res.render("index", {ID:req.params.id});
  
});

//pattern matching
app.get("/person/:id", function (req, res) {
  res.send(
    "<html><head></head><body><h1> person:" +
      req.params.id +
      "</h1></body></html>"
  );
});

app.get("/api", function (req, res) {
  res.json({ firstname: "Mohamed Lamin", lastname: "Jalloh" });
});

app.listen(port);
