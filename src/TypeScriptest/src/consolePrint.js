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
