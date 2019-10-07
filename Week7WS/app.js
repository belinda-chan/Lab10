let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let user=require('./routers/users');
let cars=require('./routers/cars');


let app = express();
let url = "mongodb://localhost:27-17/Week7WS";
mongoose.connect(url,{useNewUrlParser:true, useUnifiedTopology:true}, function (err){
        if (err) {
            console.log(err);
        }else {
        console.log('DB COnnected');

}

});

//get allusers
app.get('/users',user.getAllUsers);
app.get('users/cars',users.getUserCars);
app.post('/users',users.addUser); //if a request arrives here, call this request 

//cars

app.get('/cars', cars.getCars);
app.post('/cars',app.getCars);

app.listen(8080);


//




    
