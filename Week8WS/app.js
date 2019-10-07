let express = require('express');
let mongoose = require('mongoose');
let schools = require('./routers/schools');
let students = require('./routers/students');

let app = express();
app.use(express.json()); //puts data inside an object called body (found in req.body)

let url = "mongodb://localhost:27017/week8tute1";

mongoose.connect(url,function(err){
    if(err)
    console.log(err);

});

//schools
app.get('/schools',schools.getAllSchools);
app.post('/schools',schools.addNewSchool);
//app.post('/schools/addStudent',schools.add)
//put updates an exisiting document
//app.put('/schools',schools.updateSchools);
app.post('/schools/addStudent',schools.addNewStudent);


app.get('/students', student.getAllStudents);
app.post('/students', student.addNewStudent);

app.listen(8080);
