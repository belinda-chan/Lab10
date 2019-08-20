let express = require('express');

//generate an isntance of express

let app = express(); //references module. App becomes a new instance

let db = [];
router.get('/', function(req,res){
    res.send("FIT2095 Lab 3");
});

//add a new item into the database
//localhost:8080/addNo/80 to add a new number to the database

app.get('/addNo/:number',function(req,res){
    console.log(req.params.number); //to access the number
    let theId = getNewRandomId();
    let obj = {id:theId,no:parseInt(req.params.number)};
    console.log(obj);
    db.push(obj);
    res.send("Thank you");


});

function getNewRandomId(){
    let id;
    id = Math.round(Math.random()*1000); //gives between 0 and 1, multiply by 1000. rounds to nearest integer
    return id;

}

//localhost:8080/deleteNumber/80 to delete a numbver - tje first occurrence


app.get('/deleteNumber/:numberToDelete', function(req,res){ // /: represents a variable - a parameter
    //if a request arrives that matches this statement, execute this:
    let found = false;
    for(let i = 0; i <db.length && !found; i++){ //iterates between 0 and no found. Once found, found becomes TRUE
        if (db[i].no === parseInt(req.params.numberToDelete)){
            db = db.splice(i,1);
            found = true; 
        }
    }
    
    let msg = "";
    if(found){
        msg = "Sorry! We could not find it!!"
    }
    res.send(msg);


});


//localhost8080//deleteByID/123 to delete a number  by ID

//localhost:8080/listAll to get all numbers by thei ids

app.get('/listAll', function(req,res){
    let st = "";
    for(let i = 0; i <db.length; i++){
        st +=(i)+ " - " + db[i].id + " | " + db[i].no + "</br>";
 
    }
    res.send(st);
}); //if an app gets this pathname it will respond with this response



app.listen(8080);



