"use strict"; //helps u to write cleaner code by preventing common mistakes, ex- declaring variables without datatypes is allowed, but in use-strict - NO

let a = "33"; 
console.log(typeof (a)); //string

let b = Number(a); //string conversion to number
console.log(typeof (b)); //number
console.log(b); // 33

let a1 = "7876g";
let b2 = Number(a1);
console.log(b2); //o/p is NaN not a number

//true<=>1 ; false<=>0
//""=>false; "piyush"=>true

let a3 = "jhj";
let b3 = Boolean(a3);
console.log(b3); //true

//Methods to convert string to number
// 1.Number()
console.log('12.34'); //12.34
// 2.parseInt() - ignores non-numeric part from only the end, and ignores everything after a decimal so use parseFloat for decimal
console.log(parseInt("45oj76")); // 45
console.log(parseInt("ok64778"));// NaN
console.log(parseInt("3.145"))   // 3
// 3.parseFloat()
console.log(parseFloat("3.2312ty")); // 3.2312
// 4.Unary+(Shortcut Method)
console.log(+"45"); //45
console.log(+"3.15"); //3.15
console.log(+"34a"); //NaN
// 5. Math.()
console.log(Math.ceil(3.1)) //4
console.log(Math.floor(3.9)) //3
console.log(Math.round(3.5)) //4
// 6.JSON.parse() - use only for pure number, this only shows error for non numeric character baki ke NaN return krte h methods
console.log(JSON.parse("3.7")); //3.7 //convert JSON string into JS Object //we recieve data as string like '{g, hhgj,...}' we use JSON.parse to turn it into usable JS data

let jsonString ='{"name": "Aman", "age": 22}';
let objec = JSON.parse(jsonString);
console.log(objec.age); //22
console.log(objec.name); //Aman

// let jsonString ='{"name": "Aman", "age": 22}';
// console.log(jsonString.age); //undefined
// console.log(jsonString.name); //undefined
//

a = 0.25 //js stores every no. using IEEE 754 64 bit format, since its a perfect binary like 1/4, 2, 4,8,1/4,1/16, 2^-3
console.log(a.toString(2)); //0.01 //base 2 //returns human readable binary version its not iee its just plain binary of 0.25

b = 0.55
console.log(b.toString(2)); //0.1000110011001100110011001100110011001100110011001101 //not perfect binary so js converts 0.55 to binary(which is repeating) and then IEEE 754 rounds it to fit into 64 bits

b = 125.125
console.log(b.toString(2)); //1111101.001

//

a = 0.1
b = 0.2
let r = 0.3
console.log(a.toPrecision(64));//0.1000000000000000055511151231257827021181583404541015625000000000

console.log(b.toPrecision(64));//0.2000000000000000111022302462515654042363166809082031250000000000

console.log(r.toPrecision(64));//0.2999999999999999888977697537484345957636833190917968750000000000

console.log((0.1 + 0.2).toPrecision(64));//0.3000000000000000444089209850062616169452667236328125000000000000

console.log(0.1 + 0.2 == 0.3)//false
console.log(0.1 + 0.2 === 0.3)//false

//its sol

function almostEqual(a, b){
    return Math.abs(a-b) < Number.EPSILON; //Number.EPSILON = 2.220e-16 its the smallest diference btw two no. js can detect
}

console.log(almostEqual(0.1 + 0.2, 0.3)); //true //if the no. is so small that its less than EPSILON, well consider the no. equal

//

console.log(200.2 * 2 == 400.4); //true
console.log(200.2 * 3 == 600.6); //false
console.log((200.2 * 10 * 3)/10 == 600.6); //true

console.log(200.2 * 3); //600.5999999999999

//

let value = 45;
let neg = -value;
console.log(neg); //-45

console.log("2" + 2); //22 //operations happen from left to right, uses type coercion where js automatically coverts one datatype to another when perfprming operations
console.log(Number("2") + 2); // 4
console.log(2 + "2"); //22
console.log("2" + 2 + 2); //222
console.log("2" + "2" + 2); //222
console.log(2 + 2 + "2"); //42
console.log("2" + 2 + "2" - 2 + "2" - "2"); //2200 //+ demands string values but - operator demands numeric values
console.log(true); //true
console.log(+true); //1
console.log(-true); //-1
console.log(false); //false
console.log(+false); //0
console.log(-false); //-0
console.log(+""); //0
console.log("2" > 1); //true
console.log(null == 0); //false //Equality does not convert null to 0, so undefined is not 0
console.log(null === 0); //false //Equality does not convert null to 0, so undefined is not 0
console.log(null > 0); //false
console.log(null < 0); //false
console.log(null >= 0); //true //relational operators does convert null to 0
console.log(null <= 0); //true
console.log(null == undefined); //true //== checks value but not check types and coersion can occur
console.log(null === undefined); //false //=== checks value and also check types and coersion can't occur



console.log("A" - 1); //NaN //for perform sub, *,/,% js tries but can't convert A to number
console.log("A" + 1); //A1
console.log("A" + "B"); //AB
console.log("A" * 1); //NaN

