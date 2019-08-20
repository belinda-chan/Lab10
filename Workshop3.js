let express =require('express')
let app=express()

app.get("/", function(req,res){
    res.send("hello to my first express");

});
app.get("/wiki/:keyword/fit2095/:id", function(req,res){ //how to retrieve parameters from URL
    console.log(req.url);
    console.log(req.params);

    res.send("hello to my first express");
});

app.get("/about", function(req,res){
    res.send("this is the about page");


});

app.listen(8080);

