var fs = require("fs");
var events = require("events"); //importing the event module
var eventEmitter =new events.EventEmitter() //assign EventEmitter function to variable

console.log("Started running");

var fun1 = function function1(){ //function 1
    console.log("function 1 is fired")
}

var fun2 = function function2(){ //function 2
    console.log("function 2 is fired")
}

eventEmitter.on("function1",fun1)   //binding  function1
eventEmitter.on("function2",fun2)  //binding  function2
result()

function result(){
    var a=1;
    if(a==1){
        eventEmitter.emit("function1"); //Emit the function 1
    }
    else{
        eventEmitter.emit("function2"); //Emit the function 1
    }
}