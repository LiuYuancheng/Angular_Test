// This file is used for testing the code in the tutorial:
// https://www.tutorialspoint.com/typescript/typescript_variables.htm

// run the program: 
// tcs consolePrint.ts
// node consolePrint.js

var appName = "testcode";
var score1 = 50;
var score2 = 42.50;
var sumVal = score1 + score2;
console.log("name" + appName);
console.log("1st score :" + score1);
console.log("2nd score :" + score2);
console.log("sum of the scores: " + sumVal);
var str = '1';
var str2 = str;
console.log(typeof (str2));

var b = 3; 
console.log("B:" + (b>>>1));

var num:number = -2

result = num > 0 ? "positive":"negative"
console.log("reuslt:"+result)

var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting;
}());
var message = "Hello World";
console.log(message);
var obj = new Greeting();
obj.greet();
