//! 20 Ağustos 2022, Cumartesi

//? Function Declaration Syntax

// function declaration
// function function_name() {
// function body
// }

// function invocation (calling)
// function_name();

//* Example greeting
function greet() {
  console.log("Hello");
} // it will not output until called!
// calling function
greet();
greet();
greet();

function selamlama() {
  console.log(`Merhaba`);
}
selamlama();

//! Classification of Functions
// 1-Named functions
// 2-Function expressions
// 3-Arrow functions
// 4-Immediately Invoked Function Expressions (IIFE)
// Function() constructor(*)
// Generator functions(*)

//! Named Functions
console.log(`---Named Functions---`);
// ➤ As the title suggests, regular declaration of a function which has a name, for example greet function in the previous page.

sayHi();
// function declaration
function sayHi() {
  console.log("Hello Named Function!");
} // Named function declarations are hoisted.

//todo, Returning a value from functions
// simply using return keyword we get an output
// return keyword is used to pass the result at the end of function execution. If it is dismissed or no value passed right after then undefined is returned.
// return keywords ends the further execution of function code.

function sayHi1() {
  return "Hi!";
}
function sayHi2() {
  console.log("Say Hi 2!");
}
sayHi1(); // no output to the console
console.log(typeof sayHi1()); // string
console.log(typeof sayHi1); // function
sayHi2(); // Hello!
console.log(typeof sayHi2()); // undefined
console.log(typeof sayHi2); // function

//todo, Passing values to functions
// ➤ In JavaScript parameters are passed by value, meaning that outer variable will not be changeable inside function body.
function sayHi3(userName) {
  console.log(`Hello! ${userName}`);
}
sayHi3("Mark");
sayHi3(); // what will be the output? --> undefined, çünkü parametresi yok

function sayHi4(userName, company) {
  console.log(`Hello! ${userName} of ${company}`);
  company = "Apple";
  console.log(`Hello! ${userName} of ${company}`);
}
let userName = "Mark";
let company = "Clarusway";
sayHi4(userName, company);
console.log(company);
sayHi4("Matthew"); // what will be the output?

//todo, Object type variables are passed by reference, meaning that, object's attributes can be changed within function body. Be advised that not the object as a whole.

var anObj = { name: "Matthew" };
console.log(anObj);
// {name: "Matthew"} bir obje tanımladı

function changeObj(obj) {
  obj.name = "Mark";
}
changeObj(anObj);
console.log(anObj);
// {name: "Mark"} --> içine aldığı objenin valuesini değiştirdi
// Matthew iken Mark oldu

function changeObj2(obj) {
  obj = { name: "Mike" };
}
changeObj2(anObj);
console.log(anObj);
// {name: "Mark"}  Mike olarak tanımlanan value Mark oldu

//! 🎗️ Note:
// In JavaScript, hoisting is a characteristic that allows you to use a function or variable before declaring it. A function can be called before declaring it. For example,
greet();
function greet() {
  console.log("Greet Hello");
}
// The function 'greet' is called before it is declared in the above program, and the output is displayed. This is because of the hoisting.

// Only declarations are hoisted when a function is used as an expression, hence an error occurs. As an example;
// program to print the text
// greet1();
// let greet1 = function() {
//     console.log('Hello');
// }
//! burada hata verecektir.
// Output: // Uncaught ReferenceError: greet is not defined
// In your program, hoisting can have unfavorable consequences. Also, to avoid hoisting, define variables and functions first before calling them. When dealing with variables, let is preferable to var.




//todo,  Anonymous functions
//* Named function
function sayHi5() {
  return "Hi5 Hello!";
}
sayHi5();

// Anonymous function --> return olduğundan çıktısı yok
const sayHi6 = function () {
  return "Hi6 Hello!";
};
sayHi6(); //çıktı vermez
console.log(sayHi6()); // Hi6 Hello! çıktısını verir.




//* anonymous function expression
const sayHi7 = function() {
    console.log("Hello!");
    console.trace();
};
// named function expression
const sayHi8 = function greett(){
    console.log("Hello!");
    console.trace();
};
sayHi7();
sayHi8();

