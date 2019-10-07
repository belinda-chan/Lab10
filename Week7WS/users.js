let user = require('../models/User');
let user = require("../models/Car");
module.exports={
    getAllUsers: function(req,res){
        res.json({"msg": "Working"})


    user.find.exec(function(err,data){
        res.json(data);

    });

    },
    getUserCars: function(req,res){
        res.json({name:'tim',age:23});
    },

    addUser: function(req,res){
        let user = new user(req.body);
        user.save(function(err){
            if(err)
            res.json(err);
            else
            res.json({msg:'Saved'});
        });
    }



}

//let obj = {name:'Tim', age:23}



//q2
let user = require('../models/User');
let user = require("../models/Car");
module.exports={
    getAllUsers: function(req,res){
        res.json({"msg": "Working"})

    user.find.exec(function(err,data){
        res.json(data);

    });

    },
    getUserCars: function(req,res){
        res.json({name:'Tim',age:23},{});
    }


//

User.findOne({ name: "Tim" }).populate('Cars').exec(function (err, data) {
            if (err) return res.status(400).json(err);
            if (!data) return res.status(404).json();
            res.json(data);
        });

    }