const accountName = "Piyush Sharma"; //can't reassigned and redeclared, it is Block Scoped
let accountEmail = "piyush@gmail.com"; //reassigned, can't redeclared in same scope as it is Block-scoped
var accountPassword = "123"; //reassined and redeclared, it is function-Scoped means value exists only inside fxns

// accountName="Sachin Sharma"; 
accountEmail = "sachin@gmail.com";
accountPassword = "890";

console.table([accountName, accountEmail, accountPassword]);

console.log(typeof undefined); //undefined //represents a variable that has been declared but not assigned a value

//Bugs in JS***************************************************

console.log(typeof null); //object 
console.log([] + []); //empty string("") bcz + operator triggers type coersion convertion arrays to string, [].toString()
console.log([1] + [2]); //12
console.log(true + true); //2
console.log([] + {}); //[object Object]
console.log({} + []); //[object Object]
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
console.log(NaN !== NaN); //false
console.log(parseInt("08")); //8
console.log(Math.max()); //-Infinity //default value is -Infinity since any real no. is greater than -Infinity
console.log(Math.min()); //Infinity //default value is Infinity since any real no. is smaller than Infinity
console.log(0.1 + 0.2 == 0.3); //false //bcz js uses Floating Point Precision 0.1 + 0.2 is 0.300000000000000004 not 0.3
console.log(0.1 + 0.2 === 0.3); //false
console.log((0.1 + 0.2).toFixed(2)); //0.30
console.log((0.1 + 0.2).toFixed(1) == 0.3); //true //corrected
console.log([] == false); //true //[]->""->0==0
console.log({} == false); //false





let id1 = Symbol("123"); //Symbol('123') //every symbol is unique
let id2 = Symbol("123");
console.log(id1 == id2); //false
console.log(id1 === id1);//true
console.log(id2 === id2);//true

console.table([id1, id2]);

//

let name1 = "piyush";
let name2 = name1; //name2 has the copy of name1(piyush)

name2 = "sachin";

console.log(name1); //piyush
console.log(name2); //sachin

//

name1 = 'chomu';
name2 = name1;
name1 = 'pagal';

console.log(name1); //pagal
console.log(name2); //chomu


//stores in heap memory i.e reference values
//ex. objects, Arrays, Functions, Dates, Maps & Sets
//Values that are directly stored in stack
//ex. Numbers, Strings, Booleans, null&Undefined, Symbol 

let obj1 = {
    name: "piyush",
}

let obj2 = obj1;

obj2.name = "sachin";

console.log(obj1.name, obj2.name); //sachin sachin 

//

obj1 ={
    name: "piyush"
}
obj2 = obj1;
obj1.name = 'sachin';
console.log(obj1.name, obj2.name); //sachin sachin 



//

           //-6-5-4-3-2-1     -ve indexing
           //012345           +ve indexing
let str = "Piyush";
let newstr = str.substring(0, 2); //.substring(startIndex(inclusive), endIndex(exclusive))
console.log(newstr); //Pi 

newstr = str.slice(-5, -2); //same as substring, supports -ve indexing unlike substring
console.log(newstr); //iyu

let Num = [1,2,3,4,5]
newstr = Num.splice(2, 2); //array.splice(start, deleteCount, item1, item2,...) //it modifies the og array
console.log(newstr); //[3, 4]
console.log(Num); //[1, 2, 5]

Num = [1,2,3,4,5]
newstr = Num.splice(2, 0, 'a', 'b');
console.log(newstr); //[]
console.log(Num); //[1,2,'a','b',3,4,5]

Num = [1,2,3,4,5]
newstr = Num.splice(3, 1, 'a', 'b');
console.log(newstr); //[4]
console.log(Num); //[1,2,3,'a','b',5]


const str1 = "       hlo boy ji  ";
console.log(str1);
newstr = str1.trim(); 
console.log(newstr); //hlo boy ji

const url = "https://piyush.com/piyush%20sharma"; 
newstr = url.replace("%20", "_");
console.log(newstr); //https://piyush.com/piyush_sharma

console.log(newstr.includes("_")); //true
console.log(url.split("%"));  // ["https://piyush.com/piyush", "20sharma"] //splits the string and make them element of array
console.log(url.split("p","3")); //['htt', 's://', 'iyush.com/'] //jis character se split krna h vo array ke element m hoga hi nhi

// 

value = 100.233; //Simple Number(Primitive Type), stored in stack
console.log(typeof value); //number
value = new Number(100.233); //Object (Number Wrapper: creates a number object), stored in heap as a object
console.log(typeof value); //object
console.log(value); //{100.233}
console.log(value.toString()); //100.233
console.log(value.toString().length); //7
console.log(value.toFixed(4)); //100.2330

const hundreds = 10000000;
console.log(hundreds.toLocaleString()); //10,000,000 
console.log(hundreds.toLocaleString("en-IN")); //1,00,00,00

// MATHS***************************************

console.log(Math); //math object
console.log(Math.abs(-4)); //4 //returns absolute positive value of no.
console.log(Math.abs(4)); //4
console.log(Math.round(4.3)); //4
console.log(Math.round(4.5)); //5
console.log(Math.ceil(4.1)); //5
console.log(Math.floor(4.9)); //4
console.log(Math.pow(7, 3)); //343
console.log(Math.max(1, 3, 8)); //8
console.log(Math.min(1, 3, 8)); //1
console.log(Math.trunc(89.56)) //89 //removes decimal part only
console.log(Math.trunc(-67.96)) //-67

