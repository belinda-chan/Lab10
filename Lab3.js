let express = require('express');
let router = express.Router();

//generate an isntance of express
let app = express(); //references module. App becomes a new instance

let db = [];
router.get('/', function(req,res){
    res.send("FIT2095 Lab 3");
});

//generating random item IDs
function getNewRandomId(){
    let id;
    id = Math.round(Math.random()*1000); //gives between 0 and 1, multiply by 1000. rounds to nearest integer
    return id;

}

// first item and attributes is as follows
let item = {
    id: 1,
    name: "Samsung Galaxy s10",
    quantity: 3,
    price: 1100
};

//insertion of first record into the database
db.push(item);

//add a new item into the database
//localhost:8080//addItem/:name/:quantity/:price
router.get('/addItem/:name/:quantity/:price',function(req,res){
    let theId = getNewRandomId();
    let obj = {
        id:  theId,
        name: req.params.name,
        quantity: req.params.quantity,
        price: req.params.price

    }

    db.push(obj)
    res.send("Item added");
    console.log("The following has been added: " + req.params.quantity+ " " + req.params.name +"s" + " at " + req.params.price + " dollars each.");

});

//localhost:8080/listAll to list all items, their IDs, quantity, price and costs

router.get('/listAll', function(req,res){ //if an app gets this pathname it will respond with this response
    let st = "";
    for(let i = 0; i <db.length; i++){ 
        st += (i)+ " - " + db[i].id + " | " + db[i].name + " | " + parseInt(db[i].quantity) + " | "+ parseInt(db[i].price) + " | " + (parseFloat(db[i].price)*(parseFloat(db[i].quantity))) + " </br>";
 
    }
    res.send(st);
}); 


//localhost:8080/deleteItem/:idToDelete' - the first occurrence


router.get('/deleteItem/:deleteId', function(req,res){ // /: represents a variable - a parameter
    //if a request arrives that matches this statement, execute this:
    let found = false;
    for(let i = 0; i <db.length && !found; i++){ //iterates between 0 and no found. Once found, found becomes TRUE
        if (db[i].id === parseInt(req.params.deleteId)){
            //db = 
            db.splice(i,1);
            found = true; 

        }
    }
    let msg = "";
    if(found){
        msg = "Item removed";
    }else{
        msg = "Sorry could not find item"
    }
    res.send(msg);

});


//localhost:8080/warehousevalue
router.get('/warehouseValue', function(req,res){
    let msg = "";
    let count = 0;

    for(let i = 0; i<db.length;i++){
        count = count + db[i].quantity*db[i].price;
        console.log(count);
    }

    msg = "The total value of the warehouse is $" + count;
    res.send(msg);

})



// app.listen(8080);


//export module
module.exports = router;