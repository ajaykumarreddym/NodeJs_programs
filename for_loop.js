var num=[2,3,21,123,31,"ajay"];
// console.log(num.length);
for(var i=0;i<num.length;i++){
    console.log(num[i]);
}

//while loop also known as entry control loop 

let count=1;
console.log("Here are the While loop control")
while(count<10){
    console.log(count);
    count++;
}

//do while loop also known as exit control loop
var num=[2,3,21,123,31,"ajay"];
var j=0;
console.log("Here are the do while loop control")
do{
    console.log(num[j]);
    j++;
}while(num[j]<num.length);


//for in loop 

let person={
    name:"Ajay Reddy",age:20,occupation:"Developer Student"
};
console.log("Here are the for in loop control")
for(let key in person){
    console.log(key+":"+person[key]);
}


//object creation

let car={
    make:"BMW",
    model:"S1",
    year:2023,
    isElectric:false,
    start:function condition(){
        console.log("Engine Started!");
    }
};

console.log(car.start());


//model object creation
function Book(  title,author,price){
    this.title=title;
    this.author=author;
    this.price=price;
}
let book1=new Book("Motivate","Amigos",1000);
let book2=new Book("To Kill a Mockingbird","Harper lee",2000);
for(let key in book1){
     console.log(key+":"+book1[key])
}

console.log(book2.author);



//working with  arrays 
let names=["Ajay","Reddy","Manu","Harika","Pooji","Madhu"];
console.log(names[0]);

//fetch the index values 
console.log(names.indexOf("Manu"));

names.push("Syam");
console.log(names);

//adding elements at the beginning ;
names.unshift("Amma");
console.log(names);

//Removing the last element 
let removeLast=names.pop();

//Removing the first element
let removeFirst=names.shift();
console.log(names);

let sort=names.sort();
console.log(names);

for(let i=0;i<names.length;i++){
    console.log(names[i]);
}

//Slicing an array
let eng_names=names.slice(1,5);
console.log(eng_names);

//Spicing an array )Modifiying the orginal values based on the index
let splice=names.splice(1,2,"Syam","Naresh");
console.log(splice)

//concatinating the array
let fav_places=["Manali","Goa","Pondichery"];
let all_names=names.concat(fav_places);
console.log(all_names)

console.log(names)
console.log();




//HOISTING IN Javascript

console.log(x);
// Cannot access 'x' before initialization
let x="Ajay";


console.log(y);
//Undefined
var y ="Syam";

// Function Expression


const mutlifly=function(a,b){
    return a*b;
};
const product=mutlifly(4,10);
console.log('Function Expression product is :',product)



//arrow fucntions

const sub=(a,b)=>a-b;
const diff=sub(8,2);
console.log("Arrow function difference is "+diff);


//next class task
//function expression , arrow  functions