let max = 5;
let min = 1;
let randomNum = Math.ceil((Math.random() * (max - min + 1)) + min ); 
console.log(randomNum);

console.log(((Math.random() * 10) + 1).toFixed()); //toFixed returns a string not a number

let randomNumberGenerator = Math.floor(Math.random()*10 + 1);
console.log(randomNumberGenerator);

min = 10;
max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min );


// Dates & Time****************************************** 

let myDate = Date(); //without new, returns current date as string o/w object
console.log(typeof myDate); //string

myDate = new Date(); 
console.log(typeof myDate); //object
console.log(myDate); //Sat Feb 15 2025 20:04:31 GMT+0530 (India Standard Time) is a Date object
console.log(myDate.toString()); //Sat Feb 15 2025 20:04:31 GMT+0530 (India Standard Time) is string
console.log(myDate.toDateString()); // Sat Feb 15 2025 //only returns date as string 
console.log(myDate.toLocaleDateString()); // mm/dd/yy
console.log(myDate.toJSON()); //2025-02-15T14:43:48.911Z //converts date object to ISO string
console.log(myDate.toLocaleDateString(), myDate.toLocaleTimeString());                   // 6/13/2025 12:43:48 PM //default for US 
console.log(myDate.toLocaleDateString('en-IN'), myDate.toLocaleTimeString('en-IN'));     // 13/6/2025 12:43:48 pm

console.log(myDate.getHours()); //2
console.log(myDate.getDay()); //6
console.log(myDate.getMonth() + 1); //1+1=2


myDate = new Date(2025, 1, 5, 14, 20, 45); //Months Starts from 0
console.log(myDate.toLocaleDateString(), myDate.toLocaleTimeString()); //2/5/2025 2:20:45 PM

myDate = new Date("02-05-2025"); //
console.log(myDate.toLocaleString()); //2/5/2025, 12:00:00 AM

let myTimestamp = Date.now(); //returns timestamps in milliseconds since January 1, 1970  // it's type is number
console.log(myTimestamp); //13 digit miliseconds
console.log(myDate.getTime());
console.log(Math.floor(myTimestamp / 100000000000));


//ARRAY'S & Functions***********************************


str = ["hlo", "baby", "hola"];  //it is an array of string elements so can be mutable
console.log(str); //['hlo', 'baby', 'hola']
str[2] = "Namaste"; 
console.log(str); //['hlo', 'baby', 'Namaste']

let string1 = "kese ho";
string1 = "thik hu"; //this is reassignning the variable in js
console.log(string1); //thik hu


// let string2 = "IronMan";
// string2[5] = "e";
// console.log(string2); //unchanged


let marks = [1, 8, 16];
console.log(marks); //[1, 8, 16]
console.log(marks.length); //3

console.log(typeof (marks)); //object
console.log(marks[0], marks[2]); //1 16 //array are mutable but not string

marks[2] = 20;
console.log(marks); //[1, 8, 20]

let fruitsPrice = [200, 500, 450];
console.log(fruitsPrice);
console.log(typeof(fruitsPrice));

let s3 = fruitsPrice.toString(); 
console.log(s3); //200, 500, 450
console.log(typeof(s3)); //string


let arr = Array(1, 2, 3, 4, 5); //Array is a constructor fxn(special fxn used to create multiple objects with same structure n behavior) that lets us create new array objects 
console.log(arr); //[1, 2, 3, 4, 5]
console.log(typeof arr); //object

arr.push(6, 7);  //  [1, 2, 3, 4, 5, 6, 7] //Add element at end //returns new length of arr
arr.pop();       //  [1, 2, 3, 4, 5, 6] //Remove element from end //returns last element of arr //Doesn't take any arguments
arr.unshift(55, 44); //  [55,44, 1, 2, 3, 4, 5, 6] //Add element at beggining //return arr new length
arr.shift();     //  [44, 1, 2, 3, 4, 5, 6] //Removes the first Element from an array returns it //Doesn't take any arguments
console.log(arr);//  [44, 1, 2, 3, 4, 5, 6]
console.log(+arr.includes(3)); //1 //by using + boolean gets coverted to number value 1
console.log(true == 1); //true

console.log(arr.join()); //44,1,2,3,4,5,6 //convert number arr to string, inside join the no. is default separated by comma(,) but if u want to separate them by whatever write inside join
console.log(arr.join(" * ")); //44 * 1 * 2 * 3 * 4 * 5 * 6  //convert number arr to string, inside join the no. is default separated by comma(,) but if u want to separate them by whatever write inside join
console.log(typeof arr); //object


console.log("A ", arr); //A [44, 1, 2, 3, 4, 5, 6]
console.log(arr.slice(0, 4)); // [44, 1, 2, 3]         //.slice(startIndex(inclusive), endIndex(exclusive))
console.log("Og array after slice :", arr); //[44, 1, 2, 3, 4, 5, 6]
console.log("B", arr.splice(3, 2));  //[3, 4]       //.splice(startIndex(inclusive), deleteCount)
console.log("Og array after splice :", arr); //[44, 1, 2, 5, 6]

