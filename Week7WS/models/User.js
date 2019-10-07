let mongoose = require('mongoose');

let userSchema = mongoose.Schema({

    name:String,
    address: String,
    car:[{
        ref: "Car",
        cars: mongoose.Schema.Types.ObjectId
    }]



});

let userModel = mongoose.model("User",userSchema);

module.exports=userModel;


