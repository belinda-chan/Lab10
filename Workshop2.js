let http= require('http'); //local built in package called HTTP
let fs = require('fs');

http.createServer(function(request,response){ //Callback function with 2 paramenters: request and response. 

    let fileName = "./index1.html"; //./ means it is a local file
    fs.readFile(fileName,function(error,content){ 

    
    });

    response.write(content);
    response.end();
}).listen(8080);

console.log("I am listening on port 8080")