let marvel = ["thor", "ironman", "Agatha"];
let DC     = ["joker", "robin", "superman"];


// marvel.push(DC); 
// console.log(marvel); //["thor", "ironman", "Agatha",  ["joker", "robin", "superman"]]
// console.log(marvel[3]); //["joker", "robin", "superman"]
// console.log(marvel[3][2]); //superman

let concatAll = marvel.concat(DC); 
console.log(concatAll);   //["thor", "ironman", "Agatha", "joker", "robin", "superman"]

let usingSpread = [...marvel, ...DC]; //using spread property
console.log(usingSpread); //["thor", "ironman", "Agatha", "joker", "robin", "superman"]

usingSpread = [...arr, ...arr]; //using spread property
console.log(usingSpread); //[44, 1, 2, 5, 6, 44, 1, 2, 5, 6]

//spread operator(...) : Used to copy, merge, or pass values
//ex
a = [1, 2, 3]
b = [77,...a]
console.log(b); //[77, 1, 2, 3]

//Rest Operator(...) : Used in fxn Parameters or destructuring

let[first, ...restss] = [1,2,3,4,5];
console.log(first);  //1
console.log(restss); //[2,3,4,5]
 
//without using rest
function AdD(a){
    return a.reduce((acc, num) =>{
        return acc + num;
    }, 0)
}
console.log(AdD([1,2,3,4,5])); //15

//with using rest
function ADD(...nums){
    return nums.reduce((acc, num) =>{
        return acc + num;
    }, 0)
}
console.log(ADD(1,2,3,4)); //10


arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
let newarr=arr.flat(1); //flat method is used of flatten nested array, default value is 1 ie flatten only the 1st level
console.log(newarr); //[1, 2, 3, 4, 5, 6, 7, 6, 7, [4, 5]]

//.some() : Checks if at least one element in an array passes a test, returns true or false
arr = [1, 3, 5, 8];
let hasEven = arr.some((num) => num%2 === 0);
console.log(hasEven); //true(8 is even)

console.log(newarr.some(arr=>arr>5)); //true

console.log(newarr.sort()); //[1,2,3,4,4,5,5,6,6,7,7]



console.log(Array.isArray("Piyush")); //false
console.log(Array.isArray(["Piyush"])); //true
console.log(Array.isArray([1900, 700])); //true
console.log(Array.from("Piyush")); //['P', 'i', 'y', 'u', 's', 'h']
console.log(Array.from("Nomad Land")); //['N', 'o', 'm', 'a', 'd', ' ', 'L', 'a', 'n', 'd']
console.log(Array.from({name: "Piyush"})); //{} //gives empty array is we have to tell it kiska array bnana h keys ka ya value ka?
console.log(Array.of("Guu, 5", 88, 99)) // ['Guu, 5', 88, 99]

console.log(Array.of(5)); // [5] 
console.log(Array(5)); // [empty x 5]
console.log(Array(1,2,3)); // [1, 2, 3]

let score1="100";
let score2=200;
let score3=300;
let score4=400;

console.log(Array.of(score1, score2, score3, score4)); //['100', 200, 300, 400]


//OBJECTS*************************************
//singleton(object.name)(create an obj one time then changes occur or use many times) is made only using constructor but using laterals it's not made
//keys in obj always considered as string or symbol

obj1 = {
    "@name" : "piyush",
    "age is"  : 20
}

console.log(obj1['@name']);  //piyush
console.log(obj1['age is']); //20

// obj2 = {
//     @name : "piyush",
//     age is : 20
// }


//using object literals
let mySymbol = Symbol("key1") //can access it later //if we directly use Symbol inside obj then here inside obj the Symbol is not the same and when accessing its different

const obj=
{
    name: "Piyush",
    "full Name":"Piyush Sharma",
    age: 18,
    days : ["Saturday","Sunday"],
    [mySymbol]: "SymbolValue",
}

console.log(obj.days); //['Saturday', 'Sunday']
console.log(obj["days"]); //['Saturday', 'Sunday']
// console.log(obj[days]); //['Saturday', 'Sunday']


// console.log(obj.full Name); //for space btw them this method shows error
console.log(obj["full Name"]); //Piyush Sharma 

console.log(obj.mySymbol); //undefined bcz mySymbol is not a string
console.log(obj[mySymbol]); // SymbolValue
console.log(typeof obj[mySymbol]); //string //its still a string but we want symbol
console.log(obj); //{name: 'Piyush', fullName: 'Piyush Sharma', age: 18, days: Array(2), Symbol(key1): 'SymbolValue'}

// obj.name="Sachin";
// delete obj.days;
// obj.hlo="hello";

// Object.freeze(obj);
// obj.age=56; //shows error

// console.log(obj);

obj.greeting = function(){
    console.log(`Kaise ho ${this.name}`);
}

console.log(obj.greeting); //ƒ (){ console.log(`Kaise ho ${this.name}`); }
console.log(obj.greeting()); //Kaise ho Piyush

//Declare Object Using Singleton

let SingletonObj = new Object();
SingletonObj.id="123abc";
SingletonObj.name="Samay";
SingletonObj.isLoggedIn=false;
console.log(SingletonObj);


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname: {
            firstname: "Piyush",
            lastname:"Sharma",
        }
    }
}

