//Type Conversion

/* let score = true;

let x = score.toString();

console.log(typeof(score));

let valueInNumber = Number(score);
console.log(valueInNumber);

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); */


//Math

/* let x = 0;
let roundoff = Math.sign(x);
console.log(roundoff);

let x = Math.pow(2,10);
let x = Math.sqrt(18);
let x = Math.sqrt(18);
let x = Math.max(18, 7, 10, 45, 93, 33);
let x = Math.random()*10;
let x = Math.log(2);
let x = Math.log2(5);

const min = 10;
const max = 20;
console.log((Math.random() * (max - min + 1))  + min)

const x = 10000000;

console.log(x.toLocaleString('en-US')); */


//Strings

/* f_name = "Neel";
l_name = "Raiyani";

console.log(`My name is ${f_name} ${l_name}`);

const myName = new String('Neelpatel');
console.log(myName.toLowerCase());
console.log(myName.charAt(7));
console.log(myName.indexOf('i'));
console.log(myName.substring(0,4));
console.log(myName.slice(-5)); */


//Arrays

/* const fruits = ["Apple", "Mango", "Banana", "Grapes", "Berries", "Muskmelon"];
fruits.push("Apple", "Mango", "Banana");
fruits.pop();

fruits.unshift("Pomogranate");
fruits.shift();

const new_fruits = fruits.slice(1,4);
console.log(1, new_fruits);

const new_fruits2 = fruits.splice(1,4);
console.log(2, new_fruits2);
console.log(fruits) */


//Objects

/* const person = {
    name : "Neel Raiyani",
    age: "18",
    city : "Rajkot",
    full_name : function fullname(){
        console.log(`My full name is ${this.name} and my age is ${this.age}`)
    }
}

person.full_name();
console.log(person.name);
console.log(person); */


//Date

/* let d = new Date();
console.log(d.toString());
console.log(d.toDateString());
console.log(d.toTimeString());
console.log(d.toLocaleString());
console.log(d.toLocaleDateString());

console.log(typeof d);

let myDate = Date.now();
console.log(myDate);
console.log(d.getTime())

console.log(d.getMonth() + 1);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());

console.log(d.getFullYear());

console.log(Math.floor(Date.now()/1000)); */


//JSON 

/* let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj = JSON.parse(text);
console.log(text);
console.log(obj);

const obj = {
    f_name: "Neel",
    l_name: "Raiyani",
    city: "Rajkot",
}
console.log(obj);
const new_obj = JSON.stringify(obj);
console.log(new_obj); */