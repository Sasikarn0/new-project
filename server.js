// let http = require("http");
// let dt = require("./myfirstmodule")

// http.createServer(function(req,res){
//     res.writeHead(200, { "Content-Type" : "text/html"});
//     res.write("The date and time are currently : "+dt.myDateTime());
//     res.end("Hello World!");
// }).listen(8000);
// let url = require("url");
// let fs = require("fs");
// let uc = require("upper-case");
// let rs = fs.createReadStream("./demo.txt");
// let events = require("events");
// let eventEmitter = new events.EventEmitter();

// //Creat an event handler
// let myEventHandler = function() {
//     console.log("I hear scream");

// }

// // Assign the event handler to an event
// eventEmitter.on("scream", myEventHandler);
// // Fire the scream event
// eventEmitter.emit("scream");


// // // rs.on("open", function(){
// // //     console.log("The file is open");

// // })
// // let adr = "http://;localhost:8000/default.html?year=2022&month=october";
// // let q = url.parse(adr,true);

// // console.log(q.host);
// // console.log(q.pathname);
// // console.log(q.search);

// // let qdata = q.query;
// // console.log(qdata.month);
// // http.createServer(function (req,res){
// //     res.writeHead(200, { "Content_Type" : "txt?html"});
// //     res.write(uc.upperCase("Sasikarn"));
// //     res.end();
//     // let q = url.parse(req.url,true);
//     // let filename = "." + q.pathname;
//     // fs.readFile(filename, function(err , data){
//     //     if (err) {
//     //         res.writeHead(404,{ "Content-Type": "text/html"});
//     //         return res.end("404 Not Found");
//     //     }
//     //     res.writeHead(200, { "Content-Type" : "text/html"});
//     //     res.write(data);
//     //     return res.end();

//     // })
// // }).listen(8000);

// // fs.rename("mynewfile2.txt","myrenamefile.txt", function(err){
// //     if (err) throw err;
// //     console.log("File rename!");

// // })
