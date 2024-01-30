//Synchronus function
function parentFunction(name,callback){
   setTimeout(callback,1000);
    console.log("Hey buddy " +name)
}
parentFunction("Ajay",()=>{
    console.log("hey i am callback function");
});