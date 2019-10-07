let Student = require('../models/Student')
module.exports = {
    getAllStudents:function(req,res){
        Student.find().exec(function(err,data){
            res.json(data);

        });


    },

    addNewStudent:function(req,res){
        let student = new Student(req.body);
        student.save(function(err){

            if(err)
            res.json(err)
        });
    }
}