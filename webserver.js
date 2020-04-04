//Building a Webserver
var http = require("http");
var fs = require("fs");

http
  .createServer(function (req, res) {
    /*outputting plain text
  res.writeHead(200, { "content-Type": "text/plain" });*/
    //res.writeHead(200, { "content-Type": "text/html" });
    // outputting JASON
    res.writeHead(200, { "content-Type": "application/json" });
    var person = {
      firstName: "Mohamed Lamin",
      lastName: "Jalloh",
      countryOfOrigin: "The Federal Republic of Africa",
      Age: "Why is it so important?",
    };
    /*converting fs.readFileSync into a string by adding a char encoding
   
   var html = fs.readFileSync(__dirname + "/web.html","utf8");*/

    /*create a message var

    var message = "Hellooooooooooooooooo Lamin!"

    // using the replace method on the str
    html= html.replace("{Message}", message);*/
    res.end(JSON.stringify(person));
  })
  .listen(1337, "127.0.0.1");
