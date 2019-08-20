let express = require ("express");
let app = express();
app.get("/math/add/:operand1/:operand2", function(req,res){
    let n1 = parseInt(req.params.operand1);
    let n2 = parseInt(req.params.operand2);

    let result = n1+n2;

    res.send("Output = " +result);

});


app.get("/math/sub/:operand1/:operand2", function(req,res){
    let n1 = parseInt(req.params.operand1);
    let n2 = parseInt(req.params.operand2);

    let result = n1-n2;

    res.send("Output = " +result);

});

app.get("*", function(req,res){
    res.send("Unknown Operation");

});

app.listen(8080);