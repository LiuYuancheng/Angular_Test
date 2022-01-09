// This file is used for testing the code in the tutorial:
// https://www.tutorialspoint.com/typescript/typescript_variables.htm

var appName = "testcode";
var score1 = 50;
var score2 = 42.50;
var sumVal = score1 + score2;
console.log("name" + appName);
console.log("1st score :" + score1);
console.log("2nd score :" + score2);
console.log("sum of the scores: " + sumVal);

var str = '1'
var str2 = <number><any>str
console.log(typeof (str2))

class Greeting {
    greet() {
        console.log("Hello World!!!");
    }
}

var message = "Hello World";
console.log(message);
var obj = new Greeting();
obj.greet();