console.log(regularUser.userfullname?.lastname); //undefined
console.log(regularUser.fullName?.userfullname.lastname); // '?' avoid runtime crashes when u are not sure that is a property inside obj exist

obj1={1:"a", 2:"b"};
obj2={3:"c", 4:"d"};

let obj3={obj1, obj2};
console.log(obj3); //{obj1: {…}, obj2: {…}}

obj3={ ...obj1, ...obj2 };
console.log(obj3);

let target = { a : 1, b:2}
let source = {c : 3, d:4}

let newObj = Object.assign(target, source); //{ a : 1, b:2, c : 3, d:4}

console.log(newObj);

//without {}modifies the og array
const original = { a: 1 };
const updates = { b: 2 };

Object.assign(original, updates);

console.log(original); // 👉 { a: 1, b: 2 } ✅ Modified

//with {} doesn't 
const original = { a: 1 };
const updates = { b: 2 };

const newObject = Object.assign({}, original, updates);

console.log(original);   // 👉 { a: 1 } ✅ Unchanged
console.log(newObject);  // 👉 { a: 1, b: 2 }

//Object.assign also rewrites the value of target obj from source obj
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

const result = Object.assign({}, obj1, obj2);

console.log(result); // 👉 { a: 1, b: 3, c: 4 }

//

obj3=Object.assign({}, obj1, obj2); //here 1st empty obj act as target and obj1 and obj2 act as source
console.log(obj3); //{1:"a", 2:"b", 3:"c", 4:"d"}

// obj3={...obj1,...obj2}
console.log({...obj1,...obj2});

console.log(Object.keys(obj3)); //[1, 2, 3, 4] //converts keys of obj to array elements
console.log(Object.values(obj3)); // ['a', 'b', 'c', 'd'] converts values of obj to array elements
console.log(Object.entries(obj3)); //[ ['1', 'a'], ['2', 'b'], ['3', 'c'] ]


console.log(obj3.hasOwnProperty("2")); //true //it only check for keys
console.log(obj3.hasOwnProperty("a")); //false

a={}
b={
    name: "bhumika",
}
let c={
    name: "chintu"
}
a[b]={
    name: "Ankit",
}
a[c]={
    name: "rahul", //it overwrites the first value
}

console.log(a[b]);
console.log(a[c]);
console.log(a[a]);

//object de-structure***********************************************

//without Destructuring:
// let obj4={
//     course: "javaScript",
//     price:"999",
//     teacher:"hitesh",
// }
// const name = obj4.course;
// const hloTeacher = obj4.teacher;

// console.log(name);
// console.log(hloTeacher);

//with Destructuring
let obj4={
    course: "javaScript",
    price:"999",
    teacher:"hitesh",
}

let {course: cor, price, teacher}=obj4;
console.log(cor, price, teacher); //javaScript 999 hitesh

let{course:cor1,  price: pr}=obj4;
console.log(cor1, pr); // javaScript 999 //prints only values od designated keys 

//ex
let object = {
    contact:'abcxxx',
    Applied:'No',
}
let {contact, Applied : Ap} = object; 
console.log(object.contact, object.Ap); //abcxxx No
console.log(contact, Ap); //abcxxx No


//JSON**************************************************************

// {
//     "name":"piyush",
//     "courseDuration": "January",
//     "price": 878,
// }

//FunctionsWithObjects and Array***********************************
//Rest Operator : (...)allows us to group remaining elements into an array

function hlo(...num){
    return num;
}
console.log(hlo(1,2,3,4,5)); //[1, 2, 3, 4, 5]

function cal0(num0)
{
    return num0;
}
let num = cal0(1,2,3);
console.log(num); //1
console.log(typeof(num)); //number

function cal1(num1)
{
    return num1;
}
console.log(cal1(100, 200, 300)); //100
console.log(typeof(cal1)); //function

function cal2(...num1) 
{
    return num1;
}
console.log(cal2(100, 200, 300)); //[100, 200, 300] //now array of 100, 200, 300 is returned

function hyy(n1, n2, n3){
    return n1, n2, n3;
}
console.log(hyy(11,22,33)); //33

function cal3(val1, val2,...num1) //rest operator returns as such passed arguments as element of array
{
    return num1; //in js we only can return one variables                        
}
console.log(cal3(100, 200, 300, 400, 500)); //[300, 400, 500]

//to return multiple values from function use object or array    
//ex-1
function helo(num1, num2, num3){
    return [num1, num2, num3];
}
console.log(helo(1,2,3,4,5)); //[1, 2, 3]

//ex-2
function cal4(num1, num2, num3)
{
    return{num1, num2, num3};
}
let result = cal4(11, 22, 33, 44, 55);
console.log(result); //{num1: 11, num2: 22, num3: 33}
console.log(result.num1, result.num2, result.num3); //11 22 33

//ex-3(failed)
function year(a, b, c){
    return a ,b, c;
}
let saal = year(1,2,3);
console.log(saal); //3

//ex-2(right) using array
function year1(a, b, c){
    return [a ,b, c];
}
let saal1 = year1(1,2,3);
console.log(saal1); //[1,2,3]

