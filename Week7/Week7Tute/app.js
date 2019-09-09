let mongoose = require('mongoose');
let express = require('express');
let app = express();

let warehouse = require('./models/warehouse');
let item = require('./models/item');

let url = "mongodb://localhost:27017/warehouseDB";
mongoose.connect(url, function(err){
    if(err){

        throw err //if you don't handle an error the prgram will crash
    }
    console.log("Successfully connected");
});

//create warehouse - object method
    // app.get('/addWarehouse/:name/:capacity/:address', function(req,res){;
    //     let wH = new warehouse({
    //         _id: new mongoose.Types.ObjectId(),
    //         name: req.params.name,
    //         address: req.params.address,
    //         capacity: req.params.capacity
    //     });

    //     wH.save(function(err){
    //         if (err){
    //             console.log(err);

    //         }

    //     });

    // });


//static method

warehouse.create({
    name: req.params.name,
    address: req.params.address,
    capacity: parseInt(req.params.capacity),

},

function(err){
    if (err){
        console.log(err);

    }

    res.redirect('/getWarehouse');

});



//name
//capacity
//address


//get warehouse
app.get('/getWarehouse', function(req,res){
    warehouse.find().exec(function(req,data){
        res.send(data);

    });


});



//create items

app.get('/addItem/:whId/:name/:cost/:quantity', function(req,res){
    item.create({
        name: req.params.name,
        cost: req.params.cost,
        quantity: req.params.quantity,
        warehouse: req.params.whId,

    }, function(err){
        console.log('Unable to get item');
    
    })

});



//get items

app.get('/getItems');

app.listen(8080);