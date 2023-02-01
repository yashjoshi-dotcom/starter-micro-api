
const http = require('http');
const port = process.env.PORT || 3000;
const fs =require("fs");
const server = http.createServer(function(req, res) 
{ 
res.writeHead(200, {'Content-type' : 'text/css'});
var fileContents = fs.readFileSync('./style.css', {encoding: 'utf8'});
res.write(fileContents);
res.end();
})

server.listen(port, function(error) {
if (error) {
console.log('Something went wrong', error)
} else {
    console.log('Server is listening on port ' + port)
}
})
