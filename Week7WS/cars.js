let Car = require('../models/Car');

module.exports={
    getCars:function(req,res){
        Car.find.exec(function(err,data){
            if(err)
            res.json(err);

            else
            
            res.json(data)

        })

    },
    addCar:function(req,res){
            let car = new Car(req.body);
            car.save(function(err){
                if(err) res.json(err);
                else
                res.json(data);
            })


    },
    deleteCar:function(req,res){

        
    }
}