//! Note:
// Function expressions in JavaScript are not hoisted, unlike function declaration. You can't use function expressions before you create them:
// If you declare a named function expression. This name is then local only to the function body (scope). This is used for debugging and required in ES5 only


//! Arrow Functions

// SINGLE-LINE BLOCK
// const sumNumbers = number => number +number;


// MULTI-LINE BLOCK
// const sumNumbers = number => {
//     const sum = number +number;
//     return sum;
// }

// Regular Function
let aa = 4;
let bb = 2;
function f1(){
  return aa + bb + 100;
}
console.log(f1()); // 4+2+100=106


let hundredify = (a, b) => a + b + 100;
console.log(hundredify(4, 2)); // 4+2+100=106


//! Differences & Limitations:
// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have arguments, or new.target keywords.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.



//! Immediately Invoked Function Expressions (IIFE)
// ➤ Sometimes you don't want to have your function accessible/stored as a variable. You can create an Immediately Invoked Function Expression (IIFE for short). These are essentially self-executing anonymous functions. They have access to the surrounding scope, but the function itself and any internal variables will be inaccessible from outside.

// ➤ An important thing to note about IIFE is that even if you name your function, IIFE are not hoisted like standard functions are and cannot be called by the function name they are declared with.

// named IIFE recursive
(function trian(num) {
    if (num === 1) return 1;
    return num + trian(num-1);
})(3);
// with anonymous function expression non recursive
(function(num) {
    return num*(num +1)/2;
})(3);



//todo, Default Parameters
// ➤Default parameters allow you to set a default value for a parameter in a function. For example, if you have a function that takes a parameter called name, you can set a default value for the parameter in the function definition:
function greet3(name = 'Guest') {
    console.log(`Hello greet3 ${name}`);
  }
  greet3(); // Hello Guest
  greet3('John'); // Hello John

//todo, Function Scope
// ➤ Every function has a scope. Everything defined within the function is not accessible by code outside the function. Only code within this scope can see the entities defined inside the scope.

let num1 = 10;
var num2 = 20;
console.log('at the global scope');
console.log({ num1, num2 });
func1();
console.log({ num1, num2 });
// console.log({ num3, num4 });  //! Uncaught ReferenceError: num3 is not defined

// function declaration
function func1() {
  let num1 = 101;
  let num2 = 102;
  var num3 = 103;
  console.log('..inside func1');
  if (num1 < num2) {
    console.log('inside if block');
    let num1 = 201;
    // var num2 = 205;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
    // let num3 = 206;
    var num4 = 204;
    num1++;
    num2++;
    num3++;
    num4++;
    console.log({ num1, num2 });
    console.log({ num3, num4 });
  }
  console.log('after if block');
  num3++;
  num4++;
  console.log({ num1, num2 });
  console.log({ num3, num4 });
}

// Functions can be nested inside function body, js is lexically scoped, therefore caution to the scope!

function sameLevel2() {
    let a = 10;
    b = 20;
    console.log({a, b});
}
function sameLevel1() {
    let a = 30;
    let b = 8;
    console.log({a, b});
    sameLevel2();
}

let b = 5;
sameLevel1();
console.log({b});


function outerLevel() {
    let a = 30;
    let b = 8;
    console.log({a, b});
    innerLevel();
    function innerLevel() {
        let a = 10;
        b = 20;
        console.log({a, b});
    }
    console.log({b});
    b = 5;
    console.log({b});
}
console.log({b});


//todo, This Keyword
// ➤ The reserved keyword this refers to a method’s calling object, and it can be used to access properties belonging to that object. Here, using the this keyword inside the object function to refer to the cat object and access its name property.

const cat = {
    name: 'Kitty',
    age: 8,
    whatName() {
        return this.name;
    }
};
console.log(cat.whatName());  // Output: Kitty

// this in a function

// ➤ Every JavaScript function or method has a this context. For a function defined inside of an object, thiswill refer to that object itself. for a function defined outside of an object, thiswill refer to the global object (window in a browser, globalin Nodejs and globalThis for both to always point to global object).

const school = {
    numStudents: 45,
    maxCapacity: 100,
    availableQuota() {
        // this refers to the school object
        // and it's used to access its properties
        return this.maxCapacity - this.numStudents;
    }
};
console.log(school.availableQuota());

// Arrow functions do not have their own this context.