function handleObj(anyObj)
{
    console.log(`Course is ${anyObj.course} and price is ${anyObj.price}`);
}    

handleObj(obj4); //Course is javaScript and price is 999
handleObj({
    course: "Python",
    price:"free",
});

//SCOPE = {}**********************************
//in nested fxn child parent ko access kr payega but vice versa not true

function one()
{
    const username="piyush";

    function two()
    {
        const website="www.youtube.com";
        console.log(username); //piyush
    }

    // console.log(website); // error website is not defined

    two(); 
}

one();

//ex


//HOISTING : declaratin of var, fxn & classes are moved to top of their scope**************************************

addone(5); //correct //7
function addone(num)
{
    console.log(num+2);
}


// addtwo(2); //shows error as need to defined after function
let add2 = function addtwo(num)
{
    console.log(num+2);
}
add2(2); //4

//ex
// console.log(naame); //shows error
let naame = 'piyush';
console.log(naame); //piyush

//ex
console.log(naame2); //undefined
var naame2 = 'piyush';
console.log(naame2); //piyush

//ex
// console.log(naame3); //error
const naame3 = 'piyush';
console.log(naame3); //piyush


//THIS(current context ko refer krta h) & ARROW FXN**************************************

let user={
    username: "Ramlal Sharma",
    price: 1000000,
    welcomeMsg: function()
    {
        console.log(`Welcome, ${this.username}`);
        console.log(this); //{username: 'Ramlal Sharma', price: 1000000, welcomeMsg: ƒ}
    }
}

user.welcomeMsg(); //Welcome, Ramlal Sharma + this...
user.username="Sam Rathore";
user.welcomeMsg(); //Welcome, Sam Rathore + this...

console.log(this); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// function chai() //not used this inside fxn, shows error
// {
//     let username="Danish";
//     console.log(this); //undefined when use strict, shows window when use strict not used
//     console.log(this.username); //error
// }
// chai();

let chai=()=>{
    let username="Danish";   
    console.log(this); //window
    console.log(this.username); //undefined
}
chai();


// Note : Inside fxn using strict 'this' shows undefined, shows window when strict not used
// Note : Inside arrow fxn this shows window object 

// let addTwoNum = (num1, num2) => { return num1+num2; } //if using return then must use{}
// let addTwoNum = (num1, num2) => num1 + num2; //Implicit return
// let addTwoNum = (num1, num2) => (num1 + num2);  
let addTwoNum = (num1, num2) => ({username: "Aansh Kumar", price: 1800});
console.log(addTwoNum(1,5)); //{username: 'Aansh Kumar', price: 1800}

const Addition = (num1, num2) => {
    return num1 + num2;
}
console.log(Addition(1,3)); //5

//Immediately Invoked Function Expressions(IIFE)******************
//is a fxn that runs immediately after being defined, 
//we use it to avoid polluting the global variable(prevents variable conflicts)
//To execute fxn only once right after its creation, no calling of fxn & no fxn name are required
//cannot called again

// ex
(function hello(){
    console.log('Hell ooo');
})();

// ex
((jaggery) => {
    console.log(`Good Ji ${jaggery}`);
})('Piyush');

(function()
{
    let user="Alice";
    console.log(user);  
})();

(() =>
{
    let user="Bob";
    console.log(user);
})();

()=>{
    console.log();
    
}
((name, num1, num2)=>
{
    console.log(`${name}, and sum is ${num1+num2}`);
})("Bob", 4, 5);



//CALL STACK****************************************

//js Uses Two Phases : 1) Memory Creation Phase(Hoisting):Js scans code before running it, it stores fxn & variable declarations in memory 
 
let val1=10;
let val2=10;

function addNum(num1, num2){
    let total=num1+num2;
    return total;
}

let result1=addNum(val1, val2); 
let result2=addNum(2, 1); 
console.log(result1); //20
console.log(result2); //3

/*
1)first code runs on global execution using this, GEC is default context where js code is executed, this keyword is used to bound to global object
2)then Memory Creation Phase : we get all variables name and undefined is stored in every variables(val1, val2->undefined), and fxn definition is stored inside addNum(addNum->fxn definition), result1,resuly->undefined
3)In Execution Phase : val1<-10,val2<-10 , addNum->makes a new box includes i)new variable Environment + ii)Execution thread again Memory phase id done on this box
  val1, val2->undefined, total->undefined then execution context  ,   num1->10, num2->10  ,  total->20 then total value is return to the main Global Execution then after this 2nd Executional context box is deleted
  same box for result2 */

//CONTROL FLOW**********************************

if(true)
{
  var power="fly"; //var has scope completely globall x
  console.log(`Your Power is ${power}`); //Your Power is fly
}
console.log(`Your Power is ${power}`); //Your Power is fly

if(true) console.log("test1"), console.log("test2"); //test1 test2

//Falsy Value 
// false, 0, -0, (BigInt) 0n, "", null, undefined, NaN, document.all

//Truthy Values
//"0", "false", " ", "0n", [], {}, function(){}, document

if([]){
    console.log("truthy");
}
else{
    console.log("falsy");
}

// false==0, false=="", 0==""  are all true

