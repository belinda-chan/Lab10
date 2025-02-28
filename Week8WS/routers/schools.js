let School = require('../models/School')
let Student = require('../models/Student');
module.exports = {
    getAllSchools:function(req,res){
        School.find().exec(function(err,data){
            res.json(data);
        });
    },

    addNewSchool:function(req,res){
        let school = new School(req.body);
        school.save(function(err){

            if(err)
            res.json(err)
        });
    },

    addNewStudent:function(req,res){
        let schoolId=req.query.schId;
        let studentId = req.body.stnId;

        StudentId.findOne({_id:studentId},function(err,student){
            School.findOne({_id:schoolId},function(err,school){
                school.students.push(student);
                school.save(function(err){
                    res.json({msg:"Added"});
                })


            });

        });

        //Student.findById(studentId,function(err,student));
    }
}