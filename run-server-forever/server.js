var http = require("http");

var server = http.createServer(function(req, res) {
  res.write("The server is sending a mesage");
  res.end();

  // crash the code.
  process.exit();
});

server.listen(3000);
