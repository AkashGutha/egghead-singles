// install forever globally using the following command
// npm install --global forever

var http = require("http");

var server = http.createServer(function(req,res){
    res.write("Welcome to egghead server");
    res.end();

    if(req.url == "/break"){
        process.exit();
    }
});

server.listen(8080);
