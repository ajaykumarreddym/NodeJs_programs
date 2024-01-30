
const delayFunction=()=>{
    console.log("Delayed function call after some sort of time ");
}
setTimeout(delayFunction,1000);


//SetInterval

function repeatFunction(){
    console.log('Repeated function executed');
}

const  intervalID=setInterval(repeatFunction,1000)

setTimeout(()=>{
    clearInterval(intervalID);
    console.log("Stopped calling the function")
},5000);
