//creating a simple server
let http=require('http'); //package that gives ability to listen and respond to requests
let fs = require('fs'); //file system 
const {parse} = require("querytring");

http.createServer(function(request,response){
    let fileName = "./index.html";
    console.log("I got a request " + request.method);


    if(request.method === "POST" && request.url === "/bmi"){
        //PARSE INPUT

        let body = "";
        request.on("data", chunk =>{
            body += chunk.toString();
        });

        request.on("end",()=>{
            let data = parse(body);
            console.log(data);


            let weight = data.weight;
            let height = data.height;

            console.log(bmi);

            if(bmi>=25||bmi<18.5){
                //send file for unhealthy
                sendFile(response, "./unhealthy.html")

            }else{
                //send file fpor healthy
                sendFile(response, "./healthy.html")
            }
        })
    }



    fs.readFile(fileName,function(error,content){ 

        response.write(content);
        response.end();

    
    });

   



}).listen(8080);

function sendFile(res, fileName){
    fs.readFile, function(error, content){
        res.writeHead(200, {
            'Content-Type' : 'text/html'

        });
        res.end(content, "utf-8");
    }
}

//one parameter which is a callback function

//server has to listen to a particular port