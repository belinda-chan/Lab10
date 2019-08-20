// var x;
// let y;
// const z = "Hi";

// console.log(z);

// z = "There";
// console.log(z);

// //var v let
// function test(){
//    let myLet = "Hello";
//    console.log(myLet);

// }

// test();

// //objects
// let x = 20;
// let obj = {
//    age: 20,
//    name: "ABC",
//    fees: 100.5,
// };
// obj.name = "XYZ";
// console.log(obj.age);
// console.log(obj.name);

// obj.address = "Mel";
// console.log(obj.address);










//functions
const readLine = require('readLine');
    input: process.stdin;
    output: process.stdout;

function myFunction(name){
    console.log("Hi, my name is ", name);

}

// callbacks
function myFunc2(name){
    console.log("Hello " +name);
}

function mainFunc(para1, callBack){
    callBack(para1);
}
readLine.question('Enter name: ', (name)=>{
    mainFunc(name,myFunction);
});

mainFunc("John",myFunction);
//myFunction("FIT2095");

//assigning function to a variable
// const myFunction = (name) =>{
//     console.log("Hi my name is", name);

// }

// myFunction("FIT2095");