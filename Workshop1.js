//arrays

var ar=[];

ar.push(20);
ar.push("FIT2095");
ar.push(true);
ar.push([13,69]);

console.log(ar);

for(var i =0; i<ar.length;i++){
    console.log(ar[i]);
}

ar.forEach(function(item,index,arr){
    console.log(index+" : "+ item)
});

//catching runtime errors
try{

    //Do something with requests

}catch(err){

    //if error occurs, execution jumps here

}

//switch case
switch (requestType) {
    case 1:
        callMethod1();
        break;
    case 2:
        callMethod2();
        break;
    
    default:
        break;
}

//Callback functions
function f1(item){
    console.log("Hello from F1: " + item);
}
function f2(item){
    console.log("gDAY from: " + item);
}    
function mainFunction(value,Callback){
    //processing on value
    value = value + "FIT2095";
    callback(value) //passing a fucntion as a parameter
}

mainFunction("ABC",f1()); //callback becomes a reference for f1

