// var react = require ("./rectangle")
//  function reactFunction(a,b){
//      console.log("We will count add and mul operation soon for a = " + a + " and b = "+ b)
//      react(a,b, (err, rectangle) =>{
//          if(err){
//              console.log("Error "+err)
//          }
//          else{
//              console.log("Addition of two number is "+ rectangle.add())
//              console.log("Multiplication of two numbers is "+ rectangle.mul())
//          }
//      })
//      console.log("will load after 2 sec interval")
//  }
//  reactFunction(101,10);

const http = require('http');
const hostname = 'localhost';
const port = '3000';

const server = http.createServer((req, res) =>{
    console.log(req.headers);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>hello nodeJS</h1></body></html>');
})
server.listen(port, hostname, () => {
    console.log(`server is running on http://${hostname}:${port}`);
});