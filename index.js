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

// callback and error handling

// const http = require('http');
// const hostname = 'localhost';
// const port = '3000';

// const server = http.createServer((req, res) =>{
//     console.log(req.headers);

//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>hello nodeJS</h1></body></html>');
// })
// server.listen(port, hostname, () => {
//     console.log(`server is running on http://${hostname}:${port}`);
// });

//express framework
const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const http = require('http');
const hostname = 'localhost';
const port = '3000';
const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
// app.use((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>hello nodeJS</h1></body></html>');
// });

app.all('/dishes', (req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //it responses with updated value of req, res in below
    next();
});

app.get('/dishes', (req, res, next) =>{
    res.statusCode = 200;
    res.end('we will send dishes you soon!');
});
app.get('/dishes/:dishId', (req, res, next) =>{
    res.statusCode = 200;
    res.end('we will send dish of ' + req.body.name + ' with detail '+ req.body.detail);
});
app.post('/dishes', (req, res, next) =>{
    res.statusCode = 200;
    res.end('we will add dish '+ req.body.name + 'with details '+ req.body.detail);
});
app.post('/dishes/:dishId', (req, res, next) =>{
    res.statusCode = 403;
    res.end('we will not able to add dish of ' + req.body.dishId + 'due to unsupport');
});
app.put('/dishes', (req, res, next) =>{
    res.statusCode = 403;
    res.end('we will not able to update withour dishID due to unsupport');
});
app.put('/dishes/:dishId', (req, res, next) =>{
    res.statusCode = 200;
    res.write('updating...')
    res.end('we will update dish '+ req.body.name + 'with details '+ req.body.detail + 'of dishId '+ req.body.dishId);
});
app.delete('/dishes', (req, res, next) =>{
    res.statusCode = 200;
    res.end('we are deleting all dishes');
});
app.delete('/dishes/:dishId', (req, res, next) =>{
    res.statusCode = 200;
    res.end('we are deleting dish of dishId '+ req.body.dishId);
});
const server = http.createServer(app);
server.listen(port, hostname, () =>{
    console.log(`server is running on port ${port} and URL will be http://${hostname}:${port}` )
});