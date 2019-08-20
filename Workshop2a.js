let http= require('http'); //local built in package called HTTP
let fs = require('fs');

let urlParse = require('url');
//con

    let fileName = "./index1.html"; //./ means it is a local file
    fs.readFile(fileName,function(error,content){ 

    let myRequestQ = urlParse.parse
    (request.url).query;
    console.log(myRequest());


http.createServer(function(request,response){ //Callback function with 2 paramenters: request and response. 

    let fileName;
    let url = request.url;
    if(url==="/students"){
        fileName = "./students.html"; 
     } else if(url==="/teachers"){
        fileName = "./teachers.html"; 
     }else{
        fileName = "/index1.html"
    }


    });

    
    response.end();
}).listen(8080);

console.log("I am listening on port 8080")