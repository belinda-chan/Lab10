var http = require('http'); //To create a http based server/client. In this case we would be using it to create a server.
var fs = require('fs'); // FileSystem module to help us with file/folders related operations
let url = require('url'); //Uniform Resource Locator module to help us with URL related operations
const {parse} = require('querystring').parse;


let server = http.createServer(function (request, response) {
    let fileName = "./index.html";
    
    if (request.method === "POST" && request.url ==="/verify"){

        //parse input
        let body = "";
        request.on("data", chunk =>{
            body += chunk.toString();
        });
    

    request.on("end",()=>{
        let data = parse(body);
        console.log(data);


        let username = data.username;
        let password = data.password;

        console.log(data.username);


        //let q = url.parse(request.url,true).query; //parse the query part of the URL
   

        // page = "./index.html";
        if ((username !== undefined)&&(password!==undefined)){
            if(username === "admin" && password ==="pass"){
                page = "mainpage.html";
            
            }else{
                page = "accessdenied.html";
            }

        }
    

        }).listen(8080);
    }
        function sendFile(response, fileName){
            fs.readFile(page, function(error,content){ //// send the home page back to the user
                // use the fs package to read the file index.html from the local drive
                response.writeHead(200,{
                    'Content-Type': 'text/html'
                });
                response.end(content,'utf-8');

            });

        }

    })
    console.log('Server running at http://127.0.0.1:8080/')