//Nullish Coalescing Operator (??) : It returns right-hand operand when it's left-hand operand is null or undefined, o/w it returns the left-hand, null undefined***********

let user1;
let defaultName="Guest";
let userName1=user1??defaultName;
console.log(userName1); //Guest

val1 = null ?? 3;
console.log(val1); //3

val1 = null ?? undefined;
console.log(val1); //undefined

val1 = undefined ?? null;
console.log(val1); //null

val1 = undefined ?? null ?? 90;
console.log(val1); //90

for (let index = 0; index <= 10; index++) {
    if(index==5)
    {
        console.log("5 is here");
        break; //loop se bahar
        continue; //excluded one condition value
    }
    console.log(`Value of i is ${index}`);
}

//Higher Order Array Loops*******************************


//Maps : used to transform each element of array and create a new array, doesn't modify og array, takes callback fxn
const map = new Map();
map.set("IN", "India")
map.set("USA", "United States Of America")
map.set("Fr", "France")
map.set("IN", "India")
console.log(map); //{'IN' => 'India', 'USA' => 'United States Of America', 'Fr' => 'France'}

arr = [10, 20, 30];
newarr = arr.map( num => { return num*2 });
console.log(newarr); //[20, 40, 60]
console.log(arr); //[10, 20, 30]



//for of : iterates for array, string, map etc.
for(let i of map){
    console.log(i); //['IN', 'India'] ['USA', 'United States Of America'] ['Fr', 'France']
}

for(let [i] of map){ //prints only keys values
    console.log(i); //IN USA Fr
}

for(let [keys, values] of map){
    console.log(keys, values); //IN India USA United States Of America Fr France
}

for(let [keys, values] of map){
    console.log(keys,":-",values); //IN :- India USA :- United States Of America Fr :- France
}

let obj10 = {
    contact :98133,
    raaj :'ji',
    baby :'rajput',
}
// for(let keys of obj10){
//     console.log(keys); //obj10 is not iterable
// }

for(let [keys, value] of Object.entries(obj10)){ 
    console.log(keys+':-'+value); //yes
}

//for in : used to iterate over the keys of an object, works for both obj and array
let obj5={
    game1 : "Mario",
    game2 : "Speed-Run",
    game3 : "Granny",
}

for(let keys in obj5){
    console.log(keys); //game1 game2 game3 
}

for(let values in obj5){
    console.log(obj5[values]); //Mario Speed-Run Granny
}

for(let keys in obj5){
    console.log(`${keys} :- ${obj5[keys]}`); //game1 : Mario game2 : Speed-Run game3 : Granny
}

let runner = {
    speed : "fastest",
    age : 22+' Years Old',
    sweat : 200+'px'
}
for(let keys in runner){
    console.log(`${keys} :- ${runner.keys}`);
}

//for in loop can also be used for array but it'll only print keys/indexes
arr=["c++", "JS", "Ruby", "SQL"]
for(let i in arr){
    console.log(i); //0 1 2 3 
}
for(let i in arr){
    console.log(arr[i]); //c++ JS Ruby SQL
}

arr = [1,1,22,33,4]
for(let i in arr){
    console.log(arr[i]); // 1 1 22 33 4
}

//forEach(function is must inside forEach, doesn't return any values, only works on array maps n sets, can make changes(modify) in og array)
let coding2 = ["php", "Java", "python"];

let c2 = coding2.forEach( function(val){  
    console.log(val); //php Java python
    return val;
});
console.log(c2); //undefined

coding2.forEach( function(val){   //inside forEach callback fxn is used so no fxn name is required 
    console.log(val); //php Java python
});

coding2.forEach( function(item, index, array){   
    console.log(item, index, array); //php    0 ['php', 'Java', 'python']
                                     //Java   1 ['php', 'Java', 'python']
                                     //python 2 ['php', 'Java', 'python']
});

coding2.forEach( (val) => {   //inside forEach callback arrow fxn is used so no fxn name and "=" is required 
    console.log(val); //php Java python
}); 

coding2.forEach( (item, index, array) => {
    console.log(item, index, array); //php    0 ['php', 'Java', 'python']
                                     //Java   1 ['php', 'Java', 'python']
                                     //python 2 ['php', 'Java', 'python']
}); 

//ex of forEach doesn't modify the og array
arr = [11,22,33,44,55]
arr.forEach((val)=>{
    console.log(val*2); //11 22 33 44 55 
})
console.log(arr); //[11, 22, 33, 44, 55]

//ex of forEach modifies the og array
arr = [1,2,3,4,5]
arr.forEach((num, index, array)=>{       
    array[index] = num*2;
    // console.log(num*10); // 10 20 30 40 50
})
console.log(arr); // [2, 4, 6, 8, 10]

function printMe(item){
    console.log(item);
} 
coding2.forEach(printMe); //php Java python

//[{}, {}, {}]
//we cant use forEach on objects directly so convert the obj into array to iterate
let mha = {
    top1 : 'Deku',
    top2 : 'Bakugo',
    top3 : 'All Might'
}
Object.entries(mha).forEach((value)=>{
    console.log(value); //['top1', 'Deku'] ['top2', 'Bakugo'] ['top3', 'All Might']
});

