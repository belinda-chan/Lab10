let mongoose = require("mongoose");

let carSchema = mongoose.Schema({

    maker:String,
    year:number,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'

    }]



});

let carModel = mongoose.model("Car",carSchema);


module.exports=carModel;

//
let mongoose = require("mongoose");

let carSchema = mongoose.Schema({

    maker:String,
    year:number,
    users:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'

    }]



});

let carModel = mongoose.model("Car",carSchema);


module.exports=carModel;