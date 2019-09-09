let mongoose = require('mongoose');


let developerSchema = mongoose.Schema({

    name: {
        
        fname:{
        type: String,
        required:true
        },

        lname:String
    },

    level:{
        type: String,
        required:true,
        validate:{
            validator: function(value){
                if (value === "BEGINNER" || value === "EXPERT")
                    return true;
                else 
                    return false;
            },
            message: 'Must be BEGINNER or EXPERT'
        }
    },

    address: {
        state:String,
        suburb: String,
        street: String,
        unit: Number
    }

    
});

let developerModel = mongoose.model("developerCollection", developerSchema);

module.exports = developerModel;