Object.entries(mha).forEach(([key, value])=>{
    console.log(`${key} :- ${value}`); //top1 :- Deku top2 :- Bakugo top3 :- All Might
});

Object.values(mha).forEach((val)=>{
    console.log(val); // Deku Bakugo All Might
})

let coding3 = [
    {
        langName : "A",
        langFile : "a.s",
        age : 70
    },

    {
        langName : "B",
        langFile : "b.s",
        age : 80
    },

    {
        langName : "C",
        langFile : "c.s",
        age : 50
    },
]

coding3.forEach((val)=>{
    console.log(val); //{langName: 'A', langFile: 'a.s', age: 70}
                      //{langName: 'B', langFile: 'b.s', age: 80}
                      //{langName: 'C', langFile: 'c.s', age: 50}
})

coding3.forEach((val)=>{ 
    console.log(val.langName); //A B C
})

coding3.forEach((val)=>{
    console.log(val.langFile); //a.s b.s c.s
})

//for each always return undefined
result = arr.forEach((val)=>{
    console.log(val);
    return val;
})
console.log(result); //undefined


//FILTERS***********************************
//forEach doesn't return values but filter does, filter also used callback fxn as in forEach, doesn't modify og array instead it creates a new array with elements that match the conditions

let myNums = [1,2,3,4,5,6,7,8,9,10];

let newNums = myNums.filter( (val)=>{
    return val>4;
})
console.log(newNums); //[5, 6, 7, 8, 9, 10]

//same do it by forEach 

let newNums1 = [];
myNums.forEach( (val)=>{ 
    if(val>4)
    {
        newNums1.push(val);
    }
})
console.log(newNums1);

let evenNo = [];
myNums.forEach((val)=>{
    if(val%2==0){
        evenNo.push(val);
    }
})
console.log(evenNo); //[2, 4, 6, 8, 10]

//

let books = [
    { title: "Book 1", genre : "Fiction", publish: "1986"},
    { title: "Book 2", genre : "History", publish: "1990"},
    { title: "Book 3", genre : "Drama",   publish: "1980"},
    { title: "Book 4", genre : "Fiction", publish: "1945"},
    { title: "Book 5", genre : "History", publish: "2002"},
]

let userBooks = books.filter( (bk) => bk.genre==="History")
console.log(userBooks); //{title: 'Book 2', genre: 'History', publish: '1990'} 
                        //{title: 'Book 5', genre: 'History', publish: '2002'}

userBooks = books.filter( (bk) => { return bk.publish>1985 } )
console.log(userBooks);

userBooks = books.filter( (bk) =>  bk.genre==="History" && bk.publish>1985 )
console.log(userBooks);

//add 10 to every element in arr(map is most prefabale one)
//filter can't be used as it can't modify 

myNums.forEach((val)=>{
    console.log(val+10); //11 12 ... 20 
})

myNums.forEach((value, index, array)=>{
    array[index]=value+10; //Modifies the Og array
});
console.log(myNums); //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//use map to make changes in new array instead of modifying og one

let c1 = myNums.map((value)=>{return value+10});
console.log(c1); //[21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

//Q) Add +1 to each element in array

//1.Using forEach
let arr1 = [1,2,3,4,5];
let newarr1 = arr1.forEach((num, index, array)=>{
    array[index]=num+1;
});
console.log(newarr1);  //undefined(forEach always returns undefined)
console.log(arr1);     //[2, 3, 4, 5, 6](changes the og array)

//2.Using filter(least preferable wrong approach)
let arr2 = [1,2,3,4,5];
let newarr2 = arr2.filter((num, index, array) => {
    array[index]=num+1;
    return true;
})
console.log(newarr2); //[1, 2, 3, 4, 5]
console.log(arr2);    //[2, 3, 4, 5, 6]

//3.Using map
let arr3 = [1,2,3,4,5];
let newarr3 = arr3.map((num)=>{
    return num+1;
})
console.log(newarr3); //[2, 3, 4, 5, 6]
console.log(arr3);    //[1, 2, 3, 4, 5]
 
//Chaining

c1 = myNums //don't use ";"
        .map((num) => num-10)
        .map((num) => num**2)
        .filter((num) => num>=40)
console.log(c1);

//.reduce : reduce array to get results as only single value, 2nd argument after callback function is initialvalue, taking its value to 0(default) ensures acc(val1) always starts with 0

arr=[1,2,3,4,5]
newarr=arr.reduce((val1, val2)=>{ return val1 + val2 }, 0)
console.log(newarr);

newarr=arr.reduce(function (result, currentValue){
    console.log(`Accumulator : ${result} and CurrentValue : ${currentValue}`);
    return result + currentValue;
},5) 
console.log(newarr); //ans is 20 bcz its initalValue of acc is 5

newarr=arr.reduce( (result, currentValue) => result+currentValue, 0)
console.log(newarr);

//find the max number      
arr = [44,3,34,67,43,78,87,88,89];
newarr = arr.reduce((acc, curr)=>{
    return curr>acc ? curr : acc;
}) 
console.log(newarr); //89

arr = [44,3,34,67,43,78,87,88,89];
newarr = arr.reduce((acc, curr)=>{
    return curr>acc ? curr : acc;
}, arr[0])
console.log(newarr); //89